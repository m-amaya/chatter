import { Subject } from 'rxjs';

export type View = 'home' | 'browse' | 'alerts' | 'profile';
export type ShowViewFn = (view: View) => void;

export class ViewStore {
  constructor() {
    this.currentView$.next('home');
  }

  public currentView$ = new Subject<View>();

  public showView = (view: View) => this.currentView$.next(view);
}
