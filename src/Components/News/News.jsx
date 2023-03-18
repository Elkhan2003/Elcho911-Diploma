import scss from "./News.module.scss";

import Pic1 from "./img/1.webp";
import Pic2 from "./img/2.webp";
import Pic3 from "./img/3.webp";
import Pic4 from "./img/4.webp";
import Pic5 from "./img/5.webp";

export const News = () => {
	const newsData = [
		{
			imgSrc: Pic1,
			title: "Дата_____.",
			description:
				"С 22-24 мая 2022 года в городе Бишкек Министерство образования и науки совместно с Государственной службой финансовой разведки Кыргызской Республики провели среди",
			link: "http://main.iksu.kg/?page_id=22702"
		},
		{
			imgSrc: Pic2,
			title: "Дата_____.",
			description:
				"Бул олимпиаданын жеӊүүчүлөрүн сыйлоо аземи 25-майда Толкун эстетикалык борборунда “IT World” аталышындагы атайын кечеде уюштурулду.",
			link: "http://main.iksu.kg/?page_id=22697"
		},
		{
			imgSrc: Pic3,
			title: "Дата_____.",
			description:
				"24 мая 2022 г. в ИГУ им. К. Тыныстанова состоялся круглый стол «Сотрудничество ИГУ им. К. Тыныстанова с партнерскими организациями: опыт и перспективы».",
			link: "http://main.iksu.kg/?page_id=22692"
		},
		{
			imgSrc: Pic4,
			title: "Дата_____.",
			description:
				"Считается, что самая сильная челюсть у крокодила. Вопрос: какое животное больше всех ломает свои зубы? Каково расстояние между правдой и ложью?",
			link: "http://main.iksu.kg/?page_id=22688"
		},
		{
			imgSrc: Pic5,
			title: "Дата_____.",
			description:
				"В рамках 7-й встречи по проекту “Модернизация системы высшего образования Сердней Азии с помщью новых технологий” HiEdTech программы ERASMUS",
			link: "http://main.iksu.kg/?page_id=22688"
		}
	];

	return (
		<div className={scss.cards}>
			{newsData.map((newsItem, index) => (
				<div className={scss.card} key={index}>
					<div className={scss.boxImg}>
						<img src={newsItem.imgSrc} alt="" />
						<div className={scss.container}>
							<div className={scss.text}>
								<h1>{newsItem.title}</h1>
								<p>{newsItem.description}</p>
								<a href={newsItem.link} className={scss.bt} target="_blank">
									Подробнее
								</a>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};
