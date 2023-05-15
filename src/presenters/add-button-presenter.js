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
    // TODO: create dynamically
    return {
      isDisabled: false
    };
  }
}

export default AddButtonPresenter;
