import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="name">
          Nome
          <input
            name="name"
            type="text"
            data-testid="name-input"
            id="name"
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            name="description"
            type="text"
            data-testid="description-input"
            id="description"
          />
        </label>
        <label htmlFor="attr1">
          Físico
          <input
            name="attr1"
            type="number"
            data-testid="attr1-input"
            id="attr1"
          />
        </label>
        <label htmlFor="attr2">
          Mágico
          <input
            name="attr2"
            type="number"
            data-testid="attr2-input"
            id="attr2"
          />
        </label>
        <label htmlFor="attr3">
          Velocidade
          <input
            name="attr3"
            type="number"
            data-testid="attr3-input"
            id="attr3"
          />
        </label>
        <label htmlFor="image">
          Imagem
          <input
            name="image"
            type="text"
            data-testid="image-input"
            id="image"
          />
        </label>
        <label htmlFor="raridade">
          <select
            name="rarity"
            data-testid="rare-input"
            id="raridade"
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="Trunfo">
          <input
            name="Trunfo"
            type="checkbox"
            data-testid="trunfo-input"
            id="Trunfo"
          />
        </label>
        <button
          type="button"
          data-testid="save-button"
          id="save"
        >
          Salvar
        </button>
      </div>
    );
  }
}

export default Form;
