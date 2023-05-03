import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import './style.css'

function Entrada() {
  return (
    <div className="container-entrada">
      <InputLabel htmlFor="input-with-icon-adornment" id="label">Nome completo</InputLabel>
      <Input
        id="input-with-icon-adornment"
        startAdornment={
          <InputAdornment position="start" id="adorn">
            <AccountCircle />
          </InputAdornment>
        }
      />

      <Button variant="contained" size="medium" id="btnAdicionar">
        Adicionar
      </Button>
    </div>
  );
}
export default Entrada;
