// class change for cards

let checkbox = document.querySelectorAll('.card-checkbox');
let card = document.querySelectorAll('.card');

for (let i = 0; i <= checkbox.length - 1; i++) {
    checkbox[i].addEventListener('change', function() {
        if (this.checked) {
            card[i].classList.add('text-white');
            card[i].classList.add('bg-dark');
        } else {
            card[i].classList.remove('text-white');
            card[i].classList.remove('bg-dark');
        }
    });
}

// moving the form div
const floatForm = document.querySelector('#section-4')

if (floatForm.getBoundingClientRect().top >= 0 && floatForm.getBoundingClientRect().bottom >= window.innerHeight) {
    floatForm.style.right = '50vw';
}

//moving divs in secton-3