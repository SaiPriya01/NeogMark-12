const input = document.querySelectorAll('.angle-input');
const outputEl = document.querySelector('.output');
const isTriangleBtn = document.querySelector('#is-triangle');

function sumOfAngles(angle1, angle2, angle3) {
    const anglesSum = angle1 + angle2 + angle3;
    return anglesSum;

}

function isTriangle() {
    const total = sumOfAngles(Number(input[0].value), Number(input[1].value), Number(input[2].value));
    console.log(total);
    if (total === 180) {

        outputEl.innerText = 'yay! The angles form a triangle';
    } else {
        outputEl.innerText = "oh oh! The angles don't form a triangle"
    }
}
isTriangleBtn.addEventListener('click', isTriangle);