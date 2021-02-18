import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { total, next, operation } = this.state;
    this.setState(calculate({ total, next, operation }, buttonName));
  }

  render() {
    const { total, next } = this.state;
    return (
      <main className="app">
        <h2>
          Let&apos;s do some math!
        </h2>

        <div>
          <Display result={next || total} />
          <ButtonPanel clickHandler={this.handleClick} />
        </div>
      </main>
    );
  }
}

export default App;
