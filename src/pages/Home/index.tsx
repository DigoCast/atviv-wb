import React from "react";
import "./style.css";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import userIcon from "../../assets/images/user.png";

const Home: React.FC = () => {
  return (
    <div className="container-home">
      <Banner />
      <div className="session-cards">
        <h2>Serviços Disponíveis</h2>
        <div className="cards-container">
          <div className="card-div">
            <Card
              title="Clientes"
              image={userIcon}
              descricao="Adicione, atualize ou exclua um cliente ao sistema para gerenciar suas informações e consumo."
              link="/cliente"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
