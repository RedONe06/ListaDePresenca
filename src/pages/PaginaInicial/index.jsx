import Card from "../Card";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Rodape from "../Rodape"

import "./style.css";

import { useState, useEffect } from "react";

export function PaginaInicial() {
  const [alunos, setAlunos] = useState([]);
  const [nomeAluno, setNomeAluno] = useState("Nome do aluno");
  const [usuario, setUsuario] = useState({ nome: "", img: "" });

  function adicionarAluno() {
    const novoAluno = {
      nome: nomeAluno,
      hora: new Date().toLocaleTimeString(
        "pt-br",
        { hour: "2-digit", minute: "2-digit", second: "2-digit" },
        { timeZone: "America/Sao_Paulo" }
      ),
    };

    setAlunos((alunosAnteriores) => [...alunosAnteriores, novoAluno]);
  }

  useEffect(() => {
    fetch("https://randomuser.me/api")
      .then((response) => response.json())
      .then((data) =>
        setUsuario({
          nome: data.results[0].name.first,
          img: data.results[0].picture.large,
        })
      );
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h1>📑 Lista de presença</h1>
        <div className="user">
          <Avatar alt="Remy Sharp" src={usuario.img} />
          <p>{usuario.nome}</p>
          <strong> | Ulbra CSL</strong>
        </div>
      </div>

      <div className="container-entrada">
        <InputLabel htmlFor="input-with-icon-adornment" id="label">
          Nome completo
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start" id="adorn">
              <AccountCircle />
            </InputAdornment>
          }
          onChange={(event) => setNomeAluno(event.target.value)}
        />
        <Button
          variant="contained"
          size="medium"
          id="btnAdicionar"
          onClick={adicionarAluno}
        >
          Adicionar
        </Button>
      </div>
      <br />
      <br />
      {alunos.map((aluno) => (
        <Card key={aluno.hora} nome={aluno.nome} horario={aluno.hora} />
      ))}
      <Rodape />
    </div>
  );
}
