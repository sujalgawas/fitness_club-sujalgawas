import './App.css';
import Header from "./component/header/Header";
import Programs from './component/programs/Programs';

function App() {
  return (
    <div className="App">
          <section class="container">
            <Header/>
            <Programs/>
          </section>
    </div>
  );
}

export default App;
