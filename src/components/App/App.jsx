import { useState } from 'react';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Section } from '../Section/Section';
import { Notification } from 'components/Notification/Notification';
import { Wrapper } from './App.styled';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const allState = { good, neutral, bad };

  const total = good + neutral + bad
 

  const countPositiveFeedbackPercentage = () => {
    if (!total) {
      return 0;
    }
    const result = (good / total) * 100;
    return Number(result.toFixed(0));
  };

  const positivePercentage = countPositiveFeedbackPercentage();

  const handleIncrement = event => {
    const name = event.target.name;
    if (name === 'good') {
      setGood(good + 1);
    }
    if (name === 'neutral') {
      setNeutral(neutral + 1);
    }
    if (name === 'bad') {
      setBad(bad + 1);
    }
  };

  return (
    <Wrapper>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(allState)}
          onLeaveFeedback={handleIncrement}
        />
      </Section>
      <Section title="Statistics">
        {!total ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </Wrapper>
  );
}
