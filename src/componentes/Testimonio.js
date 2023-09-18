import React from 'react';
import '../hojas-de-estilo/Testimonio.css'

function Testimonio() {
  return (
    <div className='contenedor-testimonio'>
      <img  className='imagen-testimonio'
            src= {require('../imagenes/Emma.png')}
            alt='Foto de Emma' />
      <div className='contenedor-texto-testiomnio'>
        <p className='nombre-testimonio'>Emma Bostian de Suecia</p>
        <p className='cargo-testimonio'>Ingeniero de software en Spotify</p> 
        <p className='texto-testimonio'>Siempre me ha costado aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.</p>
      </div>
    </div>
  );
}

export default Testimonio;