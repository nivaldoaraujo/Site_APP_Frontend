import imagem from '../../src/assets/imagem1.jpg'

import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function carrocel() {
  return (
    <div className='container'>
         <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../src/assets/imagem1.jpg"
          style={{  width: "100%", height: "450px"  }}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Senai Marcanã - API</h5>
          <p> Curso de Frontend - FullStack </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../src/assets/imagem2.jpg"
          style={{  width: "100%", height: "450px"  }}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Desenvedor FrontEnd</h5>
          <p>Nossos cursos no SENAI maracanã - Backend e Frontend</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../src/assets/imagem3.jpg"
          style={{  width: "100%", height: "450px"  }}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Matricule se :</h5>
          <p>
          React - Bootstrap - CSS- HTML - Java Script
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
   
  );
}

export default carrocel;