import { useState } from 'react';
import { Feedback } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const positiveFeedback =
    Math.round((good / (good + neutral + bad)) * 100) || 0;

  return (
    <>
      <Feedback
        good={() => setGood(good + 1)}
        neutral={() => setNeutral(neutral + 1)}
        bad={() => setBad(bad + 1)}
      />
      <Statistics
        goodF={good}
        neutralF={neutral}
        badF={bad}
        totalF={good + neutral + bad}
        positeveF={positiveFeedback}
      />
    </>
  );
};
