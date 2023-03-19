import React, { useEffect } from "react";
import { load } from "@2gis/mapgl";
import { Clusterer } from "@2gis/mapgl-clusterer";
import scss from "./MapGIS.module.scss";

export const MAP_CENTER = [78.40009817306232, 42.49196266923323];

export const MapGIS = () => {
	useEffect(() => {
		let map;
		let clusterer;

		load().then((mapgl) => {
			map = new mapgl.Map("map-container", {
				center: MAP_CENTER,
				zoom: 15,
				key: "a1893935-6834-4445-b97a-3405fb426c5b"
			});

			map.on("click", (e) => console.log(e));

			clusterer = new Clusterer(map, {
				radius: 60
			});

			const markers = [{ coordinates: MAP_CENTER }];
			clusterer.load(markers);
		});

		// Destroy the map, if MapGIS component is going to be unmounted
		return () => {
			clusterer && clusterer.destroy();
			map && map.destroy();
		};
	}, []);

	const MapWrapper = React.memo(() => {
		return (
			<div
				className={scss.map}
				id="map-container"
				style={{ width: "100%", height: "100%" }}></div>
		);
	});

	return <MapWrapper />;
};
