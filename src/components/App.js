import React from 'react';
import Navbar from './Navbar';
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
      <>
        <Navbar />
        <Display result={next || total} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;
