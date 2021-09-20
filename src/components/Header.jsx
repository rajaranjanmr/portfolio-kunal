// import React from "react";
// import { makeStyles, Box } from "@material-ui/core";
// import Brightness4Icon from "@material-ui/icons/Brightness4";
// const useStyles = makeStyles((theme) => ({
// 	root: {
// 		width: "100%",
// 		display: "flex",
// 		fontSize: "30px",
// 		justifyContent: "space-between",
// 	},
// 	leftContainer: {
// 		margin: theme.spacing(4),
// 		display: "flex",
// 	},
// 	rightContainer: {
// 		margin: theme.spacing(4),
// 	},
// 	links: {
// 		padding: "10px",
// 		textDecoration: "none",
// 		color: "#61DAFB",
// 	},
// }));
// const Header = () => {
// 	const classes = useStyles();
// 	return (
// 		<div className={classes.root}>
// 			<Box className={classes.leftContainer}>NAMASTE🙏 </Box>
// 			<Box className={classes.rightContainer}>
// 				<a className={classes.links} href="#experience">
// 					Experience
// 				</a>
// 				<a className={classes.links} href="#projects">
// 					Projects
// 				</a>
// 				<a className={classes.links} href="#blogs">
// 					Blogs
// 				</a>
// 				<a className={classes.links} href="#contact">
// 					Contact
// 				</a>
// 			</Box>
// 		</div>
// 	);
// };

// export default Header;


/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import { makeStyles, Box } from "@material-ui/core";
import "./Header.css";
import { CSSTransition } from "react-transition-group";

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
 	{/* <Box className="leftContainer">NAMASTE🙏 </Box> */}
     <a  href="#" style={{textDecoration:"none",color:"#61dafb",padding:"10px"}}>
 					Home
 				</a>
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          {/* <a href="/">Home</a>
          <a href="/">Articles</a>
          <a href="/">About</a>
          <button>Logout</button> */}
          <a  href="#experience">
 					Experience
 				</a>
 				<a  href="#projects">
 					Projects
 				</a>
 				<a href="#blogs">
 					Blogs
 				</a>
 				<a  href="#contact">
 					Contact
 				</a>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger" style={{color:"#fff"}}>
      ☰
      </button>
    </header>
  );
}