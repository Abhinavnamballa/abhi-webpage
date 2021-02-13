
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "./icons/index";
import Header from'./Header';
import Main from './Main'


function App() {
  return (
    <div className="App">
      <div className="background">
      <Router> 
        <Route path="/" ><Header /></Route>
        <Route exact path="/"> <Main /> </Route>
      </Router>
    </div>
    </div>
  );
}

export default App;
