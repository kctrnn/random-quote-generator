import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthorPage from './pages/AuthorPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className='random-quote-app'>
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/:author' component={AuthorPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
