import React from "react";
import ProfileCard from "./ProfileCard";

import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		width: "100vw",
		height: "15vw",
		backgroundColor: "#fff",
	},
}));
const Profile = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<ProfileCard
				name="Rita Correia"
				age="32"
				city="London"
				followers="80K"
				likes="803K"
				photos="1.4K"
			></ProfileCard>
		</div>
	);
};

export default Profile;
