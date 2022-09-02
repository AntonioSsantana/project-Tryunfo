import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <main>
        <label htmlFor="name">
          Nome
          <input
            name="name"
            type="text"
            data-testid="name-input"
          />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea
            name="description"
            cols="30"
            rows="10"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="attr1">
          Físico
          <input
            name="attr1"
            type="number"
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="attr2">
          Mágico
          <input
            type="number"
            name="attr2"
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="attr3">
          Velocidade
          <input
            type="number"
            name="attr3"
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="img">
          Imagem
          <input
            name="img"
            type="image"
            src=""
            alt=""
            data-testid="image-input"
          />
        </label>
        <label htmlFor="rarity">
          Raridade
          <select name="rarity" data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="isTrunfo">
          IsTrunfo?
          <input
            type="checkbox"
            name="isTrunfo"
            data-testid="trunfo-input"
          />
        </label>
        <button type="submit" name="save" data-testid="save-button">Salvar</button>
      </main>
    );
  }
}

export default Form;
