import { Notification } from 'components/Notification/Notification';
export const Statistics = props => {
  return (
    <>
      <h2>Statistics</h2>
      {props.totalF !== 0 ? (
        <>
          <ul>
            <li>
              <p>Good: {props.goodF}</p>
            </li>
            <li>
              <p>Neutral: {props.neutralF}</p>
            </li>
            <li>
              <p>Bad: {props.badF}</p>
            </li>
            <li>
              <p> Total: {props.totalF}</p>
            </li>
          </ul>
          <p>Positive feedback{props.positeveF}%</p>
        </>
      ) : (
        <Notification />
      )}
    </>
  );
};
