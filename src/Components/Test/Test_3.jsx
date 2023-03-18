import React, { useState } from "react";
import { Container, Button, Offcanvas } from "react-bootstrap";
import css from "./Test.module.scss";

export const Test_3 = () => {
	return (
		<div className={css.content}>
			<Container>
				<div className={css.footer__buttons}>
					<div className={css.footer__button}>
						<p>Циклы</p>
						<p>
							<Example />
						</p>
					</div>
				</div>
			</Container>
		</div>
	);
};

// ! Offcanvas
const options = [
	{
		name: "Начать тест",
		scroll: false,
		backdrop: true
	}
];

function OffCanvasExample({ name, ...props }) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const toggleShow = () => setShow((s) => !s);

	// ! Test logic
	const questions = [
		{
			questionText: "Цикл WHILE называется:",
			answerOptions: [
				{ answerText: "Цикл с предусловием", isCorrect: true },
				{ answerText: "Цикл с параметром", isCorrect: false },
				{ answerText: "Цикл с постусловием", isCorrect: false },
				{ answerText: "Ветвлением", isCorrect: false }
			]
		},
		{
			questionText: "Цикл For называется:",
			answerOptions: [
				{ answerText: "Цикл с предусловием", isCorrect: false },
				{ answerText: "Цикл с параметром", isCorrect: true },
				{ answerText: "Цикл с постусловием", isCorrect: false },
				{ answerText: "Ветвлением", isCorrect: false }
			]
		},
		{
			questionText: "Цикл REPEAT называется:",
			answerOptions: [
				{ answerText: "Цикл с предусловием", isCorrect: false },
				{ answerText: "Цикл с параметром", isCorrect: false },
				{ answerText: "Цикл с постусловием", isCorrect: true },
				{ answerText: "Ветвлением", isCorrect: false }
			]
		},
		{
			questionText: "Какой из операторов цикла имеет 2 вида записи:",
			answerOptions: [
				{ answerText: "For…", isCorrect: true },
				{ answerText: "While…", isCorrect: false },
				{ answerText: "While…", isCorrect: false },
				{ answerText: "Верного ответа нет", isCorrect: false }
			]
		},
		{
			questionText: "Операторными скобками называются:",
			answerOptions: [
				{ answerText: "( )", isCorrect: false },
				{ answerText: "< >", isCorrect: false },
				{ answerText: "begin … end", isCorrect: true },
				{ answerText: "Верного ответа нет", isCorrect: false }
			]
		},
		{
			questionText: "В каком из операторов допущена синтаксическая ошибка:",
			answerOptions: [
				{ answerText: "For i=1 to 20 do p:=p+1", isCorrect: true },
				{ answerText: "While s<3 do s:=s-3", isCorrect: false },
				{ answerText: "Repeat k:=k+1 until k<7", isCorrect: false },
				{ answerText: "For I:=10 downto 5 do p:=p+1", isCorrect: false }
			]
		},
		{
			questionText:
				"Тело цикла для вычисления значений функций f(x)=x4, на отрезке [-5,5] с шагом 0.1 будет иметь вид:",
			answerOptions: [
				{ answerText: "f:= x*x*x*x; x:=x+1;writeln (f,x)", isCorrect: false },
				{ answerText: "f:=x4; x:=x+1;writeln (f,x)", isCorrect: false },
				{ answerText: "f:= x*x*x*x; x=x+0.1;writeln (f,x)", isCorrect: false },
				{ answerText: "f:= x*x*x*x; x:=x+0.1; writeln (f,x)", isCorrect: true }
			]
		},
		{
			questionText: "Оператором цикла не является оператор:",
			answerOptions: [
				{ answerText: "While…", isCorrect: false },
				{ answerText: "For…", isCorrect: false },
				{ answerText: "Case…", isCorrect: true },
				{ answerText: "Repeat…", isCorrect: false },
				{ answerText: "Верного ответа нет", isCorrect: false }
			]
		},
		{
			questionText: "Тип переменных для параметра цикла FOR:",
			answerOptions: [
				{ answerText: "Целочисленный тип", isCorrect: true },
				{ answerText: "Логический тип", isCorrect: false },
				{ answerText: "Натуральный тип", isCorrect: false },
				{ answerText: "Верного ответа нет", isCorrect: false }
			]
		}
		// {
		//     questionText: 'Вывод данных на экран осуществляется с помощью оператора:',
		//     answerOptions: [
		//         { answerText: 'WRITE, WRITELN', isCorrect: true },
		//         { answerText: 'READ, READLN', isCorrect: false },
		//         { answerText: 'PROGRAM', isCorrect: false },
		//         { answerText: 'Верного ответа нет', isCorrect: false },
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
			<Offcanvas
				className={css.Offcanvas__block}
				show={show}
				onHide={handleClose}
				{...props}
			>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title className={css.Offcanvas__title}>
						Циклы
					</Offcanvas.Title>
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
									<div className={css.test__question__text}>
										{questions[currentQuestion].questionText}
									</div>
								</div>
								<div className={css.test__answer__section}>
									{questions[currentQuestion].answerOptions.map(
										(answerOption, id) => (
											<button
												key={id}
												className={css.test__buttons}
												onClick={() =>
													handleAnswerOptionClick(answerOption.isCorrect)
												}
											>
												{answerOption.answerText}
											</button>
										)
									)}
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
