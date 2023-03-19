import { Container, Card, Placeholder } from "react-bootstrap";
import scss from "./Pages.module.scss";

import { News } from "../News/News.jsx";

export const Blog = () => {
	return (
		<div style={{ marginTop: "70px", padding: "0 0" }} className={scss.content}>
			<Container>
				<News />
			</Container>
		</div>
	);
};
