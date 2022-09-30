import React, { useState } from "react";
import { Container, Button, Offcanvas } from 'react-bootstrap'
import css from './Test.module.css'

export const Test_1 = () => {
    return (
        <div style={{ marginTop: '70px', padding: '0 0' }} className={css.content}>
            <Container>
                <div className={css.footer__buttons}>
                    <div className={css.footer__button}>
                        <p>
                            Основы языка Pascal
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
            questionText: 'Язык программирования Pascal создал:',
            answerOptions: [
                { answerText: 'Б. Паскаль', isCorrect: false },
                { answerText: 'М. Фортран', isCorrect: false },
                { answerText: 'Н. Вирт', isCorrect: true },
                { answerText: 'Правильных ответов нет', isCorrect: false },
            ],
        },
        {
            questionText: 'Линейная структура построения программы подразумевает',
            answerOptions: [
                { answerText: 'Неоднократное повторение отдельных частей программы', isCorrect: false },
                { answerText: 'Последовательное выполнение всех элементов программы', isCorrect: true },
                { answerText: 'Выполнение лишь нескольких, удовлетворяющих заданному условию частей программы', isCorrect: false },
                { answerText: 'Верного ответа нет', isCorrect: false },
            ],
        },
        {
            questionText: 'Оператор присваивания имеет вид:',
            answerOptions: [
                { answerText: '=', isCorrect: false },
                { answerText: 'Верного ответа нет', isCorrect: false },
                { answerText: ':=', isCorrect: true },
                { answerText: '=:', isCorrect: false },
            ],
        },
        {
            questionText: 'Команда CLRSCR служит для',
            answerOptions: [
                { answerText: 'Ожидания нажатия клавиши', isCorrect: false },
                { answerText: 'Ввода данных с экрана', isCorrect: false },
                { answerText: 'Верного ответа нет', isCorrect: false },
                { answerText: 'Очистки экрана', isCorrect: true },
            ],
        },
        {
            questionText: 'Раздел VAR служит',
            answerOptions: [
                { answerText: 'Для описания используемых переменных', isCorrect: true },
                { answerText: 'Для описания величин', isCorrect: false },
                { answerText: 'Для описания выражений', isCorrect: false },
                { answerText: 'Верного ответа нет', isCorrect: false },
            ],
        },
        {
            questionText: 'Переменные – это:',
            answerOptions: [
                { answerText: 'Величины, которые могут менять свое значение в процессе выполнения программы', isCorrect: true },
                { answerText: 'Величины, которые не могут менять своего значения в процессе выполнения программы', isCorrect: false },
                { answerText: 'обозначают строки программы, на которые передается управление во время выполнение программы', isCorrect: false },
                { answerText: 'Верного ответа нет', isCorrect: false },
            ],
        },
        {
            questionText: 'Целочисленное деление можно выразить следующей функцией:',
            answerOptions: [
                { answerText: 'A div B', isCorrect: false },
                { answerText: 'A mod B', isCorrect: true },
                { answerText: 'Abs (A)*B', isCorrect: false },
                { answerText: 'Верного ответа нет', isCorrect: false },
            ],
        },
        {
            questionText: 'Раздел операторов начинается служебным словом:',
            answerOptions: [
                { answerText: 'VAR', isCorrect: false },
                { answerText: 'INTEGER', isCorrect: false },
                { answerText: 'BEGIN', isCorrect: true },
                { answerText: 'Верного ответа нет', isCorrect: false },
            ],
        },
        {
            questionText: 'Ввод данных с клавиатуры осуществляется с помощью оператора:',
            answerOptions: [
                { answerText: 'WRITE, WRITELN', isCorrect: false },
                { answerText: 'READ, READLN', isCorrect: true },
                { answerText: 'PROGRAM', isCorrect: false },
                { answerText: 'Верного ответа нет', isCorrect: false },
            ],
        },
        {
            questionText: 'Вывод данных на экран осуществляется с помощью оператора:',
            answerOptions: [
                { answerText: 'WRITE, WRITELN', isCorrect: true },
                { answerText: 'READ, READLN', isCorrect: false },
                { answerText: 'PROGRAM', isCorrect: false },
                { answerText: 'Верного ответа нет', isCorrect: false },
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
                    <Offcanvas.Title className={css.Offcanvas__title}>Основы языка Pascal</Offcanvas.Title>
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