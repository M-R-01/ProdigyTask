window.addEventListener('scroll', reveal)

function reveal(){
    var refer = document.querySelector('#first-container');
    var reveal = document.querySelector('header')

    var windowHeight = window.innerHeight;
    var top = refer.getBoundingClientRect().top;
    var point = 720;

    console.log(`${windowHeight}, ${top}, ${point}`)

    if (top<windowHeight-point) {
        reveal.classList.add('active');
    } else {
        reveal.classList.remove('active');
    }
}