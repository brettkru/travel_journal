import Header from "./components/header";
import Entry from "./components/maincontent";
import "./App.css";
import travelLocations from "./data.js"

const travelElements = travelLocations.map(travelLocation => {
  return <Entry 
    key={travelLocation.id}
    img={travelLocation.img}
    country={travelLocation.country}
    googleMapsLink = {travelLocation.googleMapsLink}
    title={travelLocation.title}
    dates={travelLocation.dates}
    text = {travelLocation.text}
  />
})


function App() {
  return (
    <>
      <Header />
      {travelElements}
    </>
  );
}

export default App;
