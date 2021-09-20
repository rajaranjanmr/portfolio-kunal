import React from "react";
import { makeStyles, Box, Grid, Paper } from "@material-ui/core";
import ProjectCard from "./ProjectCard";
import codeKIT from "../images/codeKIT.png";
import mymode from "../images/mymode.png";
import mypoll from "../images/MyPoll.png";
import sortingVisulizer from "../images/sortingVisulizer.png";
import weather_app from "../images/weather_app.png";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	description: {
		display: "inline-block",
		alignItems: "flex-start",
		textAlign: "start",
		fontSize: "20px",
		color: "#61dafb",
	},
	cardContainer: {
		display: "flex",
	},
}));

const Projects = () => {
	const classes = useStyles();

	const data = [
		{
			name: "codeKIT - online coding platform",
			description: [
				"Online coding platform where students can solve coding questions",
			],
			technology: ["react js", "mongoDb", "express"],
			imageURL: codeKIT,
			codeLink: "https://github.com/nikhiljugale007/codekit",
			liveLink: "https://codekit.netlify.app/",
		},
		{
			name: "MyMode- custom call blocker",
			description: [
				"Custom call blocker app with messaging functionality and priority call feature",
			],
			technology: ["android studio", "java"],
			imageURL: mymode,
			codeLink: "https://github.com/nikhiljugale007/MyMode",
			liveLink: "https://github.com/nikhiljugale007/MyMode",
		},

		{
			name: "My Poll",
			description: [
				"Built this realtime Polling app similar to Fast Poll. Users can create and manage anonymous polls with ease.",
			],
			technology: ["react js", "MongoDb", "rest api"],
			imageURL: mypoll,
			codeLink: "https://github.com/nikhiljugale007/My-Poll",
			liveLink: "https://my-poll.netlify.app/",
		},
		{
			name: "Sorting Visualizer",
			description: [
				"Desktop application for visualizing different sorting algorithms.",
			],
			technology: ["graphics.h", "C++"],
			imageURL: sortingVisulizer,
			codeLink: "https://github.com/nikhiljugale007/Sorting-Visualizer",
			liveLink: "https://github.com/nikhiljugale007/Sorting-Visualizer",
		},
	];
	return (
		<div className={classes.root} id="projects">
			<div style={{ fontSize: "50px" }}>
				<Box p={2}>Projects</Box>
			</div>
			<Box m={4} p={4}>
				<Grid container spacing={3} className={classes.cardContainer}>
					{data.map((item, index) => (
						<Grid item sm={12} md={4} lg={3}>
							<ProjectCard item={item} />{" "}
						</Grid>
					))}
				</Grid>
			</Box>
		</div>
	);
};

export default Projects;
