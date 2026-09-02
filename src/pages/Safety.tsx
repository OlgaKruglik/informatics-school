import { useState } from "react";

import safety from "../data/safety.json";

import TheoryBlock from "../components/TheoryBlock";
import TestBlock from "../components/TestBlock";
import PracticeBlock from "../components/PracticeBlock";


type SafetySection = "theory" | "test" | "practice" | null;


export default function Safety() {

  const [selectedSection, setSelectedSection] =
    useState<SafetySection>(null);


  return (

    <main>

      <h1>
        {safety.title}
      </h1>


      <div className="lesson-content-top">


        {/* Теория */}

        <div className="lesson-part">

          <h3>
            Тэорыя
          </h3>

          <p>
            Вывучыць правілы бяспекі
            і паводзін у кабінеце інфарматыкі
          </p>

          <button
            onClick={() =>
              setSelectedSection("theory")
            }
          >
            Адкрыць тэорыю
          </button>

        </div>



        {/* Тест */}

        <div className="lesson-part">

          <h3>
            Тэст
          </h3>

          <p>
            Праверыць свае веды
          </p>

          <button
            onClick={() =>
              setSelectedSection("test")
            }
          >
            Пачаць тэст
          </button>

        </div>



        {/* Практика */}

        <div className="lesson-part">

          <h3>
            Практыка
          </h3>

          <p>
            Выканаць практычнае заданне
          </p>

          <button
            onClick={() =>
              setSelectedSection("practice")
            }
          >
            Перайсці да практыкі
          </button>

        </div>

      </div>



      {/* Выбранный блок */}

      <div className="lesson-content-bottom">


        {
          selectedSection === "theory" && (

            <div>

              <h2>
                Тэорыя
              </h2>

              <TheoryBlock
                theory={safety.sections.theory}
              />

            </div>

          )
        }



        {
          selectedSection === "test" && (

            <div>

              <h2>
                Тэст
              </h2>

              <TestBlock
                tests={safety.sections.tests}
              />

            </div>

          )
        }



        {
          selectedSection === "practice" && (

            <div>

              <h2>
                Практычнае заданне
              </h2>

              <PracticeBlock
                practice={safety.sections.practice}
              />

            </div>

          )
        }


      </div>

    </main>

  );
}
