import Articles from "./Pages/Articles";
import TopHeader from "./core/components/TopHeader";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <TopHeader />
      <Articles />
    </div>
  );
}

export default App;
