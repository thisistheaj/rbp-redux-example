import { createSelector } from 'reselect';

/**
 * Direct selector to the mainPage state domain
 */
const selectMainPageDomain = (state) => state.get('mainPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by MainPage
 */

const makeSelectMainPage = () => createSelector(
  selectMainPageDomain,
  (substate) => substate.get('foo')
);

export default makeSelectMainPage;
export {
  selectMainPageDomain,
};
