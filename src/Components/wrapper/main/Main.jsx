import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/Home.jsx";
import { Blog } from "../../pages/Blog.jsx";
import { About } from "../../pages/About.jsx";
import { Compiler } from "../../pages/Compiler.jsx";
import { Test } from "../../pages/Test.jsx";
import { Contacts } from "../../pages/Contacts.jsx";
import { Map } from "../../pages/Map.jsx";
import { Something } from "../../pages/Something.jsx";

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
