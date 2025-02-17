import React from "react";
import { Dropdown, Space } from "antd";
import Leagues from "../Leagues.json";
import LeagueList from "../sides/Listing";
import Country from "../Country.json";
import "../custom-dropdown.css";

const items = [
  {
    label: <LeagueList List={Leagues} />,
    key: "0",
  },
  {
    label: <div style={{ height: "1px", backgroundColor: "#d9d9d9" }} />,
    key: "divider",
  },
  {
    label: <LeagueList List={Country} />,
    key: "1",
  },
];

const App: React.FC = () => (
  <div className="max-w-1024-show">
    <Dropdown
      menu={{ items }}
      trigger={["click"]}
      className="custom-dropdown "
      overlayClassName="custom-dropdown"
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <img className="h-full " src="src\assets\dropDown.svg" alt="" />
        </Space>
      </a>
    </Dropdown>
  </div>
);

export default App;
