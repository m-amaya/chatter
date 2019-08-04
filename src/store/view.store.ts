export type View = 'home' | 'browse' | 'alerts' | 'profile';
export type ShowViewFn = (view: View) => View;

export class ViewStore {
  constructor() {
    this.currentView = 'home';
  }

  public currentView: View;

  public showView = (view: View) => (this.currentView = view);
}
