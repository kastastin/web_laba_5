const firstLine = document.getElementById('first_line'),
      secondLine = document.querySelector('p'),
      thirdLine = document.getElementById('third_line'),
      image = document.querySelector('img'),
      imageTitle = document.querySelector('h3');

let isInitial = true,
    isGreen = true,
    isSmall = true;

function toggleState() {
    if (isInitial) {
        firstLine.style.color = 'white';
        firstLine.style.backgroundColor = 'blue';
        thirdLine.style.color = 'white';
        thirdLine.style.backgroundColor = 'yellow';
        isInitial = false;
    } else {
        firstLine.style.color = 'black';
        firstLine.style.backgroundColor = 'yellow';
        thirdLine.style.color = 'black';
        thirdLine.style.backgroundColor = 'blue';
        isInitial = true;
    }
}

firstLine.addEventListener('click', () => {
    toggleState();
});

thirdLine.addEventListener('click', () => {
    toggleState();
});

secondLine.addEventListener('click', () => {
    if (isGreen) {
        secondLine.style.color = 'red';
        secondLine.style.backgroundColor = 'white';
        isGreen = false;
    } else {
        secondLine.style.color = 'white';
        secondLine.style.backgroundColor = 'green';
        isGreen = true;
    }
});

imageTitle.addEventListener('click', () => {
    if (isSmall) {
        image.style.transform = 'scale(1.05)';
        imageTitle.style.color = 'red';
        isSmall = false;
    } else {
        image.style.transform = 'scale(1.0)';
        imageTitle.style.color = 'black';
        isSmall = true;
    }
});