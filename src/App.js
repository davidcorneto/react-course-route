import { Route, Switch } from 'react-router-dom';

import AllMeetupPage from './pages/AllMeetupsPage';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {
  // localhost:3000/
  // my-page.com/

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetupPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
