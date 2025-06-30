import "./style.css";
import { Link } from "react-router-dom";

interface CardProps{
  title: string
  image: string 
  descricao: string
  link: string
}

const Card = (props : CardProps) => {
    return (
      <div className="card">
        <div className="card-image">
          <img src={props.image} alt="img-icon" />
        </div>
        <h2 className="card-title">{props.title}</h2>
        <p className="card-description">{props.descricao}</p>
        <Link to={props.link} style={{ color: "inherit" }}> 
          <button className="card-button">Pagina de {props.title}</button>
        </Link>
      </div>
    );
}

export default Card;
