import { useState } from "react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
}

interface Test {
  name: string;
  questions: Question[];
}

interface Props {
  tests: Test[];
}

export default function TestBlock({ tests }: Props) {

  const [selectedTest, setSelectedTest] = useState(0);

  const [answers, setAnswers] = useState<Record<number, number>>({});

  const [finished, setFinished] = useState(false);


  const test = tests[selectedTest];


  const handleAnswer = (
    questionId: number,
    answerIndex: number
  ) => {

    setAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));

  };


  const finishTest = () => {
    setFinished(true);
  };


  const restartTest = () => {

    setAnswers({});

    setFinished(false);

  };


  const correctAnswers = test.questions.filter(
    question =>
      answers[question.id] === question.correct
  ).length;


  const totalQuestions = test.questions.length;


  const percentage = Math.round(
    (correctAnswers / totalQuestions) * 100
  );


  return (

    <div className="test-block">


      <h2>
        Тестирование
      </h2>


      <div className="test-selector">

        {
          tests.map((item, index) => (

            <button
              key={item.name}
              onClick={() => {
                setSelectedTest(index);
                setAnswers({});
                setFinished(false);
              }}
            >
              {item.name}
            </button>

          ))
        }

      </div>



      <h3>
        {test.name}
      </h3>



      {
        !finished && (

          <>

            {
              test.questions.map((question, questionIndex) => (

                <div
                  className="question"
                  key={question.id}
                >

                  <h4>
                    {questionIndex + 1}.{" "}
                    {question.question}
                  </h4>


                  <div className="answers">

                    {
                      question.options.map(
                        (option, index) => (

                          <label
                            key={option}
                            className="answer"
                          >

                            <input

                              type="radio"

                              name={`question-${question.id}`}

                              checked={
                                answers[question.id] === index
                              }

                              onChange={() =>
                                handleAnswer(
                                  question.id,
                                  index
                                )
                              }

                            />

                            {option}

                          </label>

                        )
                      )
                    }

                  </div>

                </div>

              ))
            }



            <button

              className="finish-test"

              onClick={finishTest}

              disabled={
                Object.keys(answers).length !==
                totalQuestions
              }

            >
              Завершить тест
            </button>

          </>

        )
      }



      {
        finished && (

          <div className="test-result">

            <h3>
              Результат
            </h3>


            <p>
              Правильных ответов:
              {" "}
              {correctAnswers}
              {" "}
              из
              {" "}
              {totalQuestions}
            </p>


            <p>
              Результат:
              {" "}
              {percentage}%
            </p>


            {
              percentage >= 80 && (

                <p>
                  Отличный результат! 🎉
                </p>

              )
            }


            {
              percentage >= 60 &&
              percentage < 80 && (

                <p>
                  Хороший результат. Можно немного повторить материал.
                </p>

              )
            }


            {
              percentage < 60 && (

                <p>
                  Стоит еще раз изучить теорию и попробовать тест снова.
                </p>

              )
            }


            <button
              onClick={restartTest}
            >
              Пройти тест снова
            </button>

          </div>

        )
      }


    </div>

  );

}
