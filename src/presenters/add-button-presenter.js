import Presenter from './presenter.js';

/**
 * @extends {Presenter<AddButtonView>}
 */
class AddButtonPresenter extends Presenter {
  /**
   * @override
   * @return {AddViewState}
   */
  createViewState() {

    /**
   * @type {UrlParams}
   */
    const urlParams = this.getUrlParams();
    // TODO: create dynamically
    return {
      isDisabled: urlParams.edit === 'draft'
    };
  }

  /**
   * @override
   */
  addEventListeners() {
    this.view.addEventListener('click', this.handleViewClick.bind(this));
  }

  handleViewClick() {
    /**
     * @type {UrlParams}
     */
    const urlParams = {
      edit: 'draft'
    };

    this.setUrlParams(urlParams);
  }
}

export default AddButtonPresenter;
