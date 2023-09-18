const formInput = document.querySelector('form');
//addeventlistener with function
const color1 = document.querySelector('#color1');
const color2 = document.querySelector('#color2');

const directions = document.querySelectorAll('input[name="direction"]');
const answer = document.querySelector('p');

const backGroundGen = () => {
    let selectedValue;
    console.log(color1.value, color2.value);
    for (const item of directions) {
        if (item.checked) {
            selectedValue = item.value;
        }
    }

    answer.textContent = `linear-gradient(${selectedValue}, ${color1.value}, ${color2.value})`;
}

formInput.addEventListener('change', backGroundGen);