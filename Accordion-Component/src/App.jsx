import { useState } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
 const items = [
  {
    title: "What is this project about?",
    content: "This project is a simple React-based accordion component that demonstrates conditional rendering and state management."
  },
  {
    title: "How can I customize the design?",
    content: "You can easily customize the styles using CSS or a utility-first framework like Tailwind. Just modify the class names or add your own styles."
  },
  {
    title: "Can I open multiple items at once?",
    content: "Yes! The current implementation allows multiple sections to stay open at the same time. You can tweak the logic to limit it to one if needed."
  },
  {
    title: "Is this component reusable?",
    content: "Absolutely. You can pass any list of title-content pairs to it through props and it will render them dynamically."
  },
  {
    title: "Where can I use this component?",
    content: "You can use it in project documentation pages, FAQs, settings panels, or any interface where collapsible information blocks improve UX."
  }
];


  return (
    <>
      <Card items={items} />
    </>
  );
}

export default App;
