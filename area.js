const input=document.querySelectorAll('.side-input');
const outputEl = document.querySelector('.output');
const areaBtn = document.querySelector('#area-btn');
function calculateArea(){
    const result=(1/2)*Number(input[0].value)*Number(input[1].value);
    if(input[0].value === '' || input[1].value===''){
        outputEl.textContent = 'you need to enter both the fields'
    }
    else{
        outputEl.textContent = `area of triangle is ${result}cm²`;
}
}
areaBtn.addEventListener('click',calculateArea);

