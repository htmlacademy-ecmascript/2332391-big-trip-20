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

  /**
   * @param {Event & {target: {value: FilterType}}} event
   */
  handleViewClick(event) {
    /**
     * @type {UrlParams}
     */
    const urlParams = {
      edit: 'draft'
    };
    console.log(111);
    this.setUrlParams(urlParams);
  }
}

export default AddButtonPresenter;
