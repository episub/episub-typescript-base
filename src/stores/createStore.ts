import {History} from 'history';
import {STORE_ROUTER, STORE_TIME} from '../constants';
import {RouterStore, TimeStore} from './index';

export const createStores = (history: History) => {
  const routerStore = new RouterStore(history);
  const timeStore = new TimeStore();

  return {
    [STORE_ROUTER]: routerStore,
    [STORE_TIME]: timeStore,
  };
};
