import {History} from 'history';
import {STORE_ROUTER} from '../constants';
import {RouterStore} from './RouterStore';

export const createStores = (history: History) => {
  const routerStore = new RouterStore(history);

  return {
    [STORE_ROUTER]: routerStore,
  };
};
