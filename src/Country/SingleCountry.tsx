import { Link, useParams } from "react-router-dom";
import LeagueListing from "../leagues/LeagueListing";
import test from "../jsonfiles.json/test.json";
import { Breadcrumb } from "antd";
import { useEffect, useState } from "react";
import { fetchLeaguesByCountry } from "../leagues/FetchLeagues";

function SingleCountry() {
  const { name } = useParams();
  const [leagues, setLeagues] = useState<
    { flag: string; name: string; country?: string }[]
  >([]);

  useEffect(() => {
    if (name) {
      fetchLeaguesByCountry(name).then(setLeagues);
    }
  }, [name]);

  return (
    <div>
      <div className="h-auto mb-[20px] inline-block w-full items-center rounded-[12px] py-2 px-[20px] bg-white">
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/country">Football</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/country">Country</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item className="text-purple-500">{name}</Breadcrumb.Item>
        </Breadcrumb>

        <div className="flex items-center mb-5 mt-5 gap-4">
          <div className="h-16 w-21 rounded-[12px] p-3 border-1 border-[#23262E1A]">
            <img className="rounded-1" src={test[0].country.flag} alt="Flag" />
          </div>
          <h2 className="text-[#23262E] font-bold text-[14px]">{name}</h2>
        </div>
      </div>

      <div className="h-auto w-full rounded-[12px] py-[20px] bg-white">
        <h2 className="flex font-bold text-[14px] px-[20px] text-[#231F2E] mb-[15px]">
          All Football Leagues and Tournaments of {name}
        </h2>
        <LeagueListing IsPage={true} List={leagues} />
      </div>
    </div>
  );
}

export default SingleCountry;
