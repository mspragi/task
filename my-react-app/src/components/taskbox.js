import React, { Fragment,Component } from 'react';
import {Link} from 'react-router-dom';

class TaskBox extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
<div className="col-md-4 my-5 card mx-auto bg-light"   >
              <div className="card-body "    >
              <form action="/" onSubmit={this.handleSubmit}>
              <div className="form-group ">
                   <div className="input-group mb-2">
                    <input className='form-control ' type='text' placeholder="Task" />
                    <Link to={'/taskadd'} className="input-group-text btn btn-light " > +</Link>
                  </div>
                  </div>
                  <div className="form-group  " >
                      <label  htmlFor="username">Taks Description</label>
                      <div className="input-group mb-2">
                      <input type="text" id="username" className="form-control" 
                       name="username" value={this.state.username} onChange={this.handleChange}
                       placeholder= "Follow up" />
                        <button className="input-group-text btn btn-light mb-2 "> +</button>

                       </div>
                  </div>
                  <div className="from-group d-flex my-4">
                      <input type='date' className="form-control "/>
                      <input type="time" className='form-control'/>
                  </div>
                  <div className="form-group ">
                      <label htmlFor="password">Assign User</label>
                      <input type="password" id="password" className="form-control" 
                       name="password" value={this.state.password} onChange={this.handleChange}
                       placeholder= "user"/>
                  </div>
                  
              <div className="form-group text-right my-2 ">
                     <button className=' btn btn-light' >cancel</button>
                      <button className='btn btn-success'>Save</button>
              </div>
              </form>
              </div>
              </div>
            </Fragment>
         );
    }
}
 
export default TaskBox;