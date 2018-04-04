import {action, computed, observable} from 'mobx';

export class TimeStore {
  @observable public activeSeconds: number;
  @observable public lastTick: Date;

  constructor() {
    this.activeSeconds = 0;
    this.lastTick = new Date();
  }

  @action
  public incrementActiveSeconds = (seconds: number): void => {
    this.activeSeconds = this.activeSeconds + seconds;
    this.lastTick = new Date();
  };
}
