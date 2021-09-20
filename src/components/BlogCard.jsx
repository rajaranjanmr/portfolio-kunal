import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Grid } from "@material-ui/core/";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { motion } from "framer-motion";

const useStyles = makeStyles({
	root: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "left",
		maxWidth: "700px",
		borderRadius: "20px",
		border: "2px solid #000",
		margin: "20px",
	},
	media: {
		height: 400,
	},
	desc: {
		display: "flex",
		flexDirection: "column",
		textAlign: "left",
		backgroundColor: "#fff",
	},
	main: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
        margin:"20px"
	},
});

export default function BlogCard(props) {
	const classes = useStyles();
	const { name, description, link } = props.item;
	return (
		<div className={classes.main}>
			<Grid item xs={12} md={6}>
				<Card className={classes.root}>
					<CardActionArea>
						<CardContent className={classes.desc}>
							<Typography
								gutterBottom
								variant="h5"
								component="h2"
								style={{ marginBottom: "0px", fontWeight: 900 }}
							>
								{name}
							</Typography>
							<Typography variant="h6" color="#000">
								{description}
							</Typography>
							<a href={link} target="_blank" style={{ textDecoration: "none" }}>
								<Button variant="outlined" color="primary">
									Read Blog
								</Button>
							</a>
						</CardContent>
					</CardActionArea>
				</Card>
			</Grid>
		</div>
	);
}
