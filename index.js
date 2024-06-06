(function(){
    emailjs.init({
    publicKey: "gcmNecdoqbAtimEsx",
    });
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // these IDs from the previous steps
    emailjs.sendForm('service_j87fiir', 'template_467rplv', this)
        .then(() => {
            console.log('SUCCESS!');
        }, (error) => {
            console.log('FAILED...', error);
        });
});