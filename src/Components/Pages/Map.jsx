import React, { useState, useEffect } from "react";
import { Triangle } from "react-loader-spinner";
import { Container } from "react-bootstrap";
import scss from "./Pages.module.scss";
import { MapGIS } from "../mapGIS/MapGIS.jsx";

export const Map = () => {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 300);
	}, []);

	return (
		<div className={scss.content}>
			{loading ? (
				<>
					<div className={scss.loading}>
						<Triangle
							height="200"
							width="200"
							color="red"
							ariaLabel="loading"
						/>
					</div>
				</>
			) : (
				<>
					<Container>
						<div className={scss.map}>
							<MapGIS />
						</div>
					</Container>
				</>
			)}
		</div>
	);
};
