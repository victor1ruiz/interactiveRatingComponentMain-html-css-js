const btn = document.querySelector('.btn')
const principal = document.querySelector(".principal")
const secundary = document.querySelector(".secundary")
const ratingLabel = document.querySelectorAll(".rating-label");
const ratedValue = document.querySelector(".rated-value")
let labelValue;


ratingLabel.forEach(number => {
    number.addEventListener('click', () => {
        labelValue = number.innerHTML
    })
})


btn.addEventListener('click', () => {
    principal.classList.add('hide')
    secundary.classList.remove('hide')
    secundary.classList.add('show')
    ratedValue.innerHTML = labelValue
})



