import React from "react";
import { makeStyles, Box, Grid, Paper } from "@material-ui/core";
import hi from "../images/me.png";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	icon: {
		margin: "10px",
		fontSize: 70,
		color: "#000",
	},
}));

const Footer = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div style={{ fontSize: "50px" }}>
				<Box p={2}>Lets Connect ! </Box>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
				}}
			>
				{/* <motion.div
					whileHover={{
						scale: 1.2,
						transition: {
							duration: 0.2,
						},
					}}
				>
					<a href="https://github.com/nikhiljugale007" target="_blank">
						<GitHubIcon className={classes.icon} />
					</a>
				</motion.div> */}
				{/* <motion.div
					whileHover={{
						scale: 1.2,
						transition: {
							duration: 0.2,
						},
					}}
				>
					<a
						href="https://www.linkedin.com/in/nikhiljugale007/"
						target="_blank"
					>
						<LinkedInIcon className={classes.icon} />
					</a>
				</motion.div> */}
				<motion.div
					whileHover={{
						scale: 1.2,
						transition: {
							duration: 0.2,
						},
					}}
				>
					<a href="https://instagram.com/_kunaltaleda?igshid=YmMyMTA2M2Y=" target="_blank">
						<InstagramIcon className={classes.icon} />
					</a>
				</motion.div>

				{/* <LinkedInIcon className={classes.icon} />
				<InstagramIcon className={classes.icon} />
				<EmailIcon className={classes.icon} /> */}
			</div>
			<div style={{ color: "#000" }}>
				or drop mail at <mark>taledakunal@gmail.com</mark>
			</div>
		</div>
	);
};

export default Footer;

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
