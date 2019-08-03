type View = 'home' | 'browse' | 'alerts' | 'profile';

export class ViewStore {
  constructor() {
    this.currentView = 'home';
  }

  public currentView: View;

  public showView = (view: View) => (this.currentView = view);
}
