import React from "react";
import { makeStyles, Box, Grid, Paper } from "@material-ui/core";
import codeKIT from "../images/codeKIT.png";
import mymode from "../images/mymode.png";
import sortingVisulizer from "../images/sortingVisulizer.png";
import weather_app from "../images/weather_app.png";
import BlogCard from "./BlogCard.jsx";
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

const Blog = () => {
	const classes = useStyles();

	const data = [
		{
			name: "Intro to react hooks",
			description: ["Get clear idea about react  hooks and how to use them"],
			link: "https://hashnode.com/post/intro-to-react-hooks-cksq9lq190iyjvks1gvx5bgt9",
		},
		{
			name: "How to write a good blog?",
			description: ["Learn how to write a good blog by reading a blog"],
			link: "https://hashnode.com/post/how-to-write-a-good-blog-cksr7rn5n0ps4wps1d0ab0dke",
		},
	];
	return (
		<div className={classes.root} id="blogs">
			<h1>My Blogs</h1>
			{data.map((item, index) => (
				<BlogCard key={index} item={item} />
			))}
		</div>
	);
};

export default Blog;
