import Usuario from '../Usuario';
import './style.css'
function ListaUsuarios (){
    return(
        <div className='lista-usuarios'>
            <Usuario usuario={
                {
                    name: "Yoiser",
                    lastName: "Agualimpia",
                    type: "ADMIN",
                    photoUrl: "https://c0.klipartz.com/pngpicture/81/570/gratis-png-perfil-logo-iconos-de-computadora-usuario-usuario-thumbnail.png"
                }
                        }/>
        </div>
    
    )

}

export default ListaUsuarios;