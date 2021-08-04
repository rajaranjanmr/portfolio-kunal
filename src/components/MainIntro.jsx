import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typical from "react-typical";
import { motion } from "framer-motion";
import hi from "../images/hi.png";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		// backgroundColor: "#fff",
		color: "#000",
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
	nameContainer: {
		height: "100%",
		// backgroundColor: "#fff",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	textContainer: {
		display: "flex",
		flexDirection: "column",
		fontSize: "45px",
		width: "100%",
		fontWeight: 600,
		width: "500px",
		height: "500px",
		alignItems: "center",
		justifyContent: "center",
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
	introText: {
		fontSize: "30px",
		textAlign: "left",
	},
	downloadResume: {
		display: "flex",
		justifyContent: "center",
		padding: "20px",
	},
}));

export default function CenteredGrid() {
	const classes = useStyles();
	const [hidden, setHidden] = React.useState(false);
	return (
		<div className={classes.root}>
			<Grid
				container
				spacing={3}
				style={{ height: "100%" }}
				p={4}
				className={classes.nameContainer}
			>
				<Grid item xs={12} md={6} className={classes.nameContainer}>
					<div className={classes.imageContainer}></div>
				</Grid>
				<Grid item xs={12} md={6} className={classes.nameContainer}>
					<Box className={classes.textContainer} p={10}>
						<div>👋Hi there, my name is:</div>
						<div style={{ fontWeight: 900 }}>Nikhil Jugale.</div>
						<div>
							I am{" "}
							<Typical
								loop={Infinity}
								wrapper="b"
								steps={[
									"Developer 💻  ",
									1000,
									"Engineer 👨🏻‍🎓  ",
									1000,
									"Traveller ✈️  ",
									1000,
								]}
							/>
						</div>
						<br />
						<div className={classes.introText}>
							<div> 👉Final Year CSE student</div>
							<div> 👉Web Developer (MERN)</div>
							<div style={{ width: "120%" }}>
								{" "}
								👉Frontend Developer Intern @Sapio{" "}
							</div>
							<div className={classes.downloadResume}>
								<motion.button
									whileHover={{
										boxShadow: "0px 10px 30px hsl(185, 75%, 35%)",
										scale: 1.2,
										transition: {
											duration: 0.2,
										},
									}}
								>
									<a
										href="https://drive.google.com/file/d/1sDAPlfQZEadJ2z7HSF-wKAw7YTdXBeiY/view?usp=sharing"
										target="_blank"
										style={{ textDecoration: "none" }}
									>
										<Box
											style={{
												fontSize: "30px",
												fontWeight: 900,
												color: "#000",
											}}
										>
											RESUME
										</Box>
									</a>
								</motion.button>
							</div>
						</div>
					</Box>
				</Grid>
			</Grid>
		</div>
	);
}
