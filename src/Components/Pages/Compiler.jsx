import React, { useState, useEffect } from "react";
import { Triangle } from "react-loader-spinner";
import { Container } from "react-bootstrap";
import scss from "./Pages.module.scss";

export const Compiler = () => {
	const [sites, setSites] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("https://my-json-server.typicode.com/Elkhan2003/backend/sites")
			.then((res) => res.json())
			.then((data) => {
				setSites(data);
				setLoading(false);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<div className={scss.content}>
			<Container>
				{loading && (
					<div className={scss.loading}>
						<Triangle
							height={200}
							width={200}
							color="red"
							ariaLabel="loading"
						/>
					</div>
				)}
				{sites.map((site, id) => (
					<div key={id} className={scss.sites__url}>
						<iframe
							title={site.name}
							className={scss.site__url}
							src={site.url1}
						></iframe>
					</div>
				))}
			</Container>
		</div>
	);
};
