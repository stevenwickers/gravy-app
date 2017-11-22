import React from 'react';
import {Link} from 'react-router';

const WelcomePage = () =>{
    return (
        <div>

            <div className="row columns">
                <div className="large-12 columns">
                    <img className="" src={require('./Lib/Images/mrc_overview.png')} />
                </div>
            </div>

            <div className="row column text-center">
                <h1><img className="" src={require('./Lib/Images/Gravy_CoddingPattern.png')} /></h1>
                <p className="lead">Gravy pattern will enhance you React and Redux experience.</p>
                <Link to="ModelHelp" className="button large">Learn More</Link>
            </div>



            <div className="row">
                <div className="medium-6 large-3 columns">
                    <h3>Model</h3>
                    <p>Used like a DTO object, the model contains
                    database schema with users friendly property names and types.
                    The model is passed between to page and controller to perform
                    data operations.</p>
                    </div>
                <div className="medium-6 large-3 columns">
                    <h3>Controller</h3>
                    <p>The controller is used like an Action file but with more
                        functionality. All controllers contain the same function
                        declarations which most functions accept a model
                        as a parameter.  The function names are natural function
                        name for CRUD operations on a data source, such as
                        Select, Insert, Update, Delete.
                    </p>
                    </div>
                <div className="medium-6 large-3 columns">
                    <h3>Separation of Concerns</h3>
                    <p>With MRC code pattern the page does not need to know specific
                        function names because all controller have the save function names.
                        The page does not need to know the name of the reduced information
                        because the controller will now receive the reduced information
                        and pass it back to the page.</p>
                </div>
                <div className="medium-6 large-3 columns">
                    <h3>GravyBoat</h3>
                    <p>One reducer for all controller. The GravyBoat will also persist switch
                        any data need to keep in the Redux store.
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="medium-6 large-3 columns">
                    <Link to="ModelHelp" className="button large">Learn More</Link>
                </div>
                <div className="medium-6 large-3 columns">
                    <Link to="ControllerHelp" className="button large">Learn More</Link>
                </div>
                <div className="medium-6 large-3 columns">
                    <a href="#" className="button large">Learn More</a>
                </div>
                <div className="medium-6 large-3 columns">
                    <a href="#" className="button large">Learn More</a>
                </div>

            </div>



            <div className="row column">
                <div className="callout primary text-center">
                    <h3>Get Source Code!</h3>
                    <p>Down load Gravy Source code form htt;://get.....</p>
                    <p>Contact Steven Wickers @ <a href="mailto:StevenWickers_Gravy@gmail.com">SteveWickers_Gravy@gmail.com</a></p>
                </div>
            </div>



            <div className="row">
                <div className="large-6 columns">
                    <h4>Current React / Redux</h4>
                    <img className="thumbnail" src={require('./Lib/Images/current_redux.png')} />
                        <p>className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie augue sit amet leo consequat posuere. Vestibulum ante ipsum primis in.</p>
                </div>
                <div className="large-6 columns">
                    <h4>MRC Coding Pattern</h4>
                    <img className="thumbnail" src={require('./Lib/Images/mrc_overview_complex.png')} />
                        <p>className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie augue sit amet leo consequat posuere. Vestibulum ante ipsum primis in.</p>
                </div>
            </div>




        </div>
    )
}

export default WelcomePage;