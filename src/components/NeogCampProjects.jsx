import React from "react";
import { makeStyles, Box, Grid, Paper } from "@material-ui/core";
import ProjectCard from "./ProjectCard";

import BirthdayPallindrome from "../images/BirthdayPallindrome.PNG";
import ProfitLoss from "../images/ProfitLoss.PNG";
import FunWithTriangles from "../images/FunWithTriangles.PNG";
import LuckyBirthday from "../images/LuckyBirthday.PNG";
import CashRegister from "../images/CashRegister.PNG";
import DotharakiTranslator from "../images/DotharakiTranslator.PNG";
import FamousSecond from "../images/FamousSecond.PNG";
import FruitInterpretor from "../images/FruitInterpretor.PNG";
import FirstPrj from "../images/FirstPrj.PNG";
import MinionSpeek from "../images/MinionSpeek.PNG";
import MoodEmoji from "../images/MoodEmoji.PNG";
import WebSeriesRecc from "../images/WebSeriesRecc.PNG";
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
}));

const NeogCampProjects = () => {
	const classes = useStyles();

	const data = [
		{
			name: "Profit or Loss",
			description: [
				"Take initial and current stock price and quantity as input andTell the user how much profit or loss he/she is making on a stock.",
			],
			technology: ["react js"],
			imageURL: ProfitLoss,
			codeLink: "https://github.com/nikhiljugale007/profit-loss-react-app",
			liveLink: "https://profit-loss-react-app.netlify.app",
		},
		{
			name: "Birthday Pallindrome",
			description: [
				"Tell your friends if their birthdates are palindrome.If birhtday is not pallindrom it shows nearest pallindrome",
			],
			technology: ["react js"],
			imageURL: BirthdayPallindrome,
			codeLink: "https://github.com/nikhiljugale007/birthday-pallindrome",
			liveLink: "https://birthday-pallindrome-react-app.netlify.app/",
		},

		{
			name: "Fun With Triangles",
			description: [
				"Simple react to larn about properties of triangles and test your knowledge throught sample quiz",
			],
			technology: ["react js", "react-router"],
			imageURL: FunWithTriangles,
			codeLink: "https://github.com/nikhiljugale007/fun-with-triangles",
			liveLink: "https://fun-with-triangles-react-app.netlify.app/",
		},
		{
			name: "Lucky Birhtday",
			description: [
				"React app that checks if users birthdates are lucky or not ",
			],
			technology: ["react js"],
			imageURL: LuckyBirthday,
			codeLink: "https://github.com/nikhiljugale007/lucky_birhtday",
			liveLink: "https://lucky-birthday-react-app.netlify.app",
		},
		{
			name: "Cash Register",
			description: [
				"User can enter the bill amount and cash given by the customer and know minimum number of notes to return.",
			],
			technology: ["react js"],
			imageURL: CashRegister,
			codeLink: "https://github.com/nikhiljugale007/cash-register",
			liveLink: "https://cash-register-react-app.netlify.app/",
		},
		{
			name: "Web Series Recommender",
			description: ["Find out some of the exciting football matches played."],
			technology: ["react js"],
			imageURL: WebSeriesRecc,
			codeLink:
				"https://codesandbox.io/s/condescending-worker-j2se5?file=/src/App.js",
			liveLink: "https://j2se5.csb.app/",
		},
		{
			name: "🍎Fruits interpreter🍎",
			description: [
				"A fruit emoji interpreted app made in react.JS. You can know the name of fruit-emoji by using this app",
			],
			technology: ["react js"],
			imageURL: FruitInterpretor,
			codeLink: "https://codesandbox.io/s/fruit-intepreter-1inbu",
			liveLink: "https://1inbu.csb.app/",
		},
		{
			name: "😃Mood-Emoji😃",
			description: ["You can know the meaning of emojis by using this app"],
			technology: ["html", "css", "javascript"],
			imageURL: MoodEmoji,
			codeLink: "https://codesandbox.io/s/moodemoji-8b1mr",
			liveLink: "https://8b1mr.csb.app/",
		},
		{
			name: "Dothraki Translator",
			description: [
				"A fun web app in JavaScript using funtranslations.com API which transaltes your english statements into dothraki language.",
			],
			technology: ["html", "CSS", "javascript"],
			imageURL: DotharakiTranslator,
			codeLink: "https://github.com/nikhiljugale007/Dothraki-translator",
			liveLink: "https://dotharaki-translator.netlify.app/",
		},
		{
			name: "Minions Speak",
			description: [
				"A fun web app in JavaScript using funtranslations.com API which transaltes your english statements into minions language ",
			],
			technology: ["html", "CSS", "javascript"],
			imageURL: MinionSpeek,
			codeLink: "https://github.com/nikhiljugale007/minion-speak",
			liveLink: "https://minion-speack-translator.netlify.app/",
		},
		{
			name: "Famous second things in world!!",
			description: [
				"A CLI quiz game app built with node.JS to test knowldge about most famous second things in world",
			],
			technology: ["node js"],
			imageURL: FamousSecond,
			codeLink: "https://github.com/nikhiljugale007/custom_quiz_game_Ass1",
			liveLink:
				"https://replit.com/@nikhiljugale007/Assignment1?embed=1&output=1",
		},
		{
			name: "How well you know me? ",
			description: [
				"A CLI quiz game app built with node.JS. You can send this to your friends and find out who actually knows you better.",
			],
			technology: ["node js"],
			imageURL: FirstPrj,
			codeLink: "https://github.com/nikhiljugale007/how_much_you_know_me",
			liveLink:
				"https://replit.com/@nikhiljugale007/HowMuchYouKnowMe?embed=1&output=1",
		},
	];
	return (
		<div className={classes.root} id="section1">
			<div style={{ fontSize: "50px" }}>
				<Box p={2}>NeogCamp Projects</Box>
			</div>
			<Box m={4} p={4}>
				<Grid container spacing={3} className={classes.cardContainer}>
					{data.map((item, index) => (
						<Grid item sm={12} md={4} lg={3}>
							<ProjectCard item={item} />{" "}
						</Grid>
					))}
				</Grid>
			</Box>
		</div>
	);
};

export default NeogCampProjects;
