
(function () {
  const name = document.querySelector('.name-class')?.innerText || '名前なし';
  const furigana = document.querySelector('.furigana-class')?.innerText || 'ふりがななし';
  const phone = document.querySelector('.phone-class')?.innerText || '電話なし';
  const timestamp = new Date().toISOString().replace(/[-T:.Z]/g, '').slice(0, 14);

  let table = document.querySelector('#info-panel');
  if (!table) {
    table = document.createElement('table');
    table.id = 'info-panel';
    table.style.position = 'fixed';
    table.style.top = '20px';
    table.style.right = '20px';
    table.style.background = 'white';
    table.style.border = '1px solid black';
    table.style.padding = '10px';
    table.style.zIndex = '9999';

    const header = document.createElement('tr');
    ['No', '氏名', 'ふりがな', '電話', '仮No'].forEach(text => {
      const th = document.createElement('th');
      th.textContent = text;
      header.appendChild(th);
    });
    table.appendChild(header);
    document.body.appendChild(table);
  }

  const row = document.createElement('tr');
  const no = table.rows.length;
  [no, name, furigana, phone, timestamp].forEach(text => {
    const td = document.createElement('td');
    td.textContent = text;
    row.appendChild(td);
  });
  table.appendChild(row);

  const note = document.createElement('div');
  note.textContent = '✅ 收集成功';
  note.style.position = 'fixed';
  note.style.top = '10px';
  note.style.left = '50%';
  note.style.transform = 'translateX(-50%)';
  note.style.background = '#e6ffe6';
  note.style.border = '1px solid #66cc66';
  note.style.padding = '5px 10px';
  note.style.borderRadius = '6px';
  note.style.zIndex = '10000';
  document.body.appendChild(note);
  setTimeout(() => note.remove(), 1000);
})();
