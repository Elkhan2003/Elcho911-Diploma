import React, { useState } from "react";
import { Container, Button, Offcanvas } from 'react-bootstrap'
import css from './Test.module.css'

export const Test_5 = () => {
    return (
        <div className={css.content}>
            <Container>
                <div className={css.footer__buttons}>
                    <div className={css.footer__button}>
                        <p>
                            Структура программы
                        </p>
                        <p>
                            <Example />
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    )
}



// ! Offcanvas
const options = [
    {
        name: 'Начать тест',
        scroll: false,
        backdrop: true,
    }
];

function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);



    // ! Test logic
    const questions = [
        {
            questionText: 'Перевод программ с языка высокого уровня на язык более низкого уровня обеспечивает программа:',
            answerOptions: [
                { answerText: 'Ассемблер', isCorrect: false },
                { answerText: 'Паскаль', isCorrect: false },
                { answerText: 'Компилятор', isCorrect: true },
                { answerText: 'Фортран', isCorrect: false },
            ],
        },
        {
            questionText: 'В графических схемах алгоритмов стрелки направлений на линиях потоков:',
            answerOptions: [
                { answerText: 'Необходимо рисовать, если направление потока сверху вниз и слева направо', isCorrect: false },
                { answerText: 'Рисовать не нужно', isCorrect: false },
                { answerText: 'Необходимо рисовать, если направление потока снизу вверх и справа налево', isCorrect: true },
                { answerText: 'Можно рисовать или не рисовать', isCorrect: false },
            ],
        },
        {
            questionText: 'Разработка алгоритма решения задачи – это:',
            answerOptions: [
                { answerText: 'Сведение задачи к математической модели, для которой известен метод решения', isCorrect: false },
                { answerText: 'Выбор наилучшего метода из имеющихся', isCorrect: false },
                { answerText: 'Точное описание данных, условий задачи и ее целого решения', isCorrect: false },
                { answerText: 'Определение последовательности действий, ведущих к получению результатов', isCorrect: true },
            ],
        },
        {
            questionText: 'Языком высокого уровня является:',
            answerOptions: [
                { answerText: 'Макроассемблер', isCorrect: false },
                { answerText: 'Шестнадцатеричный язык', isCorrect: false },
                { answerText: 'Фортран', isCorrect: true },
                { answerText: 'Ассемблер', isCorrect: false },
            ],
        },
        {
            questionText: 'Алгоритм, в котором действия выполняются друг за другом, не повторяясь называется:',
            answerOptions: [
                { answerText: 'Линейным', isCorrect: true },
                { answerText: 'Циклическим', isCorrect: false },
                { answerText: 'Разветвленным', isCorrect: false },
                { answerText: 'Простым', isCorrect: false },
            ],
        },
        {
            questionText: 'Разработке алгоритма предшествует:',
            answerOptions: [
                { answerText: 'Постановка задачи, разработка математической модели, проектирование программ', isCorrect: false },
                { answerText: 'Постановка задачи, разработка математической модели', isCorrect: true },
                { answerText: 'Постановка задачи, выбор метода решения, проектирование программ', isCorrect: false },
                { answerText: 'Постановка задачи, разработка математической модели, выбор метода решения', isCorrect: false },
            ],
        },
        {
            questionText: 'Символьный тип данных объявляется служебным словом:',
            answerOptions: [
                { answerText: 'CHAR', isCorrect: true },
                { answerText: 'STRING', isCorrect: false },
                { answerText: 'WORD', isCorrect: false },
                { answerText: 'BYTE', isCorrect: false },
            ],
        },
        {
            questionText: 'В операторе присваивания summa := sqr(x)+3*a переменными являются:',
            answerOptions: [
                { answerText: 'a, x, summa', isCorrect: true },
                { answerText: 'x, a', isCorrect: false },
                { answerText: 'sqr,x,a', isCorrect: false },
                { answerText: 'summa, sqr, x, a', isCorrect: false },
            ],
        },
        {
            questionText: 'Процедура INC(x,k):',
            answerOptions: [
                { answerText: 'Преобразует десятичное число х в строку из k символов', isCorrect: false },
                { answerText: 'Преобразует десятичное число х в строку из k символов', isCorrect: true },
                { answerText: 'Уменьшает значение переменной х на величину k', isCorrect: false },
                { answerText: 'Преобразует строку символов x в число, содержащее k десятичных знаков', isCorrect: false },
            ],
        },
        {
            questionText: 'Записью действительного числа с плавающей точкой является:',
            answerOptions: [
                { answerText: '–1.0533333', isCorrect: false },
                { answerText: '1.0E01', isCorrect: true },
                { answerText: '48.0001', isCorrect: false },
                { answerText: '220.11', isCorrect: false },
            ],
        },
    ];



    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
    // ! Test logic

    return (
        <>
            <Button variant="primary" onClick={toggleShow} className="me-2">
                {name}
            </Button>
            <Offcanvas className={css.Offcanvas__block} show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className={css.Offcanvas__title}>Структура программы</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className={css.test__block}>
                        {showScore ? (
                            <div className={css.test__score__section}>
                                Вы набрали {score} баллов из {questions.length}
                            </div>
                        ) : (
                            <>
                                <div className={css.test__question__section}>
                                    <div className={css.test__question__count}>
                                        <span>Вопрос {currentQuestion + 1}</span>/{questions.length}
                                    </div>
                                    <div className={css.test__question__text}>{questions[currentQuestion].questionText}</div>
                                </div>
                                <div className={css.test__answer__section}>
                                    {questions[currentQuestion].answerOptions.map((answerOption) => (
                                        <button className={css.test__buttons} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

// ! Offcanvas
function Example() {
    return (
        <>
            {options.map((props, idx) => (
                <OffCanvasExample key={idx} {...props} />
            ))}
        </>
    );
}