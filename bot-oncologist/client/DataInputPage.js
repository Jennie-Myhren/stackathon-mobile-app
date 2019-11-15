import React, { Component } from 'react';
import TestPage from './DataInputForm';

class DataInputPage extends Component {
  submit = values => {
    // print the form values to the console
    console.log(values);
  };
  render() {
    return <TestPage />;
  }
}

export default DataInputPage;
