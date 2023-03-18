import { Container } from "react-bootstrap";
import scss from "./Pages.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faVk,
	faInstagram,
	faTelegram,
	faWhatsapp
} from "@fortawesome/free-brands-svg-icons";

import Pic1 from "../../assets/1.webp";

export const Contacts = () => {
	return (
		<div style={{ marginTop: "70px" }} className={scss.content}>
			<Container>
				<div className={scss.contacts}>
					<div>
						<h1 className={scss.contacts__suptitle}>Контакты</h1>
						<div className={scss.contacts__list}>
							<div className={scss.contact__text}>
								<strong>Тел.: </strong>
								<a href="tel:+996990385056">+996990385056</a>
							</div>
							<div className={scss.contact__text}>
								<p>
									<strong>Адрес: </strong>Кыргызстан г. Каракол ул.
									​​Абдрахманова 130
								</p>
							</div>
							<div className={scss.contact__text}>
								<strong>Эл. почта: </strong>
								<a href="src/Components/Pages#">boss.armsport@gmail.com</a>
							</div>
							<div className={scss.contact__text}>
								<strong>Дни и время работы: </strong>
								<p>
									понедельник-пятница – с 08.00 до 18.00
									<br />
									суббота – с 08.00 до 12.00
								</p>
								<span>воскресенье – выходной</span>
							</div>
						</div>
					</div>

					<div>
						<div className={scss.card__item}>
							<div className={scss.card__inner}>
								<div className={scss.card__img}>
									<img src={Pic1} alt="Elcho" />
								</div>
								<div className={scss.card__text}>
									<div className={scss.social}>
										<a
											className={scss.social__item}
											href="https://vk.com/elcho_effects"
											target="_blank"
										>
											<FontAwesomeIcon icon={faVk} />
										</a>
										<a
											className={scss.social__item}
											href="https://t.me/Elcho_Effects/"
											target="_blank"
										>
											<FontAwesomeIcon icon={faTelegram} />
										</a>
										<a
											className={scss.social__item}
											href="https://www.instagram.com/elcho911/"
											target="_blank"
										>
											<FontAwesomeIcon icon={faInstagram} />
										</a>
										<a
											className={scss.social__item}
											href="https://wa.me/996990385056/"
											target="_blank"
										>
											<FontAwesomeIcon icon={faWhatsapp} />
										</a>
									</div>
								</div>
							</div>
							<div className={scss.card__info}>
								<div className={scss.card__name}>Elcho</div>
								<div className={scss.card__prof}>Frontend Developer</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};
