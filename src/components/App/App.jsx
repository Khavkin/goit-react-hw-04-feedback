import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import React, { useState } from 'react';
import { Section } from '../Section/Section';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import { Container } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  //state = { good: 0, neutral: 0, bad: 0 };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;

    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (total > 0) return Math.round((good / total) * 100, 0);
  };

  const onLeaveFeedback = event => {
    const feedback = event.target.name;
    switch (feedback) {
      case 'good':
        setGood(oldGood => oldGood + 1);
        break;
      case 'neutral':
        setNeutral(oldNeutral => oldNeutral + 1);
        break;
      case 'bad':
        setBad(oldBad => oldBad + 1);
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      <Section title="Please leave feadback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </Container>
  );
};
