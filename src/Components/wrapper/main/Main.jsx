import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../../Pages/Home.jsx";
import { Blog } from "../../Pages/Blog.jsx";
import { About } from "../../Pages/About.jsx";
import { Compiler } from "../../Pages/Compiler.jsx";
import { Test } from "../../Pages/Test.jsx";
import { Contacts } from "../../Pages/Contacts.jsx";
import { Map } from "../../Pages/Map.jsx";
import { Something } from "../../Pages/Something.jsx";

export const Main = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/about" element={<About />} />
				<Route path="/compiler" element={<Compiler />} />
				<Route path="/test" element={<Test />} />
				<Route path="/contacts" element={<Contacts />} />
				<Route path="/map" element={<Map />} />
				<Route path="/something" element={<Something />} />
			</Routes>
		</>
	);
};
