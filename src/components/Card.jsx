/* eslint-disable react/prop-types */
const Card = ({ title, item1, item2, item3, background }) => {
  return (
    <article className="card" style={{ background: background }}>
      <h2>{title}</h2>
      <ul>
        <li>{item1}</li>
        <li>{item2}</li>
        <li>{item3}</li>
      </ul>
    </article>
  );
};
export default Card;
