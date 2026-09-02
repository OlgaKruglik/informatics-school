import ReactMarkdown from "react-markdown";

interface TheoryItem {
  title: string;
  content: string;
}

interface TheoryBlockProps {
  theory: TheoryItem[];
}

export default function TheoryBlock({
  theory
}: TheoryBlockProps) {

  return (

    <div className="theory-block">

      {theory.map((item, index) => (

        <div
          key={index}
          className="theory-item"
        >

          <h3>
            {item.title}
          </h3>

          <div className="theory-content">

            <ReactMarkdown>
              {item.content}
            </ReactMarkdown>

          </div>

        </div>

      ))}

    </div>

  );

}
