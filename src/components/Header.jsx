import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import Brightness4Icon from "@material-ui/icons/Brightness4";
const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		display: "flex",
		fontSize: "30px",
		justifyContent: "space-between",
	},
	leftContainer: {
		margin: theme.spacing(4),
		display: "flex",
	},
	rightContainer: {
		margin: theme.spacing(4),
	},
	links: {
		padding: "10px",
		textDecoration: "none",
		color: "#61DAFB",
	},
}));
const Header = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Box className={classes.leftContainer}>NAMASTE 🙏</Box>
			<Box className={classes.rightContainer}>
				<a className={classes.links} href="#experience">
					Experience
				</a>
				<a className={classes.links} href="#projects">
					Projects
				</a>
				<a className={classes.links} href="#blogs">
					Blogs
				</a>
				<a className={classes.links} href="#contact">
					Contact
				</a>
			</Box>
		</div>
	);
};

export default Header;
