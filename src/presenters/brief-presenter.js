import Presenter from './presenter.js';

/**
 * @extends {Presenter<BriefView>}
 */
class BriefPresenter extends Presenter {
  /**
   * @override
   * @return {BriefViewState}
   */
  createViewState() {
    //todo: create dynamically
    return {
      places: 'Amsterdam — Chamonix — Geneva',
      dates: 'Mar 18&nbsp;—&nbsp;20',
      cost: '1230',
    };
  }
}

export default BriefPresenter;
