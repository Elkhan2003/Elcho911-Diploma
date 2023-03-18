import React from "react";
import "./Footer.scss";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faInstagram,
	faTelegram,
	faVk,
	faWhatsapp
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
	return (
		<>
			<footer className="footer__feger">
				<Container>
					<div className="footer__body">
						<nav className="footer__list">
							<Link className="footer__link" to="/">
								Главный
							</Link>
							<Link className="footer__link" to="/blog">
								Новости
							</Link>
							<Link className="footer__link" to="/about">
								Теория
							</Link>
							<Link className="footer__link" to="/compiler">
								Компилятор
							</Link>
							<Link className="footer__link" to="/test">
								Пройти-Тест
							</Link>
							<a
								href="https://drive.google.com/file/d/1YtFJo3Cw1R06mljPAGFdpxr1YjLYLNUF/view?usp=sharing"
								className="footer__link"
								target="_blank"
							>
								User'sGuide
							</a>
						</nav>

						<div>
							<div className="footer__list__icon">
								<div className="footer__link__icon">
									<a href="https://vk.com/elcho_effects" target="_ blank">
										<FontAwesomeIcon icon={faVk} />
									</a>
								</div>
								<div className="footer__link__icon">
									<a href="https://t.me/Elcho_Effects/" target="_ blank">
										<FontAwesomeIcon icon={faTelegram} />
									</a>
								</div>
								<div className="footer__link__icon">
									<a
										href="https://www.instagram.com/elcho911/"
										target="_ blank"
									>
										<FontAwesomeIcon icon={faInstagram} />
									</a>
								</div>
								<div className="footer__link__icon">
									<a href="https://wa.me/996990385056/" target="_ blank">
										<FontAwesomeIcon icon={faWhatsapp} />
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className="footer__title">
						<div className="footer__title__1">
							<p>
								Иностранные языки — английский, французский.
								<br />
								Frontend разработка.
								<br />
								Русский язык, обществознание, математика, подготовка к школе,
								коррекция речи.
								<br />
								Групповые и индивидуальные занятия для детей и взрослых.
								<br />
							</p>
						</div>

						<div className="footer__title__2">
							<p>
								Наш адрес: <br />
								Кыргызстан <br />
								г. Каракол <br />
								ул. ​​Абдрахманова 130 <br />
							</p>
						</div>
					</div>

					<div className="footer__info">
						<div className="footer__license">
							<p>
								© 2022 Иссык-Кульский государственный университет им. К.
								Тыныстанова
							</p>
						</div>

						<div className="footer__call">
							<li>
								<span>Тел: </span>
								<a href="tel:+996990385056" className="menu__link">
									+996990385056
								</a>
							</li>
						</div>
					</div>
				</Container>
			</footer>
		</>
	);
};
