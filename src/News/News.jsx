import css from './News.module.css'

import Pic1 from './img/1.webp'
import Pic2 from './img/2.webp'
import Pic3 from './img/3.webp'
import Pic4 from './img/4.webp'
import Pic5 from './img/5.webp'

export const News = () => {
    return (
        <div className={css.cards}>

            <div className={css.card}>
                <div className={css.boxImg}>
                    <img src={Pic1} alt="" />
                    <div className={css.container}>
                        <div className={css.text}>
                            <h1>Дата_____.</h1>
                            <p>
                                С 22-24 мая  2022 года в городе Бишкек Министерство образования и науки  совместно с Государственной  службы финансовой разведки Кыргызской Республики провели среди
                            </p>
                            <a href="http://main.iksu.kg/?page_id=22702" className={css.bt} target="_blank">Подробнее</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className={css.card}>
                <div className={css.boxImg}>
                    <img src={Pic2} alt="" />
                    <div className={css.container}>
                        <div className={css.text}>
                            <h1>Дата_____.</h1>
                            <p>
                                Бул олимпиаданын жеӊүүчүлөрүн сыйлоо аземи 25-майда Толкун эстетикалык борборунда “IT World” аталышындагы атайын кечеде уюштурулду.
                            </p>
                            <a href="http://main.iksu.kg/?page_id=22697" className={css.bt} target="_blank">Подробнее</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className={css.card}>
                <div className={css.boxImg}>
                    <img src={Pic3} alt="" />
                    <div className={css.container}>
                        <div className={css.text}>
                            <h1>Дата_____.</h1>
                            <p>
                                24 мая 2022 г. в ИГУ им. К. Тыныстанова состоялся круглый стол «Сотрудничество ИГУ им. К. Тыныстанова с партнерскими организациями: опыт и перспективы».
                            </p>
                            <a href="http://main.iksu.kg/?page_id=22692" className={css.bt} target="_blank">Подробнее</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className={css.card}>
                <div className={css.boxImg}>
                    <img src={Pic4} alt="" />
                    <div className={css.container}>
                        <div className={css.text}>
                            <h1>Дата_____.</h1>
                            <p>
                                Считается, что самая сильная челюсть у крокодила. Вопрос: какое животное больше всех ломает свои зубы? Каково расстояние между правдой и ложью?
                            </p>
                            <a href="http://main.iksu.kg/?page_id=22688" className={css.bt} target="_blank">Подробнее</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className={css.card}>
                <div className={css.boxImg}>
                    <img src={Pic5} alt="" />
                    <div className={css.container}>
                        <div className={css.text}>
                            <h1>Дата_____.</h1>
                            <p>
                                В рамках 7-й встречи по проекту “Модернизация системы высшего образования Сердней Азии с помщью новых технологий” HiEdTech программы ERASMUS
                            </p>
                            <a href="http://main.iksu.kg/?page_id=22688" className={css.bt} target="_blank">Подробнее</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}