// Header Cambio

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('movil-nav-activa');
    this.classList.toggle('fa-xmark')
})

//Efecto de Escritura

let typed = new Typed('.auto-input',{
    strings: ['Freelancer!', 'Front-End Developer!', 'Programador PLC'],
    typedSpeed: 100,
    backSpeed: 100,
    backDelay: 200,
    loop: true,
})