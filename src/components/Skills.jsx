import React from "react";
import { makeStyles, Box, Grid, Paper } from "@material-ui/core";
import hi from "../images/me.png";
import react_logo from "../images/react_logo.svg";
import html_logo from "../images/html_logo.svg";
import css_logo from "../images/css_logo.svg";
import js_logo from "../images/js_logo.svg";
import cpp_logo from "../images/cpp_logo.svg";
import java_logo from "../images/java_logo.svg";
import mongodb_logo from "../images/mongodb_logo.svg";
import photography_logo from "../images/photography1.jpeg";
import kinemaster from "../images/kinemaster.png";
import photoedit from "../images/photoedit.jpeg";
import videoedit from "../images/videoediting.webp";
//import  from "../images/photography1.jpeg";


import { motion } from "framer-motion";

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
	logoContainer: {
		width: "150px",
		height: "150px",
		borderRadius: "14px",
		boxShadow: "0px 10px 30px hsl(185, 75%, 35%)",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#fff",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		margin: "2px",
	},
	allLogoContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		color: "#000",
	},
}));

const Skills = () => {
	const classes = useStyles();
	const data = [
		{ logo: photography_logo, def: "HTML" },
		{ logo: kinemaster, def: "CSS" },
		{ logo: photoedit, def: "REACT" },
		{ logo: videoedit, def: "MONGODB" },
		// { logo: js_logo, def: "Javascript" },
		// { logo: cpp_logo, def: "CPP" },
		// { logo: java_logo, def: "JAVA" },
	];
	return (
		<div className={classes.root} id="skills">
			<div style={{ fontSize: "50px" }}>
				<Box p={2}>Skils </Box>
			</div>
			<div>
				<Box m={4} p={4}>
					<Grid container  spacing={6}  className={classes.allLogoContainer}>
						{data.map((item, index) => (
                        <Grid item xs={6} md={4} lg={1} >
								<div
									className={classes.logoContainer}
									style={{ backgroundImage: `url(${item.logo})` }}
                                    >								
                                    </div>
							
                        </Grid>
						))}
						{/* <div
							className={classes.logoContainer}
							style={{ backgroundImage: `url(${react_logo})` }}
						></div>
						<div
							className={classes.logoContainer}
							style={{ backgroundImage: `url(${html_logo})` }}
						></div>
						<div
							className={classes.logoContainer}
							style={{ backgroundImage: `url(${css_logo})` }}
						></div>
						<div
							className={classes.logoContainer}
							style={{ backgroundImage: `url(${js_logo})` }}
						></div>

						<div
							className={classes.logoContainer}
							style={{ backgroundImage: `url(${cpp_logo})` }}
						></div>
						<div
							className={classes.logoContainer}
							style={{ backgroundImage: `url(${java_logo})` }}
						></div> */}
					</Grid>
				</Box>
			</div>
		</div>
	);
};

export default Skills;
