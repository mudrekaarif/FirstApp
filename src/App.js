import React, { Component } from 'react';
import './App.css';
import Button from './Button'
import Input from './Input'
class App extends Component {

  state={
    a: 0,
    b: 0,
    result: 0,
    fact: "click on get fact"
  };
  

  getFACT = (num) => {
    console.log("aaaaa");
      fetch(`http://numbersapi.com/${num}`)
      .then(result => {
          // console.log(result);
          return result.text();
      })
      .then(data => {
        console.log(data);
        this.setState({fact : data});
      })
      .catch(error => console.log(error));
  }

  inputnumber1=(event)=>{
    this.setState({a: parseInt(event.target.value,10)})
  }
  inputnumber2=(event)=>{
    this.setState({b: parseInt(event.target.value,10)})
  }
  AddNumbers=()=>{
    this.setState({result: this.state.a+this.state.b})
  }
  SubNumbers=()=>{
    this.setState({result: this.state.a-this.state.b})
  }
  MulNumbers=()=>{
    this.setState({result: this.state.a*this.state.b})
  }
  Increment=()=>{
    this.setState({result: this.state.result+1})
  }
  Decrement=()=>{
    this.setState({result: this.state.result-1})
  }


  render() {
    return (
      <div className='App'>
        <h4>Enter Number 1</h4>
        <Input handler={this.inputnumber1}/>
        <h4> Enter Number 2</h4>
        <Input handler={this.inputnumber2}/>
        <Button name="Add" handler={this.AddNumbers}/>
        <Button name="Subtract" handler={this.SubNumbers}/>
        <Button name="Multiply" handler={this.MulNumbers}/>
        <Button name="GET FACT" handler={() => { this.getFACT(this.state.result)}}/>
        <h4>Result is {this.state.result}</h4>
        <h4>FACT : " {this.state.fact} "</h4>
        <Button handler={this.Increment} name="Increment"/>
        <Button handler={this.Decrement} name="Decrement"/>
      </div>
    );
  }
}

export default App;
