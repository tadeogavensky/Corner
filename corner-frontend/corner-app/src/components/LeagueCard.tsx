import React from "react";

export const LeagueCard = (props) => {
  return (
    <div>
      <div className="bg-gray-400 flex flex-col items-center">
        <p>{props.league.name}</p>
        <div className="flex items-center">
          <p>{props.league.Country.name}</p>
          <img alt="flag" src={props.league.Country.flag}/>
        </div>
      </div>
    </div>
  );
};
