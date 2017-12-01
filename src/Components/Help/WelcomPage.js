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
                <Link to="Overview" className="button large">Learn More</Link>
            </div>



            <div className="row">
                <div className="medium-6 large-3 columns">
                    <h3>Controller</h3>
                    <p>The controller is used like an Action file but with more
                        functionality. All controllers contain the same function
                        declarations and parameter listings.  The function names are
                        naturally named for CRUD operations on a data source, such as
                        Select, Insert, Update, Delete. Controllers contain their own
                        mapStateToProps and pass data back to the calling page.
                    </p>
                </div>

                <div className="medium-6 large-3 columns">
                    <h3>Model</h3>
                    <p>Used like a DTO object, the model contains
                    database schema with users friendly property names and types.
                    The model is passed between to page and controller to perform
                    data operations. Page state variables are not needed with
                    input on forms because the model can be used instead.</p>
                </div>

                <div className="medium-6 large-3 columns">
                    <h3>GravyBoat</h3>
                    <p>One reducer for all controller. The GravyBoat will also persist state
                        any data need to keep in the Redux store. GravyBoat will also allow
                        you to clear all or portions of persisted state.
                    </p>
                </div>

                <div className="medium-6 large-3 columns">
                    <h3>Separation of Concerns</h3>
                    <p>With GraVy code pattern the page does not need to know specific
                        function names because all controller have the save function names.
                        The page does not need to know the name of the reduced information
                        because the controller will now receive the reduced information within
                        it's own mapStateToProps and pass data it back to the page.</p>
                </div>

            </div>

            {/*<div className="row">
                <div className="medium-6 large-3 columns">
                    <Link to="/Overview" className="button large">Learn More</Link>
                </div>
                <div className="medium-6 large-3 columns">
                    <Link to="/Overview" className="button large">Learn More</Link>
                </div>
                <div className="medium-6 large-3 columns">
                    <a href="/Overview" className="button large">Learn More</a>
                </div>
                <div className="medium-6 large-3 columns">
                    <a href="/Overview" className="button large">Learn More</a>
                </div>

            </div>*/}



            <div className="row column">
                <div className="callout primary text-center">
                    <h3>Videos!</h3>
                    <h2><b>Watch the GraVy training </b>
                        <a href="http://gravytraining.azurewebsites.net" target="_blank">videos</a> here!
                    </h2>
                    <p>Contact Steven Wickers @ <a href="mailto:StevenWickers_Gravy@gmail.com">SteveWickers_Gravy@gmail.com</a></p>
                </div>
            </div>



            <div className="row">
                <div className="large-6 columns">
                    <h4>Current React / Redux</h4>
                    <img className="thumbnail" src={require('./Lib/Images/current_redux.png')} />

                </div>
                <div className="large-6 columns">
                    <h4>GraVy Coding Pattern</h4>
                    <img className="thumbnail" src={require('./Lib/Images/mrc_overview_complex.png')} />

                </div>
            </div>




        </div>
    )
}

export default WelcomePage;