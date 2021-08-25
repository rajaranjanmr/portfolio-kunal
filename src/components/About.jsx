import React from "react";
import { makeStyles, Box, Grid, Paper } from "@material-ui/core";
import hi from "../images/me.png";

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
		justifyContent: "center",
		alignItems: "center",
		fontSize: "30px",
		textAlign: "left",
		color: "#000",
	},
	imageContainer: {
		minWidth: "350px",
		width: "500px",
		maxWidth: "600px",
		height: "500px",
		borderRadius: "14px",
		boxShadow: "0px 10px 30px hsl(185, 75%, 35%)",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		content: hi,
		backgroundImage: `url(${hi})`,
		backgroundColor: "#fff",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
	},
}));

const About = () => {
	const classes = useStyles();

	return (
		<div className={classes.root} id="contact">
			<div style={{ fontSize: "50px" }}>
				<Box p={2}>About </Box>
			</div>
			<Box m={4} p={4}>
				<Grid container spacing={3} className={classes.cardContainer}>
					<Grid item sm={12} md={6}>
						Hi again.
						<br /> I am Web developer( MERN stack) with a demonstrated history
						of working on projects and an enthusiastic learner.I am an
						adaptable, hard-working, honest, confident communicator, and always
						trying to expand my knowledge.
						<br />
						I'm interested in Web Development, Learning New Things & Building
						Side Projects.
					</Grid>
					<Grid
						item
						sm={12}
						md={6}
						style={{
							display: "flex",
							alignItem: "center",
							justifyContent: "center",
						}}
					>
						<div className={classes.imageContainer}></div>
					</Grid>
				</Grid>
			</Box>
		</div>
	);
};

export default About;

{
	/* <Grid container spacing={3} className={classes.cardContainer}>
	<Grid item sm={12} md={6}>
		<div>I am</div>
	</Grid>
	<Grid item sm={12} md={6}>
		<div>
			<div>I am Honest</div>
			<div>I am Creative</div>
			<div>I am open-minded</div>
			<div>I am Hardworking</div>
			<div>I am Honest</div>
			<div>I am team player</div>
		</div>
	</Grid>
</Grid>; */
}
