import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    name: '',
    description: '',
    attr1: '0',
    attr2: '0',
    attr3: '0',
    image: '',
    rarity: 'normal',
    isTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
  };

  isDisableButton = () => {
    const { name, description, attr1, attr2, attr3,
      image } = this.state;

    const sumAttr = parseInt(attr1, 10) + parseInt(attr2, 10) + parseInt(attr3, 10);
    const maxAttr = 90;
    const minAttr = 0;
    const maxSum = 210;

    if (name === '' || description === '' || image === ''
      || attr1 > maxAttr || attr1 < minAttr
      || attr2 > maxAttr || attr2 < minAttr
      || attr3 > maxAttr || attr3 < minAttr
      || sumAttr > maxSum) {
      this.setState({
        isSaveButtonDisabled: true,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: false,
      });
    }
  };

  onInputChange = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [event.target.name]: value }, () => this.isDisableButton());
  };

  handleSaveCardButton = () => {
    const deckSaved = [];
    deckSaved.push(this.state);
    console.log(deckSaved);
    this.setState({
      name: '',
      description: '',
      image: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      rarity: 'normal',
      isTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    });
  };

  render() {
    const { name, description, image,
      attr1, attr2, attr3, rarity, isTrunfo,
      isSaveButtonDisabled, hasTrunfo } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rarity }
          cardTrunfo={ isTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.handleSaveCardButton }
          onInputChange={ this.onInputChange }
        />
        <Card
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rarity }
          cardTrunfo={ isTrunfo }
        />
      </div>
    );
  }
}

export default App;
