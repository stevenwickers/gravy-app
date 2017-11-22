import React, {PropTypes} from 'react';
import {Link} from 'react-router';

class App extends React.Component{
  render(){
    return(
      <div className="container-fluid">

        <div className="large-12 cell">
          <div className="secondary callout">

              <ul className="menu">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="Movies">Example</Link></li>
              </ul>

          </div>
        </div>

          {this.props.children}

      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
