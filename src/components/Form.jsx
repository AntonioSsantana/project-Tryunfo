import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          <input type="text" id="name" data-testid="name-input" />
        </label>
        <br />
        <textarea cols="30" rows="10" data-testid="description-input" />
        <br />
        <label htmlFor="attr1">
          <input type="number" id="attr1" data-testid="attr1-input" />
        </label>
        <br />
        <label htmlFor="attr2">
          <input type="number" id="attr2" data-testid="attr2-input" />
        </label>
        <br />
        <label htmlFor="attr3">
          <input type="number" id="attr3" data-testid="attr3-input" />
        </label>
        <br />
        <label htmlFor="input-image">
          <input type="text" id="input-image" data-testid="image-input" />
        </label>
        <br />
        <select name="" id="">
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <br />
        <label htmlFor="trunfo-input">
          <input type="checkbox" id="trunfo-input" data-testid="trunfo-input" />
        </label>
        <br />
        <button type="button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
