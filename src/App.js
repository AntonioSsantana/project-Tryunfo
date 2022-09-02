import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    name: '',
    description: '',
    attr1: '',
    attr2: '',
    attr3: '',
    image: '',
    rarity: '',
    isTrunfo: false,
  };

  onInputChange = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(
      {
        [event.target.name]: value,
      },
    );
    console.log(value);
  };

  render() {
    const { name, description, image,
      attr1, attr2, attr3, rarity, isTrunfo } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.onInputChange }
        />
        <Card
          cardName={ name }
          cardDescription={ description }
          cardImage={ image }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardRare={ rarity }
          cardTrunfo={ isTrunfo }
        />
      </div>
    );
  }
}

export default App;
