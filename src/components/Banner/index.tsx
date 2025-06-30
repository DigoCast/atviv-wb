import "./style.css";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
      <div className="container-banner">
        <div className="text">
          <h2>World Beauty</h2>
          <p>
            Seja bem vindo ao sistema World Beauty, aqui você pode cadastrar
            seus Clientes, Produtos e servicos.
          </p>
          <Link to="/cliente">
            <span>Cadastrar Clientes</span>
          </Link>
        </div>
      </div>
    );
}

export default Banner;
