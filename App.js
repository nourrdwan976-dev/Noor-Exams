import React, { useState } from 'react';
import ExamPrintable from './components/ExamPrintable';

export default function App() {
  const [questions, setQuestions] = useState([]);
  const [input, setInput] = useState('');
  const [examTitle, setExamTitle] = useState('امتحان تجريبي');

  function addQuestion() {
    if (!input.trim()) return;
    setQuestions([...questions, { text: input }]);
    setInput('');
  }

  const exam = { title: examTitle, items: questions };

  return (
    <div style={{ padding: 20, direction: 'rtl', fontFamily: 'Noto Naskh Arabic, Arial' }}>
      <h1>بوابة نور للامتحانات</h1>
      <div style={{ marginBottom: 10 }}>
        <input value={examTitle} onChange={e=>setExamTitle(e.target.value)} placeholder="عنوان الامتحان"/>
      </div>
      <div>
        <input value={input} onChange={e=>setInput(e.target.value)} placeholder="أدخل سؤال"/>
        <button onClick={addQuestion}>إضافة</button>
      </div>
      <ul>
        {questions.map((q,i)=>(<li key={i}>{q.text}</li>))}
      </ul>
      <ExamPrintable exam={exam}/>
    </div>
  );
}
