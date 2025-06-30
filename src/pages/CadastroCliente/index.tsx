import { useState } from "react";
import { apiClientes } from "../../services/clienteService";
import { Cliente } from "../../models/Cliente";
import userIcon from "../../assets/images/user.png";
import "./style.css";

const CadastroCliente = () => {
  const [cliente, setCliente] = useState<Cliente>({
    nome: "",
    sobreNome: "",
    email: "",
    endereco: {
      estado: "",
      cidade: "",
      bairro: "",
      rua: "",
      numero: "",
      codigoPostal: "",
      informacoesAdicionais: "",
    },
    telefones: [
      {
        ddd: "",
        numero: "",
      },
    ],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    if (name.startsWith("endereco.")) {
      const field = name.split(".")[1];
      setCliente((prev) => ({
        ...prev,
        endereco: {
          ...prev.endereco,
          [field]: value,
        },
      }));
    } else if (name.startsWith("telefone.")) {
      const field = name.split(".")[1];
      setCliente((prev) => ({
        ...prev,
        telefones: prev.telefones
          ? [
              {
                ...prev.telefones[0],
                [field]: value,
              },
            ]
          : [{ ddd: "", numero: "" }],
      }));
    } else {
      setCliente((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await apiClientes.cadastrar(cliente);
      alert("Cliente cadastrado com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar cliente:", error);
      alert("Erro ao cadastrar cliente.");
    }
  };

  return (
    <div className="container-cadastro">
      <div className="title-cadastro">
        <h2>Cadastre um usuário</h2>
      </div>
      <div className="form-cadastro">
        <div className="image-user">
          <img src={userIcon} alt="ícone de usuário" />
        </div>
        <form onSubmit={handleSubmit}>
          <p>Nome:</p>
          <input
            type="text"
            name="nome"
            value={cliente.nome}
            onChange={handleChange}
            placeholder="Digite o nome"
          />

          <p>Nome Social:</p>
          <input
            type="text"
            name="sobreNome"
            value={cliente.sobreNome}
            onChange={handleChange}
            placeholder="Digite o nome social"
          />

          <p>Email:</p>
          <input
            type="email"
            name="email"
            value={cliente.email || ""}
            onChange={handleChange}
            placeholder="Digite o email"
          />

          <p>Telefone DDD:</p>
          <input
            type="text"
            name="telefone.ddd"
            value={cliente.telefones?.[0]?.ddd || ""}
            onChange={handleChange}
            placeholder="DDD"
            maxLength={2}
          />

          <p>Telefone Número:</p>
          <input
            type="text"
            name="telefone.numero"
            value={cliente.telefones?.[0]?.numero || ""}
            onChange={handleChange}
            placeholder="Número"
          />

          <p>Estado:</p>
          <input
            type="text"
            name="endereco.estado"
            value={cliente.endereco.estado}
            onChange={handleChange}
          />

          <p>Cidade:</p>
          <input
            type="text"
            name="endereco.cidade"
            value={cliente.endereco.cidade}
            onChange={handleChange}
          />

          <p>Bairro:</p>
          <input
            type="text"
            name="endereco.bairro"
            value={cliente.endereco.bairro}
            onChange={handleChange}
          />

          <p>Rua:</p>
          <input
            type="text"
            name="endereco.rua"
            value={cliente.endereco.rua}
            onChange={handleChange}
          />

          <p>Número:</p>
          <input
            type="text"
            name="endereco.numero"
            value={cliente.endereco.numero}
            onChange={handleChange}
          />

          <p>CEP:</p>
          <input
            type="text"
            name="endereco.codigoPostal"
            value={cliente.endereco.codigoPostal}
            onChange={handleChange}
          />

          <p>Complemento:</p>
          <input
            type="text"
            name="endereco.informacoesAdicionais"
            value={cliente.endereco.informacoesAdicionais}
            onChange={handleChange}
          />

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default CadastroCliente;
