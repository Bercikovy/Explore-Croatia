import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Posts from "./Components/Posts";
import Map from "./Components/Map";
import MapHeader from "./Components/MapHeader";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Posts />
        <MapHeader />
        <Footer />
      </header>
    </div>
  );
}

export default App;
