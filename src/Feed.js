import { useEffect, useState } from "react";
import React from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import StoryReel from "./StoryReel";
import Post from "./Post";
import db from "./firebase";
import { useStateValue } from "./StateProvider";
function Feed() {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		db.collection("posts").onSnapshot((snapshot) =>
			setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
		);
	}, []);
	return (
		<div className="feed">
			<StoryReel />
			<MessageSender />

			{posts.map((post) => (
				<Post
					key={post.data.id}
					profilePic={post.data.profilePic}
					message={post.data.message}
					timestamp={post.data.timestamp}
					userName={post.data.username}
					image={post.data.image}
				/>
			))}
			<Post
				profilePic="https://avatars2.githubusercontent.com/u/53648006?s=460&u=d6be726f930deb0007ab0f8ed052a26eac1214a2&v=40"
				message="It's working!!"
				timpestamp="21:30 Sep 2"
				userName="Vinay N Ram"
				image="https://editorial.pxcrush.net/carsales/general/editorial/bmw-m3-cs-02-8kvp.jpg?width=1024&height=683"
			/>
			<Post
				profilePic="https://avatars2.githubusercontent.com/u/53648006?s=460&u=d6be726f930deb0007ab0f8ed052a26eac1214a2&v=40"
				message="Lets Goooo!!"
				timpestamp="21:20 Sep 2"
				userName="Vinay N Ram"
				image="https://media3.speedcafe.com/wp-content/uploads/2020/08/P90396990_highRes_spielberg-aut-19th-a-1-1200x800.jpg"
			/>
		</div>
	);
}

export default Feed;
