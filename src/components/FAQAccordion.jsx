const faqs = [
  { question: 'What is React?', answer: 'React is a JavaScript library for building user interfaces.' },
  { question: 'What is a hook?', answer: 'Hooks let function components use state and other React features.' },
  { question: 'What is JSX?', answer: 'JSX is a syntax extension that looks like HTML inside JavaScript.' },
];

function FAQAccordion() {
  return (
    <div className="app-shell">
      <div className="card">
        <h2 className="exercise-title">Q7. FAQ Accordion</h2>
        <p className="exercise-meta">Topic: useState</p>
        <p>Implement the accordion behavior so one question opens at a time.</p>
        {faqs.map((faq) => (
          <div className="faq-item" key={faq.question}>
            <div className="faq-question">{faq.question}</div>
            <p>Student answer panel will appear here.</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQAccordion;
