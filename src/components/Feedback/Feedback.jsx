export const Feedback = props => {
  return (
    <>
      <h2>Please leave feedback</h2>
      <ul>
        <li>
          <button onClick={props.good} type="button">
            Good
          </button>
        </li>
        <li>
          <button onClick={props.neutral} type="button">
            Neutral
          </button>
        </li>
        <li>
          <button onClick={props.bad} type="button">
            Bad
          </button>
        </li>
      </ul>
    </>
  );
};
