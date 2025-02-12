
export enum ACTIONS {
  TOGGLE_MENU = "toggle_menu",
}

interface State {
  visibleItem: string;
}

type Action = {
  type: ACTIONS;
  payload: string;
};


export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ACTIONS.TOGGLE_MENU:
      return {
        visibleItem: state.visibleItem === action.payload ? "" : action.payload,
      };
    default:
      return state;
  }
}
