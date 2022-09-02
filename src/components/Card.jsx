import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, // hasTrunfo,
    } = this.props;

    return (
      <div>
        <h3 data-testid="name-card">{cardName}</h3>
        <img src={ cardImage } alt={ cardName } width="145px" data-testid="image-card" />
        <section className="description-card">
          <span data-testid="description-card">{cardDescription}</span>
        </section>
        <section className="attr-card">
          <ul data-testid="attr1-card">
            Físico:
            {cardAttr1}
          </ul>
          <ul data-testid="attr2-card">
            Mágico:
            {cardAttr2}
          </ul>
          <ul data-testid="attr3-card">
            Velocidade:
            {cardAttr3}
          </ul>
        </section>
        <h4 data-testid="rare-card">{cardRare}</h4>
        {
          cardTrunfo ? <h5 data-testid="trunfo-card">Super Trunfo</h5> : null
        }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Card;
