import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
	Navbar,
	Container,
	Nav,
	NavDropdown,
	Form,
	FormControl,
	Button,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Routes, Route, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faVk,
	faInstagram,
	faTelegram,
	faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import css from "./Header.module.css";
import logo from "../img/atom.svg";

import { Home } from "../../Pages/Home";
import { Blog } from "../../Pages/Blog";
import { About } from "../../Pages/About";
import { Compiler } from "../../Pages/Compiler";
import { Test } from "../../Pages/Test";
import { BetaTest } from "./BetaTest";
import { Contacts } from "../../Pages/Contacts";
import { Map } from "../../Pages/Map";
import { Something } from "../../Pages/Something";

export const Header = () => {
	return (
		<>
			<div className={css.wrapper}>
				<div>
					<Navbar
						fixed="top"
						collapseOnSelect
						expand="md"
						bg="dark"
						variant="dark">
						<Container>
							<Navbar.Brand href="https://elkhan2003.github.io/elcho-diploma/">
								<img
									alt="Elcho"
									src={logo}
									width="30"
									height="30"
									className="d-inline-block align-top"
								/>{" "}
								Elcho
							</Navbar.Brand>
							<Navbar.Toggle aria-controls="navbarScroll" />
							<Navbar.Collapse id="navbarScroll">
								<Nav
									className="justify-content-end flex-grow-1 pe-3"
									navbarScroll>
									<LinkContainer to="/">
										<Nav.Link>Главный</Nav.Link>
									</LinkContainer>
									<LinkContainer to="/blog">
										<Nav.Link>Новости</Nav.Link>
									</LinkContainer>
									<LinkContainer to="/about">
										<Nav.Link>Теория</Nav.Link>
									</LinkContainer>
									<LinkContainer to="/compiler">
										<Nav.Link>Компилятор</Nav.Link>
									</LinkContainer>
									<LinkContainer to="/test">
										<Nav.Link>ПройтиТест</Nav.Link>
									</LinkContainer>

									<NavDropdown title="Контакты" id="navbarScrollingDropdown">
										<LinkContainer to="/contacts">
											<NavDropdown.Item>Контакты</NavDropdown.Item>
										</LinkContainer>
										<LinkContainer to="/Map">
											<NavDropdown.Item>Геолокация</NavDropdown.Item>
										</LinkContainer>
										<NavDropdown.Divider />
										<LinkContainer to="/Something" disabled>
											<NavDropdown.Item>Something else here</NavDropdown.Item>
										</LinkContainer>
									</NavDropdown>

									<NavDropdown
										title="BetaTest"
										id="navbarScrollingDropdown"
										disabled>
										<LinkContainer to="/BetaTest">
											<NavDropdown.Item>test 1</NavDropdown.Item>
										</LinkContainer>
									</NavDropdown>
									{/* <Nav.Link href="#" disabled>
                                        Скоро
                                    </Nav.Link> */}
								</Nav>

								<Form className="d-flex">
									{/* <FormControl
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    /> */}
									<a
										href="https://drive.google.com/file/d/1YtFJo3Cw1R06mljPAGFdpxr1YjLYLNUF/view?usp=sharing"
										target="_blank">
										{/* <Button variant="outline-info">User'sGuide</Button> */}
										<Button variant="outline-info">
											Руководство пользователя
										</Button>
									</a>
								</Form>
							</Navbar.Collapse>
						</Container>
					</Navbar>

					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/blog" element={<Blog />} />
						<Route path="/about" element={<About />} />
						<Route path="/compiler" element={<Compiler />} />
						<Route path="/test" element={<Test />} />
						<Route path="/contacts" element={<Contacts />} />
						<Route path="/map" element={<Map />} />
						<Route path="/something" element={<Something />} />
						<Route path="/BetaTest" element={<BetaTest />} />
					</Routes>
				</div>

				<footer className={css.footer}>
					<Container>
						<div className={css.footer__body}>
							<nav className={css.footer__list}>
								<Link className={css.footer__link} to="/">
									Главный
								</Link>
								<Link className={css.footer__link} to="/blog">
									Новости
								</Link>
								<Link className={css.footer__link} to="/about">
									Теория
								</Link>
								<Link className={css.footer__link} to="/compiler">
									Компилятор
								</Link>
								<Link className={css.footer__link} to="/test">
									Пройти-Тест
								</Link>
								<a
									href="https://drive.google.com/file/d/1YtFJo3Cw1R06mljPAGFdpxr1YjLYLNUF/view?usp=sharing"
									className={css.footer__link}
									target="_blank">
									User'sGuide
								</a>
							</nav>

							<div>
								<div className={css.footer__list__icon}>
									<div className={css.footer__link__icon}>
										<a href="https://vk.com/elcho_effects" target="_ blank">
											<FontAwesomeIcon icon={faVk} />
										</a>
									</div>
									<div className={css.footer__link__icon}>
										<a href="https://t.me/Elcho_Effects/" target="_ blank">
											<FontAwesomeIcon icon={faTelegram} />
										</a>
									</div>
									<div className={css.footer__link__icon}>
										<a
											href="https://www.instagram.com/elcho911/"
											target="_ blank">
											<FontAwesomeIcon icon={faInstagram} />
										</a>
									</div>
									<div className={css.footer__link__icon}>
										<a href="https://wa.me/996990385056/" target="_ blank">
											<FontAwesomeIcon icon={faWhatsapp} />
										</a>
									</div>
								</div>
							</div>
						</div>

						<div className={css.footer__title}>
							<div className={css.footer__title__1}>
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

							<div className={css.footer__title__2}>
								<p>
									Наш адрес: <br />
									Кыргызстан <br />
									г. Каракол <br />
									ул. ​​Абдрахманова 130 <br />
								</p>
							</div>
						</div>

						<div className={css.footer__info}>
							<div className={css.footer__license}>
								<p>
									© 2022 Иссык-Кульский государственный университет им. К.
									Тыныстанова
								</p>
							</div>

							<div className={css.footer__call}>
								<li>
									<span>Тел: </span>
									<a href="tel:+996990385056" className={css.menu__link}>
										+996990385056
									</a>
								</li>
							</div>
						</div>
					</Container>
				</footer>
			</div>
		</>
	);
};
