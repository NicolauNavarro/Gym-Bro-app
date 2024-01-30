

//Pages
const homePage = document.querySelector('.homePage')
const exercisePage = document.querySelector('.exercisePage')
const foodPage = document.querySelector('.foodPage')
const contactPage = document.querySelector('.contactPage')


//Icons
const homeIcon = document.querySelector('#homeIcon')
const exerciseIcon = document.querySelector('#exerciseIcon')
const foodIcon = document.querySelector('#foodIcon')
const contactIcon = document.querySelector('#contactIcon')


//Call functions
homeIcon.addEventListener('click', homePageT)
exerciseIcon.addEventListener('click', exercisePageT)
foodIcon.addEventListener('click', foodPageT)
contactIcon.addEventListener('click', contactPageT)

function homePageT(){
    homePage.style.display='flex'
    exercisePage.style.display='none'
    foodPage.style.display='none'
    contactPage.style.display='none'
    homeIcon.style.color='var(--main)'
    exerciseIcon.style.color='#505050'
    foodIcon.style.color='#505050'
    contactIcon.style.color='#505050'
}

function exercisePageT(){
    homePage.style.display='none'
    exercisePage.style.display='flex'
    foodPage.style.display='none'
    contactPage.style.display='none'
    exerciseIcon.style.color='var(--main)'
    homeIcon.style.color='#505050'
    foodIcon.style.color='#505050'
    contactIcon.style.color='#505050'
}

function foodPageT(){
    homePage.style.display='none'
    exercisePage.style.display='none'
    foodPage.style.display='flex'
    contactPage.style.display='none'
    foodIcon.style.color='var(--main)'
    exerciseIcon.style.color='#505050'
    homeIcon.style.color='#505050'
    contactIcon.style.color='#505050'
}

function contactPageT(){
    homePage.style.display='none'
    exercisePage.style.display='none'
    foodPage.style.display='none'
    contactPage.style.display='flex'
    contactIcon.style.color='var(--main)'
    exerciseIcon.style.color='#505050'
    foodIcon.style.color='#505050'
    homeIcon.style.color='#505050'
}