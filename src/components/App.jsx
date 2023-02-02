import React from 'react';
import { useState, useEffect } from 'react';

import Section from './Section/Section';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';


const App = () => {
  const [good, setGood] = useState(null);
  const [neutral, setNeutral] = useState(null);
  const [bad, setBad] = useState(null);

  const options = ['good', 'neutral', 'bad'];

  const totalFeedback = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  function handleIncrement(option) {
    // console.log('click')

    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        // console.log(good)
        break;
      
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      
      default:
        return;
    };
  };

  function countTotalFeedback() {
    const totalFeedback = good + neutral + bad;
    console.log(totalFeedback);
    return totalFeedback;
  }  
  
  function countPositiveFeedbackPercentage() {
    return Math.round((good / totalFeedback) * 100)
   
};
    
    return (
      <div>
        <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleIncrement}
        />
        </Section>
        <Section title="Statistics">
          {totalFeedback > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positiveFeedback={positivePercentage}
          />
            ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>)
};

export default App;