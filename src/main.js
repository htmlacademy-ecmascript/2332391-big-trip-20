import './views/brief-view.js';
import './views/add-button-view.js';
import './views/filter-view.js';
import './views/sort-view.js';
import './views/list-view.js';
import './views/placeholder-view.js';

import AppModel from './models/app-model.js';

import BriefPresenter from './presenters/brief-presenter.js';
import AddButtonPresenter from './presenters/add-button-presenter.js';
import FilterPresenter from './presenters/filter-presenter.js';
import SortPresenter from './presenters/sort-presenter.js';
import ListPresenter from './presenters/list-presenter.js';
import PlaceholderPresenter from './presenters/placeholder-presenter.js';

const appModel = new AppModel();

new BriefPresenter(document.querySelector('brief-view'));
new AddButtonPresenter(document.querySelector('add-button-view'));
new FilterPresenter(document.querySelector('filter-view'));
new SortPresenter(document.querySelector('sort-view'));
new ListPresenter(document.querySelector('list-view'), appModel);
new PlaceholderPresenter(document.querySelector('placeholder-view'), appModel);