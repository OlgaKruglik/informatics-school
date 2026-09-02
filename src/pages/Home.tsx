import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="home">
      <h1>
        Інфарматыка
      </h1>

      <p className="subtitle">
        Вучэбны дадатак для вучняў і настаўнікаў
      </p>

      <div className="home-buttons">
        <Link 
          to="/student"
          className="home-button"
        >
          Вучням
        </Link>

        <Link 
          to="/teacher"
          className="home-button"
        >
          Настаўнікам
        </Link>
      </div>
    </main>
  );
}
