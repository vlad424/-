import React from "react";
import { burgerState } from "../../app/reducers/BurgerMenu";

const BurgerMenu: React.FC = () => {
  return (
    <div className="navigation">
      <div className="menu_toggle"></div>
      <ul className="menu_content_t">
        {burgerState.map((el, index, svg):any => {
          return (
            <li className="el" key={index}>
              <img src={svg[index].svg} alt="" />
              <button
                className="el_button"
                onClick={() => alert(`hello id: ${index}`)}
              >
                {el.content}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BurgerMenu;
