const images = document.querySelectorAll('img');
images.forEach((image)=>{
    image.classList.add('fadeIn')
})

// images.forEach((image)=>{

//     image.addEventListener('load', (event)=>{
//         event.srcElement.classList.add('fadeIn')
//     })

// })