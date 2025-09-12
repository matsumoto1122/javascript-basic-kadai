const bottonBtn = document.getElementById('btn');

const textBtn = document.getElementById('text');

bottonBtn.addEventListener('click', () =>{

    const textsBtn = document.getElementById('text');

    textsBtn.textContent = 'ボタンをクリックしました';

    textBtn.createElement(textsBtn);
});

