const div1 = document.getElementById('experiencia');
const div2 = document.getElementById('educacion');
const div3 = document.getElementById('skill');
const div4 = document.getElementById('proyecto');
const div5 = document.getElementById('contacto');


const cargarDiv = (entradas, observador) => {
    /* console.log(entradas);
    console.log(observador); */

    entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
            entrada.target.classList.add('visible');
        } else{
            entrada.target.classList.remove('visible');
        }
    });
}

const observador = new IntersectionObserver(cargarDiv, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 1.0
});

observador.observe(experiencia);
observador.observe(educacion);
observador.observe(skill);
observador.observe(proyecto);
observador.observe(contacto);