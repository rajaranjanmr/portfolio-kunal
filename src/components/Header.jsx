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
}));
const Header = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Box className={classes.leftContainer}>NAMASTE 🙏</Box>
			<Box className={classes.rightContainer}>
				<div style={{ fontSize: "30px" }}>🔆</div>
				{/* <Brightness4Icon fontSize="large" /> */}
			</Box>
		</div>
	);
};

export default Header;
