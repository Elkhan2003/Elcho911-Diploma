import React, { useState, useEffect } from "react";
import { Triangle } from "react-loader-spinner";
import { Container } from "react-bootstrap";
import scss from "./Pages.module.scss";

export const Map = () => {
	const [site, setSite] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch("https://my-json-server.typicode.com/Elkhan2003/backend/maps")
			.then((response) => response.json())
			.then((json) => {
				setSite(json);
				setLoading(false);
			});
	}, []);

	return (
		<div className={scss.content}>
			<Container>
				{loading && (
					<div className={scss.loading}>
						<Triangle
							height="200"
							width="200"
							color="red"
							ariaLabel="loading"
						/>
					</div>
				)}

				{site.map((el, id) => {
					<div key={id} className={scss.sites__url}>
						<iframe className={scss.site__url} src={el.url1}></iframe>
					</div>;
				})}
			</Container>
		</div>
	);
};
