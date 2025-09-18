import React from 'react';

export default function ExamPrintable({ exam }) {
  function openPrintable() {
    const html = `
      <html>
      <head>
        <meta charset='utf-8'/>
        <title>${exam.title}</title>
        <style>
          body { font-family: 'Noto Naskh Arabic', Arial, sans-serif; direction: rtl; margin:20px; }
          .question { margin-bottom: 16px; }
          .q-title { font-weight: bold; }
        </style>
      </head>
      <body>
        <h2>${exam.title}</h2>
        ${(exam.items||[]).map((q,i)=>`
          <div class='question'>
            <div class='q-title'>${i+1}. ${q.text}</div>
          </div>
        `).join('')}
        <script>window.print()</script>
      </body>
      </html>
    `;
    const w = window.open('', '_blank');
    w.document.write(html);
    w.document.close();
  }

  return <button onClick={openPrintable}>طباعة PDF</button>;
}
