import { LocalHospital } from "@material-ui/icons";
import userEvent from "@testing-library/user-event";
import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow.js";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import { ExpandMoreOutlined } from "@material-ui/icons";
function Sidebar() {
	return (
		<div className="sidebar">
			<SidebarRow
				src="https://avatars2.githubusercontent.com/u/53648006?s=400&u=d6be726f930deb0007ab0f8ed052a26eac1214a2&v=4"
				title="Vinay N Ram"
			></SidebarRow>
			<SidebarRow
				Icon={LocalHospitalIcon}
				title="COVID-19 Information Center"
			/>
			<SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
			<SidebarRow Icon={PeopleIcon} title="Friends" />
			<SidebarRow Icon={ChatIcon} title="Messenger" />
			<SidebarRow Icon={StorefrontIcon} title="Marketplace" />
			<SidebarRow Icon={VideoLibraryIcon} title="Videos" />
			<SidebarRow Icon={ExpandMoreOutlined} title="Marketplace" />
		</div>
	);
}

export default Sidebar;
