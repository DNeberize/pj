import { useReducer } from "react";
import { reducer, ACTIONS, } from "../MenuReducer";
interface State {
  visibleItem: string;
}

const initialState: State = { visibleItem: "" };

function FootBallMenu() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleToggle = (menuName: string) => {
    dispatch({
      type: ACTIONS.TOGGLE_MENU,
      payload: menuName === state.visibleItem ? "" : menuName,
    });
  };

  return (
    <div
      className="  border-[#23262E]/[10%] flex w-[160px] border-solid border-[1px] rounded-[8px] p-0 h-10 place-items-center justify-between gap-2 pr-2"
      onClick={() => handleToggle("State_Menu")}
    >
      <button
       className=" bg-[#F7F8FA] border-[#23262E]/[10%] flex items-center justify-center rounded-[8px] border-[1px] border-solid h-[40px] w-[48px] ">
        <img className="h-5 w-auto" src="src/assets/Football.svg" alt="Ball icon" />
      </button>
      Football
      <img className="h-2 w-auto" src="src/assets/Vector.svg" alt="Dropdown icon" />
      {state.visibleItem === "State_Menu" && (
        <ul className="top-20 absolute w-[10vw] ">
          <li className="bg-sky-500">list object 1</li>
          <li className="bg-sky-500">list object 2</li>
          <li className="bg-sky-500">list object 3</li>
        </ul>
      )}
    </div>
  );
}

export default FootBallMenu;
