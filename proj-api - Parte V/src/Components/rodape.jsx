

import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function rodape (){
    return(
        <>
        <div className='container'  >
       
        <Navbar bg="dark" data-bs-theme="dark" >
        <Container >
          <Navbar.Brand href="#"  >Siga - Front-End - SENAI - Maracanã ----- 
          Site criado como exemplo de requisição HTTP - Unidade Maracanã.</Navbar.Brand>
          
        </Container>
      </Navbar>
      
        </div>
      
        </>
    )

}
export default rodape