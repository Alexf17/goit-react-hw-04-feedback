import { useState, useEffect } from 'react';
import { Notification } from 'components/Notification/Notification';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Section } from '../Section/Section';
import { Wrapper } from './App.styled';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  const allFeedBack = { good, neutral, bad };



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

useEffect(() => {
    const allState = good + neutral + bad;
    setTotal(allState);
    setPositivePercentage(Math.round((100 / allState) * good) || 0);
}, [good, neutral, bad]);
  
  

  return (
    <Wrapper>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(allFeedBack)}
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
