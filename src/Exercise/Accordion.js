import "./accordion.css";
import { useState } from "react";
const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function Accordion() {
  return (
    <div>
      <AccordionContainer data={faqs} />
    </div>
  );
}

function AccordionContainer({ data }) {
  const [curOpen, setCurOpen] = useState(null);
  // const [content, setCOntent] = useState(false);
  return (
    <div className="accordion">
      {data.map((faq, i) => (
        <AccordionItem
          num={i}
          title={faq.title}
          key={faq.title}
          curOpen={curOpen}
          onOpen={setCurOpen}
        >
          {faq.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;
  function handleAccordion() {
    onOpen(isOpen ? null : num);
  }
  return (
    <div className={isOpen ? "item open" : "item"} onClick={handleAccordion}>
      <p className="number">{num <= 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box"> {children}</div>}
    </div>
  );
}
