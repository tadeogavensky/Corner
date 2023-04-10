import React, { useState } from 'react';
import './App.css';
import { LeagueCard } from './LeagueCard';
import { League } from './types/League';

function App() {
  
  const [leagues, setLeagues] = useState([
    {
      name: "Premier League",
      country: { 
        name: "England", 
        flagUrl: "https://www.countryflags.io/gb/flat/64.png" 
      }
    },
    {
      name: "La Liga",
      country: { 
        name: "Spain", 
        flagUrl: "https://www.countryflags.io/es/flat/64.png" 
      }
    },
    {
      name: "Bundesliga",
      country: { 
        name: "Germany", 
        flagUrl: "https://www.countryflags.io/de/flat/64.png" 
      }
    },
    {
      name: "Serie A",
      country: { 
        name: "Italy", 
        flagUrl: "https://www.countryflags.io/it/flat/64.png" 
      }
    },
    {
      name: "Ligue 1",
      country: { 
        name: "France", 
        flagUrl: "https://www.countryflags.io/fr/flat/64.png" 
      }
    }
  ]);

  return (
    <div>
      {leagues.map((league, index) => (
        <LeagueCard key={index} league={league} />
      ))}
    </div>
  );
}

export default App;
