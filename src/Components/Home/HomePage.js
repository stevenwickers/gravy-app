import React, {PropTypes} from 'react';
import WelcomePage from '../Help/Lib/Pages/WelcomPage';


class HomePage extends React.Component {
  constructor(props, context){
    super(props, context);


  }


  render() {


    return (

      <div>

          <WelcomePage/>

      </div>

    );
  }
}

export default HomePage;

