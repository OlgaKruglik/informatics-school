import { Link } from "react-router-dom";
import HomeButton from "../components/HomeButton";

const classes = [6, 7, 8, 9, 10, 11];

export default function StudentClasses() {

  return (

    <main>
      <HomeButton />

      <h1>
        Абярыце клас
      </h1>


      <div className="class-buttons">

        {
          classes.map(item => (

            <Link
              key={item}
              to={`/student/class/${item}`}
              className="class-button"
            >
              {item} клас
            </Link>

          ))
        }

      </div>



      <div className="safety-block">

        <h2>
          Тэхніка бяспекі
        </h2>

        <p>
          Правілы паводзін і бяспечнай працы
          ў кабінеце інфарматыкі
        </p>

        <Link
          to="/student/safety"
          className="safety-button"
        >
          Перайсці да тэхнікі бяспекі
        </Link>

      </div>


    </main>

  );
}
