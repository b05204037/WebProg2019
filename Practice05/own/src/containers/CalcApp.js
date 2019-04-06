import React from "react";

import CalcButton from "../components/CalcButton";

// 計算機 App
class CalcApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pushButton: "0",
      beforeNum: null,
      operater: null,
      ifOperatePush: false
    };
  }

  resetState(ac) {
    this.setState({ pushButton: ac, beforeNum: null });
  }

  showNotImplemented(num) {
    const { pushButton, ifOperatePush } = this.state;
    if (ifOperatePush === true) {
      this.setState({
        pushButton: num,
        ifOperatePush: false
      });
    } else {
      if (pushButton === "0") {
        this.setState({
          pushButton: num
        });
      } else {
        this.setState({
          pushButton: pushButton + num
        });
      }
    }
    console.warn("This function is not implemented yet.");
  }

  inputDot() {
    const { pushButton, ifOperatePush } = this.state;
    if (ifOperatePush) {
      this.setState({
        pushButton: ".",
        ifOperatePush: false
      });
    } else {
      if (pushButton.indexOf(".") === -1) {
        this.setState({
          pushButton: pushButton + ".",
          ifOperatePush: false
        });
      }
    }
  }

  addSub() {
    const { pushButton } = this.state;
    if (pushButton.charAt(0) === "-") {
      this.setState({ pushButton: pushButton.substr(1) });
    } else {
      this.setState({ pushButton: "-" + pushButton });
    }
  }

  precent() {
    const { pushButton } = this.state;
    const value = parseFloat(pushButton);
    this.setState({
      pushButton: String(value / 100)
    });
  }

  operate(symbol) {
    const { pushButton, ifOperatePush, beforeNum, operater } = this.state;
    const nextNum = parseFloat(pushButton);
    const operaters = {
      "/": (prevNum, nextNum) => prevNum / nextNum,
      "*": (prevNum, nextNum) => prevNum * nextNum,
      "+": (prevNum, nextNum) => prevNum + nextNum,
      "-": (prevNum, nextNum) => prevNum - nextNum,
      "=": nextNum => nextNum
    };
    if (beforeNum == null) {
      this.setState({
        beforeNum: nextNum
      });
    } else if (operater) {
      const currentValue = beforeNum;
      const answer = operaters[operater](currentValue, nextNum);
      const answerStr = String(answer);
      if (answerStr.length >= 8) {
        this.setState({
          pushButton: answerStr.substr(0, 8),
          beforeNum: answer
        });
      } else {
        this.setState({
          beforeNum: answer,
          pushButton: String(answer)
        });
      }
    }
    this.setState({
      ifOperatePush: true,
      operater: symbol
    });
  }

  render() {
    return (
      <div className="calc-app">
        <div className="calc-container">
          <div className="calc-output">
            <div className="calc-display">{this.state.pushButton}</div>
          </div>
          <div className="calc-row">
            <CalcButton onClick={() => this.resetState("0")}>AC</CalcButton>
            <CalcButton onClick={() => this.addSub()}>+/-</CalcButton>
            <CalcButton onClick={() => this.precent()}>%</CalcButton>
            <CalcButton
              className="calc-operator"
              onClick={() => this.operate("/")}
            >
              ÷
            </CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton
              className="calc-number"
              children="7"
              onClick={() => this.showNotImplemented("7")}
            />
            <CalcButton
              className="calc-number"
              children="8"
              onClick={() => this.showNotImplemented("8")}
            />
            <CalcButton
              className="calc-number"
              children="9"
              onClick={() => this.showNotImplemented("9")}
            />
            <CalcButton
              className="calc-operator"
              children="X"
              onClick={() => this.operate("*")}
            />
          </div>
          <div className="calc-row">
            <CalcButton
              className="calc-number"
              children="4"
              onClick={() => this.showNotImplemented("4")}
            />
            <CalcButton
              className="calc-number"
              children="5"
              onClick={() => this.showNotImplemented("5")}
            />
            <CalcButton
              className="calc-number"
              children="6"
              onClick={() => this.showNotImplemented("6")}
            />
            <CalcButton
              className="calc-operator"
              children="-"
              onClick={() => this.operate("-")}
            />
          </div>
          <div className="calc-row">
            <CalcButton
              className="calc-number"
              children="1"
              onClick={() => this.showNotImplemented("1")}
            />
            <CalcButton
              className="calc-number"
              children="2"
              onClick={() => this.showNotImplemented("2")}
            />
            <CalcButton
              className="calc-number"
              children="3"
              onClick={() => this.showNotImplemented("3")}
            />
            <CalcButton
              className="calc-operator"
              children="+"
              onClick={() => this.operate("+")}
            />
          </div>
          <div className="calc-row">
            <CalcButton
              className="bigger-btn"
              children="0"
              onClick={() => this.showNotImplemented("0")}
            />
            <CalcButton
              className="calc-number"
              children="."
              onClick={() => this.inputDot()}
            />
            <CalcButton
              className="calc-operator"
              children="="
              onClick={() => this.operate("=")}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CalcApp;
