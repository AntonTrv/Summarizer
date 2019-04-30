import React from 'react';
import './scss/app.scss';
import Form from './components/Form';
import ResultList from './components/ResultList';
import Header from './components/Header';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkValues = this.checkValues.bind(this);
    this.outputSum = this.outputSum.bind(this);
  }

  /*
    Handles submit: prevents page from reloading,
    takes targets input values,
    formats data by cutting off all 'blank spaces',
    passes them to checkValues,
    restores the form state
  */
  handleSubmit(e) {
    e.preventDefault();
    let firstValue, secondValue;
    const [firstInput, secondInput] = e.target.elements;
    firstValue = firstInput.value.trim().split(' ').join('');
    secondValue = secondInput.value.trim().split(' ').join('');

     this.checkValues(firstValue,secondValue);

    firstInput.value = '' ;
    secondInput.value = '' ;
    firstInput.focus();

    }

  /*
    Checking values passed from handleSubmit():
    decimal or integer?,
    converts from String if possible,
    checks whether they still contain non Number values,
    passes values to outputSum()
  */
  checkValues(firstValue, secondValue) {
    firstValue = firstValue % 1 === 0 ? parseInt(firstValue) : parseFloat(firstValue);
    secondValue = secondValue % 1 === 0 ? parseInt(secondValue) : parseFloat(secondValue);

    if(!isNaN(firstValue + secondValue)){
    this.outputSum(firstValue,secondValue);
    }else {
      alert('Do you need a sum, or you need a NaN?')
      }

  }

  /*
    Recieves data from checkValues(),
    formats data to be readable from 64bit(in case),
    puts achieved data in State of theComponent
    in purpose of further utilisation
    (ex. demonstration of previous results)
  */
  outputSum(firstValue, secondValue) {
    const sum = (firstValue * 10 + secondValue * 10)/10;
    this.setState({ values: [...this.state.values, sum] });
  }

/*Render*/
  render() {
    return (
      <div className="app">
        <Header />
        <Form handleSubmit={this.handleSubmit} />
        <ResultList data={this.state.values} />
      </div>
    );
  }
}

export default App;
