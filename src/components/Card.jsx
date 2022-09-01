import React from "react";

class Card extends React.Component {

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo } = this.props;

    const isTrunfo = () => {
     return cardTrunfo === true ? <span data-testid="trunfo-card">Super Trunfo</span> : null
    };

    return (
      <div>
        <img src={cardImage} alt={cardName} data-testid="image-card" />
        <span data-testid="name-card">{cardName}</span>
        <span data-testid="description-card">{cardDescription}</span>
        <span data-testid="attr1-card">{cardAttr1}</span>
        <span data-testid="attr2-card">{cardAttr2}</span>
        <span data-testid="attr3-card">{cardAttr3}</span>
        <span data-testid="rare-card">{cardRare}</span>
        {
          isTrunfo()
        }
      </div>
    );
  }
}

export default Card;