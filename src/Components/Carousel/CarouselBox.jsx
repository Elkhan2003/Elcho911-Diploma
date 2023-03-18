import React from "react";
import Carousel from "react-bootstrap/Carousel";

import pic1 from "./img/1.webp";
import pic2 from "./img/2.webp";
import pic3 from "./img/3.webp";
import pic4 from "./img/4.webp";
import pic5 from "./img/5.webp";

export const CarouselBox = () => {
	const slides = [
		{
			id: 1,
			image: pic1,
			alt: "First slide",
			caption: {
				title: "First slide label",
				text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
			}
		},
		{
			id: 2,
			image: pic2,
			alt: "Second slide",
			caption: {
				title: "Second slide label",
				text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
			}
		},
		{
			id: 3,
			image: pic3,
			alt: "Third slide",
			caption: {
				title: "Third slide label",
				text: "Nulla vitae elit libero, a pharetra augue mollis interdum."
			}
		},
		{
			id: 4,
			image: pic4,
			alt: "Fourth slide",
			caption: {
				title: "Fourth slide label",
				text: "Nulla vitae elit libero, a pharetra augue mollis interdum."
			}
		},
		{
			id: 5,
			image: pic5,
			alt: "Fifth slide",
			caption: {
				title: "Fifth slide label",
				text: "Nulla vitae elit libero, a pharetra augue mollis interdum."
			}
		}
	];

	return (
		<Carousel>
			{slides.map((slide) => (
				<Carousel.Item key={slide.id} interval={1500}>
					<img className="d-block w-100" src={slide.image} alt={slide.alt} />
					<Carousel.Caption>
						<h3>{slide.caption.title}</h3>
						<p>{slide.caption.text}</p>
					</Carousel.Caption>
				</Carousel.Item>
			))}
		</Carousel>
	);
};
