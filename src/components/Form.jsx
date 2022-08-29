import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          <input type="text" name="name" data-testid="name-input" />
        </label>
        <textarea cols="30" rows="10" data-testid="description-input" />
        <label htmlFor="attr1">
          <input type="number" name="attr1" data-testid="attr1-input" />
        </label>
        <label htmlFor="attr2">
          <input type="number" name="attr2" data-testid="attr2-input" />
        </label>
        <label htmlFor="attr3">
          <input type="number" name="attr3" data-testid="attr3-input" />
        </label>
        <label htmlFor="input-image">
          <input type="text" name="input-image" data-testid="image-input" />
        </label>
        <select name="" id="">
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <label htmlFor="trunfo">
          <input type="checkbox" name="trunfo" data-testid="trunfo-input" />
        </label>
        <button type="button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
