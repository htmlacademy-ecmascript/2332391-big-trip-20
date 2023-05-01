import './views/brief-view.js';
import './views/add-button-view.js';
import './views/filter-view.js';
import './views/sort-view.js';
import './views/list-view.js';

/**
 * @type {BriefView}
 */
const briefView = document.querySelector('brief-view');
/**
 * @type {AddButtonView}
 */
const addButtonView = document.querySelector('add-button-view');
/**
 * @type {FilterView}
 */
const filterView = document.querySelector('filter-view');
/**
 * @type {SortView}
 */
const sortView = document.querySelector('sort-view');
/**
 * @type {ListView}
 */
const listView = document.querySelector('list-view');

briefView.render();
addButtonView.render();
filterView.render();
sortView.render();
listView.render();
