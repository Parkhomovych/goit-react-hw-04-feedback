export const Statistics = props => {
  return (
    <>
      <h2>Statistics</h2>
      <ul>
        <li>
          <p>{props.goodF}</p>
        </li>
        <li>
          <p>{props.neutralF}</p>
        </li>
        <li>
          <p>{props.badF}</p>
        </li>
        <li>
          <p>{props.totalF}</p>
        </li>
      </ul>
      <p>Positive feedback{props.positeveF}%</p>
    </>
  );
};
