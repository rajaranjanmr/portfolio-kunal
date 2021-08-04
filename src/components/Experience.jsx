import React from "react";
import { makeStyles, Box, Paper } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import experience from "../images/experience.png";
import ExperienceCard from "./ExperienceCard";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",
		boxShadow: "0px 10px 30px #9c8616",
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
		backgroundImage: `url(${experience})`,
		backgroundColor: "#fff",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
	},
	imageWrapper: {
		marginLeft: "50px",
	},
	rightContainer: {
		height: "100%",
		// backgroundColor: "#000",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	leftContainer: {
		height: "100%",
		// backgroundColor: "#000",
		justifyContent: "right",
		alignItems: "right",
	},
}));

export default function Experience() {
	const classes = useStyles();

	const data = [
		{
			role: "Frontend Engineer Intern",
			company: "Sapio Analytics",
			date: "June 2021 - Present ",
			description: [
				"Working on a survey tool",
				"Successfully integrated rest apis into project",
				"Developed responsive and interactive forms with validations using react js and material ui",
			],
		},
		{
			role: "Software Developer Intern",
			company: "Antridge Technology PVT LTD",
			date: "June 2020 - August 2020 ",
			description: [
				"Worked on a social media like android app",
				"Integrated camera functionality to the existing app.",
				"Used android architecture components and jetpack libraries",
			],
		},
		{
			role: "Student Developer",
			company: "Virtual Lab KITCOEK",
			date: "January 2021 - Present",
			description: [
				"Creating simulations for various departments practical using HTML,CSS and JavaScript",
				"Developed simulations for 2 practical's of CSE department",
			],
		},
		{
			role: "Vice President ",
			company: "CodeChef KIT Chapter",
			date: "July 2020 - June 2021",
			description: [
				"Conducted various workshops, seminars for students",
				"Hosted coding competitions for college students.",
			],
		},
	];
	return (
		<div className={classes.root}>
			<div style={{ fontSize: "50px" }}>
				<Box p={2}>Experience</Box>
			</div>
			<Box p={3}>
				<Grid container spacing={3}>
					<Grid item xs={12} md={12} className={classes.leftContainer}>
						<Timeline align="alternate">
							{data.map((item, index) => (
								<TimelineItem key={index}>
									<TimelineSeparator>
										<TimelineDot />
										<TimelineConnector />
									</TimelineSeparator>
									<TimelineContent>
										<Paper elevation={3} className={classes.paper}>
											<ExperienceCard item={item} />
										</Paper>
									</TimelineContent>
								</TimelineItem>
							))}
						</Timeline>
					</Grid>
					{/* <Grid item xs={12} md={6} className={classes.rightContainer}>
					<div style={{ width: "500px", height: "400px" }}>
						<Box p={2} className={classes.imageWrapper}>
							<div className={classes.imageContainer}></div>
						</Box>
					</div>
				</Grid> */}
				</Grid>
			</Box>
		</div>
	);
}
