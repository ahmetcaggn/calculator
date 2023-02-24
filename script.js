const input = document.getElementById('bar');

const butonlar = document.querySelector('#tuslar');
const yanButonlar = document.querySelector('#yan');

butonlar.addEventListener('click', e => {
    if(e.target.matches('button')){
        if(e.target.innerText == 'C'){
            input.value = '';
            exit();
        }
        // if(input.value.includes('sin') || input.value.includes('cos') || input.value.includes('tan') || input.value.includes('cot')){
        //     input.value += 'sin(';
        //     exit();
        // }
        if(e.target.innerText == '='){
            if(input.value.includes('+*')){
                input.value = 'math error';
                exit();
            }
            let sum = eval(input.value);
            input.value = sum;
            exit();
        }
        if(e.target.innerText == 'x'){
            input.value += '*';
            exit();
        }
        
        input.value += e.target.innerText;
    }
})

yanButonlar.addEventListener('click', e => {
    if(e.target.matches('button')){
        input.value += e.target.innerText;
    }
})

const openNearTab = () => {
    var ekIslem = document.getElementById('yan');
    var butonunIsmi = document.getElementById('yanEkran')
    if(ekIslem.style.display == 'none'){
        ekIslem.style.display = 'block';
        butonunIsmi.innerHTML = '< Close';
    }else{
        ekIslem.style.display = 'none';
        butonunIsmi.innerHTML = 'Open >';
    }
}