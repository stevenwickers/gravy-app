import React from 'react';
import {Link} from 'react-router';


//Get Help File from Props ->  props.routes[0].childRoutes.keys

const HelpMenu = () =>{
    return(
        <div>
            <div className="sticky" data-sticky data-anchor="content">
                <h4>Help Menu</h4>
                <ul>
                    <li><Link to="WelcomePage">Welcome</Link></li>
                    <li><Link to="Overview">MRC Overview</Link></li>
                    <li><Link to="ModelHelp">Model</Link></li>
                    <li><Link to="ControllerHelp">Controller</Link></li>
                </ul>

            </div>

        </div>
    )

};

export default HelpMenu;