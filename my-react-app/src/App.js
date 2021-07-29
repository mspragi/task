import {React, Fragment,Component } from 'react';
import TaskBox from './components/taskbox';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import TaskAdd from './components/taskadd';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <BrowserRouter>
        <Switch>
              <Route exact path='/' component={TaskBox}/>
              <Route exact path='/taskadd' component={TaskAdd}/>
        </Switch>
        </BrowserRouter>
     );
  }
}
 
export default App;