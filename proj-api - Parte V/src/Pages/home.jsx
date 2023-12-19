import Menu from '../Components/menu'
import Inicial from './inicial'
import Rodape from '../Components/rodape'
import Get from '../Components/Get'
import Carrocel from './Carrocel'
import 'bootstrap/dist/css/bootstrap.min.css';

function home(){
    return(
        <>
        <div className='container'>
        <Menu />
        <Carrocel />
        <br />
        <Inicial />
        <br />
        <Rodape />
        </div>
        
        </>
    )
}

export default home