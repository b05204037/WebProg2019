import React from 'react';

import CalcButton from '../components/CalcButton';

// 計算機 App
class CalcApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dis: "",
      previousNum: "",
      currentNum: "",
      operator: ""
    };
  }

  resetState = () => {
    this.setState({dis : ""});
    this.setState({previousNum : ""});
    this.setState({currentNum : ""});
    this.setState({operator : ""});
  }

  showNotImplemented = () => {
    console.warn('This function is not implemented yet.');
  }

  displayNum = (num) => {
    this.setState({dis: this.state.dis + num});
  }

  equal = () => {
    this.state.currentNum = this.state.dis;
    if(this.state.operator === "plus"){
      this.setState({dis: parseFloat(this.state.previousNum) + parseFloat(this.state.currentNum)});
    }
    else if(this.state.operator === "subtract"){
      this.setState({dis: parseFloat(this.state.previousNum) - parseFloat(this.state.currentNum)});
    }
    else if(this.state.operator === "mul"){
      this.setState({dis: parseFloat(this.state.previousNum) * parseFloat(this.state.currentNum)});
    }
    else if(this.state.operator === "div"){
      this.setState({dis: parseFloat(this.state.previousNum) / parseFloat(this.state.currentNum)});
    }
  }

  addZero = (num) => {
    if(this.state.dis !== ""){
      this.setState({dis: this.state.dis + num})
    }
  }

  addDot = (num) => {
    if(this.state.dis.indexOf(".") === -1){
      this.setState({dis: this.state.dis + num})
    }
  }

  add = () => {
    this.setState({previousNum: this.state.dis})
    this.setState({dis: ""});
    this.setState({operator: "plus"});
  }

  sub = () => {
    this.setState({previousNum: this.state.dis})
    this.setState({dis: ""});
    this.setState({operator: "subtract"});
  }

  multiply = () => {
    this.setState({previousNum: this.state.dis})
    this.setState({dis: ""});
    this.setState({operator: "mul"});
  }

  divide = () => {
    this.setState({previousNum: this.state.dis})
    this.setState({dis: ""});
    this.setState({operator: "div"});
  }

  render() {
    return (
      <div className="calc-app">
        <div className="calc-container">
          <div className="calc-output">
            <div className="calc-display">{this.state.dis}</div>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-operator2" onClick={this.resetState} children = "AC"></CalcButton>
            <CalcButton className="calc-operator2" onClick={this.showNotImplemented} children = "+/-"></CalcButton>
            <CalcButton className="calc-operator2" onClick={this.showNotImplemented} children = "%"></CalcButton>
            <CalcButton className="calc-operator" onClick={this.divide} children = "÷"></CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={this.displayNum} children = "7"></CalcButton>
            <CalcButton className="calc-number" onClick={this.displayNum} children = "8"></CalcButton>
            <CalcButton className="calc-number" onClick={this.displayNum} children = "9"></CalcButton>
            <CalcButton className="calc-operator" onClick={this.multiply} children = "x"></CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={this.displayNum} children = "4"></CalcButton>
            <CalcButton className="calc-number" onClick={this.displayNum} children = "5"></CalcButton>
            <CalcButton className="calc-number" onClick={this.displayNum} children = "6"></CalcButton>
            <CalcButton className="calc-operator" onClick={this.sub} children = "-"></CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={this.displayNum} children = "1"></CalcButton>
            <CalcButton className="calc-number" onClick={this.displayNum} children = "2"></CalcButton>
            <CalcButton className="calc-number" onClick={this.displayNum} children = "3"></CalcButton>
            <CalcButton className="calc-operator" onClick={this.add} children = "+">+</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number bigger-btn" onClick={this.addZero} children = "0"></CalcButton>
            <CalcButton className="calc-number" onClick={this.addDot} children = "."></CalcButton>
            <CalcButton className="calc-operator" onClick={this.equal} children = "="></CalcButton>
          </div>
        </div>
      </div>
    );
  }
}

export default CalcApp;
