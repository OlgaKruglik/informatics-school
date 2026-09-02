import ReactMarkdown from "react-markdown";

interface Practice {
  title: string;
  description: string;
}

interface PracticeBlockProps {
  practice: Practice;
}

export default function PracticeBlock({
  practice
}: PracticeBlockProps) {

  return (

    <div className="practice-block">

      <h2>
        {practice.title}
      </h2>


      <div className="practice-description">

        <ReactMarkdown>
          {practice.description}
        </ReactMarkdown>

      </div>


      <div className="practice-instructions">

        <textarea
          placeholder="Введите свой ответ..."
          rows={8}
        />


        <button>
          Проверить ответ
        </button>

      </div>

    </div>

  );

}
