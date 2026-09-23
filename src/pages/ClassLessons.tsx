import { useParams } from "react-router-dom";
import { useState } from "react";

import lessons from "../data/lessons.json";

import LessonMenu from "../components/LessonMenu";
import TheoryBlock from "../components/TheoryBlock";
import TestBlock from "../components/TestBlock";
import PracticeBlock from "../components/PracticeBlock";
import HomeButton from "../components/HomeButton";


export default function ClassLessons() {

  const { classId } = useParams();


  const [selectedContent, setSelectedContent] = useState<{
    lessonId: number;
    type: "theory" | "test" | "practice";
  } | null>(null);



  const classLessons = lessons.filter(
    lesson =>
      lesson.class === Number(classId)
  );



  const selectedLesson = classLessons.find(
    lesson =>
      lesson.id === selectedContent?.lessonId
  );



  return (

    <main>
      <HomeButton />
      <h1>
        {classId} клас
      </h1>



      {
        classLessons.length === 0 &&

        <p>
          Урокаў пакуль няма
        </p>
      }



      {
        classLessons.map(lesson => (

          <LessonMenu

            key={lesson.id}

            title={
              `${lesson.id}. ${lesson.title}`
            }

          >

            <div className="lesson-content-top">


              {/* ТЭОРЫЯ */}

              <div className="lesson-part">

                <h3>
                  Тэорыя
                </h3>

                <p>
                  Вывучыць новы матэрыял
                </p>

                <button
                  onClick={() =>
                    setSelectedContent({
                      lessonId: lesson.id,
                      type: "theory"
                    })
                  }
                >
                  Адкрыць тэорыю
                </button>

              </div>



              {/* ТЭСТ */}

              <div className="lesson-part">

                <h3>
                  Тэст
                </h3>

                <p>
                  Праверыць веды
                </p>

                <button
                  onClick={() =>
                    setSelectedContent({
                      lessonId: lesson.id,
                      type: "test"
                    })
                  }
                >
                  Пачаць тэст
                </button>

              </div>



              {/* ПРАКТЫКА */}

              <div className="lesson-part">

                <h3>
                  Практыка
                </h3>

                <p>
                  Выканаць практычнае заданне
                </p>

                <button
                  onClick={() =>
                    setSelectedContent({
                      lessonId: lesson.id,
                      type: "practice"
                    })
                  }
                >
                  Перайсці да практыкі
                </button>

              </div>


            </div>

          </LessonMenu>

        ))
      }



      {/* НІЖНЯЯ РАБОЧАЯ ВОБЛАСЦЬ */}

      {
        selectedLesson && (

          <div className="lesson-content-bottom">


            {/* ТЭОРЫЯ */}

            {
              selectedContent?.type === "theory" && (

                <>

                  <h2>
                    Тэорыя ўрока:
                    {" "}
                    {selectedLesson.title}
                  </h2>


                  <TheoryBlock
                    theory={
                      selectedLesson.sections.theory
                    }
                  />

                </>

              )
            }



            {/* ТЭСТ */}

            {
              selectedContent?.type === "test" && (

                <TestBlock
                  tests={
                    selectedLesson.sections.tests
                  }
                />

              )
            }



            {/* ПРАКТЫКА */}

            {
              selectedContent?.type === "practice" && (

                <PracticeBlock
                  practice={
                    selectedLesson.sections.practice
                  }
                />

              )
            }


          </div>

        )

      }


    </main>

  );

}
