const sides=document.querySelectorAll('.side-input');
const hypotenusebtn=document.querySelector('#hypotenuse-btn');
const outputEl=document.querySelector('.output');
function calculateSumOfSquares(a,b){
    const result=a**2+b**2;
    console.log(result);
    return result
}
function calculateHypotenuse(){
    const sumOfSquares=calculateSumOfSquares(Number(sides[0].value),Number(sides[1].value));
    const hypotenuseLength=Math.sqrt(sumOfSquares);
    console.log(hypotenuseLength);
    outputEl.innerText='The length of hypotenuse is '+hypotenuseLength;

}
hypotenusebtn.addEventListener('click',calculateHypotenuse);
