import Header from '../@Core/Header/Header';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import VacanciesComponent from '../VacanciesComponent/VacanciesComponent';

function App() {
  return (
    <Router>
     <Header></Header>
          <Route exact path="/" />
          <Route exact path="/vacancies" component={VacanciesComponent}/>
    </Router>   
  );
}

export default App;
