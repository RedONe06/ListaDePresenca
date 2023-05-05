import Chip from '@mui/material/Chip';
import './style.css'

function Card({nome, horario}){
    return (
        
        <div className="card">
            <p>{nome}</p>
            <Chip label={horario} />
        </div>
    )
}

export default Card;