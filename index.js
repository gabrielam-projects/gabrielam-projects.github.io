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

const email_value = document.querySelector('#email').value;

$('#contact').on('submit', function(event) {
    event.preventDefault(); // prevent reload
    var formData = new FormData(this);
    
    formData.append('service_id', 'gabrielam.proyectos');
    formData.append('template_id', 'template_2wqM7Kr9');
    formData.append('user_id', 'user_0mxxMl4fBIPxARsZGdniB');
    formData.append('email', email_value);

 
    $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
        type: 'POST',
        data: formData,
        contentType: false, // auto-detection
        processData: false // no need to parse formData to string
    }).done(function() {
        alert('Recibido, ¡muchas gracias!');
    }).fail(function(error) {
        alert('Oops... ' + JSON.stringify(error));
    });
});