import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Box } from "@material-ui/core/";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
	root: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "left",
		// boxShadow: "0px 10px 30px #53d61f",
		borderRadius: "20px",
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
});

export default function ProfileCard(props) {
	const classes = useStyles();
	const { name, description, technology, imageURL, codeLink, liveLink } =
		props.item;
	return (
		<Card className={classes.root} sm={12} md={4}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={imageURL}
					title="Contemplative Reptile"
				/>
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
					<div
						style={{ display: "flex", flexDirection: "row", marginTop: "10px" }}
					>
						{technology.map((item, index) => (
							<Box>
								<Button variant="outlined" style={{ fontWeight: 900 }}>
									{item}
								</Button>
							</Box>
						))}
					</div>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Box>
					<a href={codeLink} target="_blank">
						<Button
							size="small"
							variant="contained"
							color="primary"
							style={{
								margin: "10px",
								backgroundColor: "#61dafb",
								color: "#000",
								fontWeight: 900,
							}}
						>
							View Code
						</Button>
					</a>
					<a href={liveLink} target="_blank">
						<Button
							size="small"
							variant="contained"
							color="primary"
							style={{
								margin: "10px",
								backgroundColor: "#61dafb",
								color: "#000",
								fontWeight: 900,
							}}
						>
							Live Demo
						</Button>
					</a>
				</Box>
			</CardActions>
		</Card>
	);
}
