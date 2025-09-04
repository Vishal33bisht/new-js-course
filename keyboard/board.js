    const insert = document.querySelector('.insert');

    window.addEventListener('keydown', (e) => {
      insert.innerHTML = `
      <table border="1" cellspacing="0" cellpadding="5">
        <tr>
          <th>Key</th>
          <th>KeyCode</th>
          <th>Code</th>
        </tr>
        <tr>
          <td>${e.key===" " ? "space" : e.key}</td>
          <td>${e.keyCode}</td>
          <td>${e.code}</td>
        </tr>
      </table>
      `;
    });