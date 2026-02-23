const options = [
  "Most Recent",
  "Oldest",
  "Greatest Learning",
  "Biggest Challenge",
  "Client Projects",
  "Academic Projects",
];

const OrderFilter = ({ order, handleOrderChange }) => {
  return (
    <div className="d-flex justify-content-end me-sm-4">
      <select
        name="select-order-filter"
        className="p-2 border rounded"
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
