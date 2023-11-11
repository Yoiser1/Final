import ListaUsuarios from '../../components/ListaUsuarios';
import UsuarioForm from '../../components/UsuarioForm';
import './style.css'
import {useState} from 'react';

function Home() {
    const [isAgregando, setIsAgregando] = useState(false);
    const [usuarios, setUsuarios] = useState([]);

    return(
        <div className="home">
        <button onClick={() => setIsAgregando(true)}>Agregar Usuario </button>
        {isAgregando && <UsuarioForm/>}
        <ListaUsuarios />
        </div>
    );
}

export default Home;