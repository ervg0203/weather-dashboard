import React from "react";
import "../styles/RecentSearches.css";

const RecentSearches = ({ searches, onSearch }) => {
  return (
    <div className="recent-searches">
      <h3>Recent Searches</h3>
      <ul>
        {searches.map((city, index) => (
          <li key={index} onClick={() => onSearch(city)}>
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentSearches;
