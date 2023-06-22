import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions.jsx';
import { Statistics } from './Statistics/Statistics.jsx';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const btnId = e.currentTarget.id;

    switch (btnId) {
      case 'good':
        this.setState(prevState => {
          return { good: prevState.good + 1 };
        });
        break;
      case 'neutral':
        this.setState(prevState => {
          return { neutral: prevState.neutral + 1 };
        });
        break;
      case 'bad':
        this.setState(prevState => {
          return { bad: prevState.bad + 1 };
        });
        break;

      default:
        console.log('well this is weird :)');
    }
  };

  render() {
    const total = this.state.good + this.state.bad + this.state.neutral;
    const percentage = ((this.state.good * 100) / total).toFixed(1);

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '100px',
          color: "white"
        }}
      >
        <h1>Please leave feedback</h1>
        <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
        <Statistics
          goodValue={this.state.good}
          neutralValue={this.state.neutral}
          badValue={this.state.bad}
          total={total}
          percentage={percentage}
        />
      </div>
    );
  }
}
