import React, { useState, useEffect, useMemo } from "react";
import "./style.css";
import SearchBar from "../../components/SearchBar";
import { Link, useNavigate } from "react-router-dom"; // useNavigate para redirecionar
import { apiClientes } from "../../services/clienteService";
import { Cliente as ICliente } from "../../models/Cliente";

const Cliente: React.FC = () => {
  const [clientes, setClientes] = useState<ICliente[]>([]);
  const [filtro, setFiltro] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const carregarClientes = async () => {
      try {
        setError(null);
        setLoading(true);
        const dados = await apiClientes.listar();
        setClientes(dados);
      } catch (error) {
        console.error("Erro ao carregar clientes:", error);
        setError(
          "Não foi possível carregar os clientes. Verifique a conexão com o servidor."
        );
      } finally {
        setLoading(false);
      }
    };
    carregarClientes();
  }, []);

  const clientesFiltrados = useMemo(() => {
    if (!filtro) {
      return clientes;
    }
    return clientes.filter((cliente) => {
      const nomeCompleto = `${cliente.nome} ${cliente.sobreNome}`.toLowerCase();
      return nomeCompleto.includes(filtro.toLowerCase());
    });
  }, [clientes, filtro]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiltro(e.target.value);
  };

  const handleExcluir = async (id: number) => {
    const confirmar = window.confirm(
      "Tem certeza que deseja excluir este cliente?"
    );
    if (!confirmar) return;

    try {
      await apiClientes.excluir(id);
      setClientes((prev) => prev.filter((cliente) => cliente.id !== id));
    } catch (error) {
      console.error("Erro ao excluir cliente:", error);
      alert("Não foi possível excluir o cliente.");
    }
  };

  const handleEditar = (id: number) => {
    navigate(`/editarcliente/${id}`);
  };

  const renderTableContent = () => {
    if (loading) {
      return (
        <tr>
          <td colSpan={5} style={{ textAlign: "center" }}>
            Carregando...
          </td>
        </tr>
      );
    }

    if (error) {
      return (
        <tr>
          <td colSpan={5} style={{ textAlign: "center", color: "red" }}>
            {error}
          </td>
        </tr>
      );
    }

    if (clientesFiltrados.length === 0) {
      return (
        <tr>
          <td colSpan={5} style={{ textAlign: "center" }}>
            Nenhum cliente encontrado.
          </td>
        </tr>
      );
    }

    return clientesFiltrados.map((cliente, index) => (
      <tr key={cliente.id ?? index}>
        <td>{`${cliente.nome} ${cliente.sobreNome}`}</td>
        <td>{cliente.email || "-"}</td>
        <td>
          {cliente.telefones && cliente.telefones.length > 0
            ? `(${cliente.telefones[0].ddd}) ${cliente.telefones[0].numero}`
            : "-"}
        </td>
        <td>
          {cliente.endereco
            ? `${cliente.endereco.rua}, ${cliente.endereco.numero} - ${cliente.endereco.bairro}, ${cliente.endereco.cidade} - ${cliente.endereco.estado}`
            : "-"}
        </td>
        <td>
          {cliente.id !== undefined && (
            <>
              <button
                onClick={() => handleEditar(cliente.id!)}
                style={{ marginRight: 8 }}
              >
                Editar
              </button>
              <button
                onClick={() => handleExcluir(cliente.id!)}
                style={{ color: "red" }}
              >
                Excluir
              </button>
            </>
          )}
        </td>
      </tr>
    ));
  };

  return (
    <div className="container-tipos">
      <div className="container-cli-pro-ser">
        <h2>Clientes</h2>
        <div className="search-session">
          <div className="search-bar">
            <SearchBar
              placeholder="Digite o nome do cliente"
              onChange={handleSearchChange}
            />
          </div>
          <Link to={"/cadastrocliente"} style={{ color: "inherit" }}>
            <div className="button-cadastro">
              <span>Cadastrar Cliente</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="table-component" role="region" tabIndex={0}>
        <table>
          <thead>
            <tr>
              <th>Nome Completo</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Endereço</th>
              <th className="acoes">Ações</th>
            </tr>
          </thead>
          <tbody>{renderTableContent()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Cliente;
