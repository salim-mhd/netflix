import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import { orginals, action, animation, comedy, thriller, romance, documentary, adventure, crime, drama, family, fantasy, history, horror, music, mystery, scienceFiction, war } from "./urls";
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={orginals} title='Netflix Orginals' />
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={animation} title='Animation' isSmall />
      <RowPost url={comedy} title='Comedy' isSmall />
      <RowPost url={thriller} title='Thriller' isSmall />
      <RowPost url={romance} title='Romance' isSmall />
      <RowPost url={documentary} title='Documentary' isSmall />
      <RowPost url={adventure} title='Adventure' isSmall />
      <RowPost url={crime} title='Crime' isSmall />
      <RowPost url={drama} title='Drama' isSmall />
      <RowPost url={family} title='Family' isSmall />
      <RowPost url={fantasy} title='Fantasy' isSmall />
      <RowPost url={history} title='History' isSmall />
      <RowPost url={horror} title='Horror' isSmall />
      <RowPost url={music} title='Music' isSmall />
      <RowPost url={mystery} title='Mystery' isSmall />
      <RowPost url={scienceFiction} title='ScienceFiction' isSmall />
      <RowPost url={war} title='War' isSmall />
    </div>
  );
}

export default App;
