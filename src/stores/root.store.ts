import {RouterState, RouterStore} from 'mobx-state-router';
import {routes} from './routes';

const notFound = new RouterState('notFound');

export class RootStore {
  public routerStore = new RouterStore(this, routes, notFound);
}
