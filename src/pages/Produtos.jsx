import Itens from "../componentes/Produto";
import Menu from "../componentes/Menu";
import Footer from "../componentes/Footer";

function Produtos() {
  return (
    <div>
      <Menu></Menu>
      <h1>Produtos</h1>
      <div className="cartao">
        <Itens></Itens>
        <Itens></Itens>
        <Itens></Itens>
        <Itens></Itens>
        <Itens></Itens>
        <Itens></Itens>
        <Itens></Itens>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Produtos;
