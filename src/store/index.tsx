import React from 'react';
import { ChatterStore } from './chatter.store';
import { ViewStore } from './view.store';

/**
 * Store, created with initial state
 */
export class Store {
  public constructor() {
    this.chatter = new ChatterStore();
    this.view = new ViewStore();
  }

  public chatter: ChatterStore;

  public view: ViewStore;
}

/**
 * Context shortcut
 */
export const StoreCtx = React.createContext({} as Store);
