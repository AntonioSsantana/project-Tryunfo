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
    savedCards: [],
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
    const cards = { ...this.state };

    this.setState((prevState) => ({
      savedCards: [...prevState.savedCards, cards],
      name: '',
      description: '',
      image: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      rarity: '',
      isTrunfo: false,
    }));
  };

  handleChangeFalse = () => {
    const { savedCards } = this.state;
    return savedCards.some((element) => element.isTrunfo === true);
  };

  render() {
    const { name, description, image,
      attr1, attr2, attr3, rarity, isTrunfo,
      isSaveButtonDisabled, savedCards } = this.state;

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
          hasTrunfo={ this.handleChangeFalse() }
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
        {
          savedCards.map((element, index) => (<Card
            key={ index }
            cardName={ element.name }
            cardDescription={ element.description }
            cardAttr1={ element.attr1 }
            cardAttr2={ element.attr2 }
            cardAttr3={ element.attr3 }
            cardImage={ element.image }
            cardRare={ element.rarity }
            cardTrunfo={ element.isTrunfo }
          />))
        }
      </div>
    );
  }
}

export default App;
