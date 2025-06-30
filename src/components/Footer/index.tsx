import "./style.css";

const Footer = () => {
  return (
    <div className="container-footer">
      <h4>World Beauty</h4>
      <div className="container-icons">
        <a href="https://github.com/DigoCast">
          <i
            className="fa-brands fa-github fa-xl"
            style={{ color: "#401D10" }}
          ></i>
        </a>
        <a href="https://www.instagram.com/diego_.cast/">
          <i
            className="fa-brands fa-instagram fa-xl"
            style={{ color: "#401D10" }}
          ></i>
        </a>
        <a href="https://www.linkedin.com/in/diego-castilho-8b87a8301/">
          <i
            className="fa-brands fa-linkedin fa-xl"
            style={{ color: "#401D10" }}
          ></i>
        </a>
        <button
          onClick={() => {}}
          style={{ background: "none", border: "none", cursor: "pointer" }}
          aria-label="WhatsApp"
        >
          <i
            className="fa-brands fa-whatsapp fa-xl"
            style={{ color: "#401D10" }}
          ></i>
        </button>
      </div>
      <p>Copyright© - 2025; Designed by Diego Castilho</p>
    </div>
  );
};

export default Footer;
