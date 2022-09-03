import "./App.css";
import Arrow from "./Components/Arrow";
import Filter from "./Components/Filter";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Posts from "./Components/Posts";







function App() {

  
  return (
    <div className="App">
      <header className="App-header">
        <Arrow/>
        <Header />
        <Posts />
        <Footer />
        <Filter/>
        
      </header>
    </div>
  );
}

export default App;
