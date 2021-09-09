import './App.css';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Post from './Components/Post/Post';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Detail from './Components/Detail/Detail';
import Comment from './Components/Comment/Comment';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div>
      < Header />
      <main className="container mt-5 pt-3 " style={{ textAlign: 'justify' }}>
        <Router>
          <Switch>
            <Route path="/post">
              <Post />
            </Route>
            <Route path="/details/id/:id">
              <Detail />
            </Route>
            <Route path="/comments/:userId">
              <Comment />
            </Route>
            <Route path="/">
              <Post />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </main>
    </div >
  );
}

export default App;
