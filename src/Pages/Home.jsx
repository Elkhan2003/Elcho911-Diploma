import { CarouselBox } from '../Components/Carousel/CarouselBox'
import { Card, Button, Container } from 'react-bootstrap';
import css from './Pages.module.css'

import New1 from '../assets/New1.webp'
import New2 from '../assets/New2.webp'
import New3 from '../assets/New3.webp'

export const Home = () => {
    return (
        <>
            <div style={{ marginTop: '70px' }} className={css.center}>
                <div className={css.сollege}>
                    <div className={css.sub__title}>
                        <h5>
                            Министерство образования и науки Кыргызской Республики
                        </h5>
                        <h5>
                            Колледж ИГУ им. К. Тыныстанова
                        </h5>
                    </div>

                    <div className={css.sup__title}>
                        <h1>
                            Дипломный проект
                        </h1>
                        <h4>
                            Электронный учебник<br />
                            "Язык программирования PascalABC"
                        </h4>
                    </div>

                    <div className={css.сollege__text}>
                        <h5>
                            Выполнил: студент группы КПОВ-22 Шаршенбеков Эльхан Уланович<br />
                            Руководитель: преподаватель Асанбеков А. Т.<br />
                            Рецензент: преподаватель Анарбекова Н. А.
                        </h5>
                    </div>

                    <div className={css.сollege__footer}>
                        <div>
                            <h5>
                                Каракол - 2022
                            </h5>
                        </div>
                    </div>
                </div>
            </div>



            <div className={css.content}>
                <CarouselBox />
            </div>



            <Container>
                <h2 className='text-center m-4'>Последние Новости</h2>

                <div className={css.cards}>

                    <Card className={css.card} style={{ width: '23rem' }}>
                        <Card.Img variant="top" src={New1} />
                        <Card.Body>
                            <Card.Title>МАЙ 27, 2022</Card.Title>
                            <Card.Text>
                                Бүгүн, 27.05.22ж. К.Тыныстанов атындагы ЫМУнун колледжинде.
                            </Card.Text>
                            <a href="http://college.iksu.kg/?p=4549" target='_blank'>
                                <Button variant="primary">Подробнее</Button>
                            </a>
                        </Card.Body>
                    </Card>

                    <Card className={css.card} style={{ width: '23rem' }}>
                        <Card.Img variant="top" src={New2} />
                        <Card.Body>
                            <Card.Title>МАЙ 26, 2022</Card.Title>
                            <Card.Text>
                                КПОВ-02 группасынын студенти Усупбаев Данияр Канатбекович
                            </Card.Text>
                            <a href="http://college.iksu.kg/?p=4515" target='_blank'>
                                <Button variant="primary">Подробнее</Button>
                            </a>
                        </Card.Body>
                    </Card>

                    <Card className={css.card} style={{ width: '23rem' }}>
                        <Card.Img variant="top" src={New3} />
                        <Card.Body>
                            <Card.Title>МАЙ 26, 2022</Card.Title>
                            <Card.Text>
                                Бугун ЫМУнун колледжинин табигый илимдер жана техникалык
                            </Card.Text>
                            <a href="http://college.iksu.kg/?p=4522" target='_blank'>
                                <Button variant="primary">Подробнее</Button>
                            </a>
                        </Card.Body>
                    </Card>

                </div>
            </Container>
        </>
    )
}