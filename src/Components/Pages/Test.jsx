import { Container } from "react-bootstrap";
import { Test_1 } from "../Test/Test_1.jsx";
import { Test_2 } from "../Test/Test_2.jsx";
import { Test_3 } from "../Test/Test_3.jsx";
import { Test_4 } from "../Test/Test_4.jsx";
import { Test_5 } from "../Test/Test_5.jsx";
import css from "./Pages.module.scss";

export const Test = () => {
	return (
		<div className={css.content}>
			<Container>
				<Test_1 />
				<Test_5 />
				<Test_3 />
				<Test_4 />
				<Test_2 />
			</Container>
		</div>
	);
};
