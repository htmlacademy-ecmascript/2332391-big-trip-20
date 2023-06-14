import View from './view.js';
import {html} from '../utils.js';

/**
 * @extends {View<AddButtonViewState>}
 */
class AddButtonView extends View {

  /**
   * @override
   */
  createHtml() {
    return html`
      <button ${this.state.isDisabled ? 'disabled' : ''} class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>
    `;
  }
}

customElements.define('add-button-view', AddButtonView);

export default AddButtonView;

