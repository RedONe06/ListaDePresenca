import Logo from "../../assets/logo-ulbra.png";
import "./style.css";

function Rodape() {
  return (
    <footer>
      <div className="rodape">
        <img src={Logo} alt="Logo Ulbra" id="logo" />
        <div className="by">
          <h4>Feito por: </h4>
          <a href="https://github.com/RedONe06" target="_blank">@RedONe06</a>
        </div>
      </div>
    </footer>
  );
}
export default Rodape;
