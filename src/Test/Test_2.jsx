import React, { useState } from "react";
import { Container, Button, Offcanvas } from 'react-bootstrap'
import css from './Test.module.css'

export const Test_2 = () => {
    return (
        <div className={css.content}>
            <Container>
                <div className={css.footer__buttons}>
                    <div className={css.footer__button}>
                        <p>
                            Операторы ветвления и выбора
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
            questionText: 'Условный оператор применяется для программирования:',
            answerOptions: [
                { answerText: 'Сложных алгоритмов', isCorrect: false },
                { answerText: 'Линейных алгоритмов', isCorrect: false },
                { answerText: 'Ветвящихся алгоритмов', isCorrect: true },
                { answerText: 'Циклических алгоритмов', isCorrect: false },
            ],
        },
        {
            questionText: 'Ветвящийся алгоритм подразумевает:',
            answerOptions: [
                { answerText: 'Неоднократное повторение отдельных частей программы', isCorrect: false },
                { answerText: 'Последовательное выполнение всех элементов программы', isCorrect: false },
                { answerText: 'Выполнение лишь нескольких, удовлетворяющих заданному условию частей программы', isCorrect: true },
                { answerText: 'Верного ответа нет', isCorrect: false },
            ],
        },
        {
            questionText: 'Оператор CASE служит для создания:',
            answerOptions: [
                { answerText: 'Линейных алгоритмов', isCorrect: false },
                { answerText: 'Ветвящихся алгоритмов', isCorrect: true },
                { answerText: 'Циклических алгоритмов', isCorrect: false },
                { answerText: 'Верного ответа нет', isCorrect: false },
            ],
        },
        {
            questionText: 'Алгоритм включает в себя ветвление, если:',
            answerOptions: [
                { answerText: 'Если он составлен так, что его выполнение предполагает многократное повторение одних и тех же действий', isCorrect: false },
                { answerText: 'Если ход его выполнения зависит от истинности тех или иных условий', isCorrect: true },
                { answerText: 'Верного ответа нет', isCorrect: false },
                { answerText: 'Если его команды выполняются в порядке их естественного следования друг за другом независимо от каких-либо условий', isCorrect: false },
            ],
        },
        {
            questionText: 'Укажите приоритет операций в языке Паскаль:',
            answerOptions: [
                { answerText: 'Операции типа сложения: +, –, or, xor', isCorrect: false },
                { answerText: 'Операции отношения: =, <>, <, >, <= ,> =, in', isCorrect: false },
                { answerText: 'Унарная операция not, унарный минус –, взятие адреса @', isCorrect: true },
                { answerText: 'Операции типа умножения: *, /, div, mod, and, shl, shr.', isCorrect: false },
            ],
        },
        {
            questionText: 'В каком из условных операторов допущена синтаксическая ошибка:',
            answerOptions: [
                { answerText: 'If B=0 then writeln (‘Деление на нуль невозможно’)', isCorrect: false },
                { answerText: 'If a>b then max := a else max:=b', isCorrect: false },
                { answerText: 'If (a>b) and (b>0) then c:=a+b', isCorrect: false },
                { answerText: 'If a<b then min:=a; else min:=b', isCorrect: true },
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
        {
            questionText: 'Тип переменных INTEGER это:',
            answerOptions: [
                { answerText: 'Целочисленный тип', isCorrect: true },
                { answerText: 'Ногический тип', isCorrect: false },
                { answerText: 'Натуральный тип', isCorrect: false },
                { answerText: 'Верного ответа нет', isCorrect: false },
            ],
        },
        // {
        //     questionText: 'Ввод данных с клавиатуры осуществляется с помощью оператора:',
        //     answerOptions: [
        //         { answerText: 'WRITE, WRITELN', isCorrect: false },
        //         { answerText: 'PROGRAM', isCorrect: false },
        //         { answerText: 'Верного ответа нет', isCorrect: false },
        //         { answerText: 'READ, READLN', isCorrect: true },
        //     ],
        // },
        // {
        //     questionText: 'Вывод данных на экран осуществляется с помощью оператора:',
        //     answerOptions: [
        //         { answerText: 'Верного ответа нет', isCorrect: false },
        //         { answerText: 'WRITE, WRITELN', isCorrect: true },
        //         { answerText: 'PROGRAM', isCorrect: false },
        //         { answerText: 'READ, READLN', isCorrect: false },
        //     ],
        // },
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
                    <Offcanvas.Title className={css.Offcanvas__title}>Операторы ветвления и выбора</Offcanvas.Title>
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