let insert = document.getElementById("insert");

document.addEventListener('keydown', (e) => {

    insert.innerHTML = `
    <div class="key">
        Вы нажали на: ${e.key}
    </div>
    <div class="key">
        Вы нажали на: ${e.code}
    </div>
    <div class="key">
        Вы нажали на: ${e.keyCode}
    </div>
    `;

    console.log(e.key);
    console.log(e.keyCode);
    console.log(e.code);
})
