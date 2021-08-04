import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",
	},
	description: {
		display: "inline-block",
		alignItems: "flex-start",
		textAlign: "start",
		fontSize: "20px",
		color: "#61dafb",
	},
	descr: {
		display: "flex",
		flexDirection: "row",
	},
}));

const ExperienceCard = (props) => {
	const { role, company, date, description } = props.item;
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div style={{ fontSize: "30px", color: "#000" }}>{role}</div>
			<div>{company}</div>
			<div>{date}</div>
			<div className={classes.description}>
				{description.map((item, index) => (
					<div key={index} className={classes.descr}>
						✔️<div> {" " + item}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ExperienceCard;
