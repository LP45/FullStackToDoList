import ToDoTask from './components/ToDoTask';
import AddTask from './components/AddTask';
import UpdateTask from './components/UpdateTask';
import DeleteTask from './components/DeleteTask';
import ViewTask from './components/viewTask';
import button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'

import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';

function App() {
    return (
        <div>
          <Router>
          {/* <Header /> */}
            <div className="container">
              <Switch>
                  <Route path="/" exact component={ToDoTask}></Route>
                  <Route path="/all-tasks" component={ToDoTask}></Route>
                  <Route path="/add-task" component={AddTask}></Route>
                  <Route path="/update-task/:id" component={UpdateTask}></Route> 
                  <Route path="/delete-task/:id" component={DeleteTask}></Route> 
                  <Route path="/view-task/:id" component={ViewTask}></Route>  
                  
              </Switch>
            </div>
            {/*<Footer />*/}
            
          </Router>
        </div>
  );
}

export default App;