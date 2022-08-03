import React from "react";
import { makeStyles, Box, Grid, Paper } from "@material-ui/core";
import ProjectCard from "./ProjectCard";
import codeKIT from "../images/codeKIT.png";
import mymode from "../images/mymode.png";
import mypoll from "../images/MyPoll.png";
import sortingVisulizer from "../images/sortingVisulizer.png";
import weather_app from "../images/weather_app.png";
import image1 from "../images/image1.JPG";
import image2 from "../images/image2.JPG";
import image3 from "../images/image3.JPG";
import image4 from "../images/image4.JPG";
import image5 from "../images/image5.JPG";
import image6 from "../images/image6.JPG";
import image7 from "../images/image7.JPG";
import image8 from "../images/image8.JPG";
import image9 from "../images/image9.png";

import image10 from "../images/image10.jpg";

import image11 from "../images/image11.jpg";

import image12 from "../images/image12.jpg";

import image13 from "../images/image13.png";
import image14 from "../images/image14.jpg";



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
			imageURL: image1,
			codeLink: "https://github.com/nikhiljugale007/codekit",
			liveLink: "https://codekit.netlify.app/",
		},
		{
			name: "MyMode- custom call blocker",
			description: [
				"Custom call blocker app with messaging functionality and priority call feature",
			],
			technology: ["android studio", "java"],
			imageURL: image2,
			codeLink: "https://github.com/nikhiljugale007/MyMode",
			liveLink: "https://github.com/nikhiljugale007/MyMode",
		},

		{
			name: "My Poll",
			description: [
				"Built this realtime Polling app similar to Fast Poll. Users can create and manage anonymous polls with ease.",
			],
			technology: ["react js", "MongoDb", "rest api"],
			imageURL: image3,
			codeLink: "https://github.com/nikhiljugale007/My-Poll",
			liveLink: "https://my-poll.netlify.app/",
		},
		{
			name: "Sorting Visualizer",
			description: [
				"Desktop application for visualizing different sorting algorithms.",
			],
			technology: ["graphics.h", "C++"],
			imageURL: image4,
			codeLink: "https://github.com/nikhiljugale007/Sorting-Visualizer",
			liveLink: "https://github.com/nikhiljugale007/Sorting-Visualizer",
		},
		{
			name: "Sorting Visualizer",
			description: [
				"Desktop application for visualizing different sorting algorithms.",
			],
			technology: ["graphics.h", "C++"],
			imageURL: image5,
			codeLink: "https://github.com/nikhiljugale007/Sorting-Visualizer",
			liveLink: "https://github.com/nikhiljugale007/Sorting-Visualizer",
		},
		{
			name: "Sorting Visualizer",
			description: [
				"Desktop application for visualizing different sorting algorithms.",
			],
			technology: ["graphics.h", "C++"],
			imageURL: image6,
			codeLink: "https://github.com/nikhiljugale007/Sorting-Visualizer",
			liveLink: "https://github.com/nikhiljugale007/Sorting-Visualizer",
		},
		{
			name: "Sorting Visualizer",
			description: [
				"Desktop application for visualizing different sorting algorithms.",
			],
			technology: ["graphics.h", "C++"],
			imageURL: image7,
			codeLink: "https://github.com/nikhiljugale007/Sorting-Visualizer",
			liveLink: "https://github.com/nikhiljugale007/Sorting-Visualizer",
		},
		{
			name: "Sorting Visualizer",
			description: [
				"Desktop application for visualizing different sorting algorithms.",
			],
			technology: ["graphics.h", "C++"],
			imageURL: image8,
			codeLink: "https://github.com/nikhiljugale007/Sorting-Visualizer",
			liveLink: "https://github.com/nikhiljugale007/Sorting-Visualizer",
		},


		{
			name: "Sorting Visualizer",
			description: [
				"Desktop application for visualizing different sorting algorithms.",
			],
			technology: ["graphics.h", "C++"],
			imageURL: image9,
			codeLink: "https://github.com/nikhiljugale007/Sorting-Visualizer",
			liveLink: "https://github.com/nikhiljugale007/Sorting-Visualizer",
		},
		{
			name: "Sorting Visualizer",
			description: [
				"Desktop application for visualizing different sorting algorithms.",
			],
			technology: ["graphics.h", "C++"],
			imageURL: image10,
			codeLink: "https://github.com/nikhiljugale007/Sorting-Visualizer",
			liveLink: "https://github.com/nikhiljugale007/Sorting-Visualizer",
		},
		{
			name: "Sorting Visualizer",
			description: [
				"Desktop application for visualizing different sorting algorithms.",
			],
			technology: ["graphics.h", "C++"],
			imageURL: image11,
			codeLink: "https://github.com/nikhiljugale007/Sorting-Visualizer",
			liveLink: "https://github.com/nikhiljugale007/Sorting-Visualizer",
		},
		{
			name: "Sorting Visualizer",
			description: [
				"Desktop application for visualizing different sorting algorithms.",
			],
			technology: ["graphics.h", "C++"],
			imageURL: image12,
			codeLink: "https://github.com/nikhiljugale007/Sorting-Visualizer",
			liveLink: "https://github.com/nikhiljugale007/Sorting-Visualizer",
		},



		{
			name: "Sorting Visualizer",
			description: [
				"Desktop application for visualizing different sorting algorithms.",
			],
			technology: ["graphics.h", "C++"],
			imageURL: image13,
			codeLink: "https://github.com/nikhiljugale007/Sorting-Visualizer",
			liveLink: "https://github.com/nikhiljugale007/Sorting-Visualizer",
		},
		{
			name: "Sorting Visualizer",
			description: [
				"Desktop application for visualizing different sorting algorithms.",
			],
			technology: ["graphics.h", "C++"],
			imageURL: image14,
			codeLink: "https://github.com/nikhiljugale007/Sorting-Visualizer",
			liveLink: "https://github.com/nikhiljugale007/Sorting-Visualizer",
		},
	];
	return (
		<div className={classes.root} id="projects">
			<div style={{ fontSize: "50px" }}>
				<Box p={2}>Photography</Box>
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
