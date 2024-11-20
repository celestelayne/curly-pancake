console.log('Button click exercise');

const button = document.querySelector('.js-button');
console.log(button);

const handleClickEvent = () => {
    alert('Button clicked');
    // console.log('Button clicked');
}

button.addEventListener('click', handleClickEvent)