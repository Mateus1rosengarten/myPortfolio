const options = [
  "Mais Recentes",
  "Mais Antigos",
  "Maior Aprendizado",
  "Maior Desafio",
  "Projetos para Clientes",
  "Projetos Academicos",
];

const OrderFilter = ({ order, handleOrderChange }) => {
  return (
    <div className="d-flex justify-content-end pe-5 me-3">
      <select
        className="p-2"
        value={order}
        onChange={(e) => handleOrderChange(e.target.value)}
      >
        {options.map((text, index) => (
          <option value={text} key={index}>
            {text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default OrderFilter;
