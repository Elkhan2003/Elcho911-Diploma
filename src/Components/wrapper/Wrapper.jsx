import React from "react";
import "./Wrapper.scss";
import { Header } from "./header/Header.jsx";
import { Main } from "./main/Main.jsx";
import { Footer } from "./footer/Footer.jsx";

export const Wrapper = () => {
	return (
		<>
			<div className="wrapper">
				<header>
					<Header />
				</header>
				<main>
					<Main />
				</main>
				<footer>
					<Footer />
				</footer>
			</div>
		</>
	);
};
