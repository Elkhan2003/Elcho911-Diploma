import React from "react";
import {
	Button,
	Container,
	Form,
	Nav,
	Navbar,
	NavDropdown
} from "react-bootstrap";
import logo from "../../../assets/atom.svg";
import { LinkContainer } from "react-router-bootstrap";

export const Header = () => {
	return (
		<>
			<Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
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
						<Nav className="justify-content-end flex-grow-1 pe-3" navbarScroll>
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
								disabled
							>
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
								target="_blank"
							>
								{/* <Button variant="outline-info">User'sGuide</Button> */}
								<Button variant="outline-info">Руководство пользователя</Button>
							</a>
						</Form>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};
