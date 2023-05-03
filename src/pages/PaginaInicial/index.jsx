import Entrada from '../Entrada'
import Card from '../Card';
import './style.css'

function PaginaInicial() {
  return (
    <div className="container">
      <h1>📑 Lista de presença</h1>
      <Entrada />
      <br/>
      <br/>
      <Card nome={"Andriele Joras dos Santos"} horario={"12:00"}/>
    </div>
  );
}

export default PaginaInicial;
