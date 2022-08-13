// library/ package imports
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// file component imports
import PAGE_Home from './home';
import PAGE_Collection from './components/collection';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={ `/` } exact component={ PAGE_Home } />
        <Route path={ `/collection/:slug` } exact component={ PAGE_Collection } />
        {/* <Route path={ `/collection/:slug` } exact render={ (props) => { return <PAGE_Collection collection={ props } /> } } /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
