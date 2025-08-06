import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 5,
      amount: '',
      currency: ''
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 }, () => {
      this.sayHello("Member1");
    });
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  }

  sayHello = (name) => {
    alert(`Hello ${name}`);
  }

  sayMessage = (msg) => {
    alert(msg);
  }

  handleClick = (e) => {
    alert("I was clicked");
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const amount = parseFloat(this.state.amount);
    const euro = amount / 90; // Example: 1 Euro = 90 INR
    alert(`Converting to Euro amount is €${euro.toFixed(2)}`);
  }

  render() {
    return (
      <div>
        <h3>{this.state.count}</h3>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={() => this.sayMessage("welcome")}>Say Welcome</button>
        <button onClick={this.handleClick}>Click on me</button>

        <h2 style={{ color: "green" }}>Currency Convertor!!!</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Amount:</label>
          <input type="text" name="amount" value={this.state.amount} onChange={this.handleChange} />
          <br />
          <label>Currency:</label>
          <input type="text" name="currency" value={this.state.currency} onChange={this.handleChange} />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;

