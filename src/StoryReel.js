import React from "react";
import "./StoryReel.css";
import Story from "./Story.js";
function StoryReel() {
	return (
		<div className="storyReel">
			<Story
				image="https://www.designyourway.net/blog/wp-content/uploads/2017/12/3767156-amazing-wallpapers-hd-1250x834.jpg"
				profileSrc="https://www.sportscasting.com/wp-content/uploads/2015/02/David-Beckham-640x444.jpg"
				title="David Beckham"
			/>
			<Story
				image="https://wallpaperaccess.com/full/410688.jpg"
				profileSrc="https://oyogist.com/wp-content/uploads/2020/08/Screenshot_20200806-110331.png"
				title="Willian"
			/>
			<Story
				image="https://newevolutiondesigns.com/images/freebies/cool-wallpaper-3.jpg"
				profileSrc="https://e0.365dm.com/20/02/800x600/skysports-aubameyang-arsenal_4929370.jpg"
				title="Aubameyang"
			/>
			<Story
				image="https://images.template.net/wp-content/uploads/2016/06/21052834/3D-Horror-Amazing-Wallpaper-Download.jpg"
				profileSrc="https://www.arsenal.com/sites/default/files/styles/player_featured_image_1045x658/public/images/Ozil_1045x658_1.jpg?itok=SsX1Db3y"
				title="Mesut Ozil"
			/>
			<Story
				image="https://images.hdqwalls.com/wallpapers/amazing-spiderman-4k-art-yx.jpg"
				profileSrc="https://www.telegraph.co.uk/content/dam/football/2018/08/24/TELEMMGLPICT000172319824_trans_NvBQzQNjv4BqN7kF8Fb6ID_G1m99xXXMy1XHGbQ7wRgg94qpB-g8UqI.jpeg"
				title="Aaron Ramsey"
			/>
		</div>
	);
}

export default StoryReel;
