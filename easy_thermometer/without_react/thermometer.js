let ind = document.body.querySelector('.indicator');
let colored = document.body.firstElementChild

inc.addEventListener("click", () => {
    ind.innerHTML = +ind.innerHTML + 1;
    if (ind.textContent >= 10) {colored.style.backgroundColor='red'}
    else {colored.style.backgroundColor='skyblue'}
})

dec.addEventListener("click", () => {
    ind.innerHTML -= 1;
    if (ind.textContent >= 10) {colored.style.backgroundColor='red'}
    else {colored.style.backgroundColor='skyblue'}
})