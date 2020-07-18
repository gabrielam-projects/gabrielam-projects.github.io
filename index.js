const images = document.querySelectorAll('img');
images.forEach((image)=>{
    image.classList.add('fadeIn')
})

function Circlle(el){
    $(el).circleProgress({fill: {color: '#FFAB00'}})
    .on('circle-animation-progress', function(event, progress, stepValue){

        $(this).find('strong').text(String(stepValue.toFixed(2)).substr(2)+'%'
        );
    });
};
Circlle('.round');