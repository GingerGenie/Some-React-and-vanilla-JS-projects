let number = document.body.querySelector('div').innerHTML;

document.body.onclick = function (e) {
    let button = e.target;
    let number = document.body.querySelector('div');
    if (button.innerHTML.trim() == "Increase") {
        number.innerHTML = +number.innerHTML + 1;
    }
    else {
        number.innerHTML -= 1;
    }
}