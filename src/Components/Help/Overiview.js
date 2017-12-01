import React from 'react';
import {Link} from 'react-router';
import HelpMenu from './Lib/HelpMenu';
import './Lib/Styles/HelpStyles.css';

const Overiview = () =>{
    return (
        <div>

            <div className="callout medium primary">
                <div className="row column text-center">
                    <h2>Gravy Overview</h2>
                </div>
            </div>

            <div className="row" id="content">

                <div className="medium-10 columns">
                    <div className="blog-post">
                        <h1>Overview</h1>
                        <p>
                            <b>GraVy</b> is a coding pattern, which is used to enhance your
                            React and Redux development. GraVy removes tightly coupled
                            code between pages and Redux by infusing separation of concerns
                            making code more readable and maintainable. <b>Steven Wickers</b>
                            created the GraVy coding pattern and was launch in <b>November 2017</b>.
                        </p>
                        <h2><b>Watch the GraVy training </b>
                            <a href="http://gravytraining.azurewebsites.net" target="_blank">videos</a> here!
                        </h2>

                    </div>

                    <div className="blog-post">
                        <h1>Controller</h1>
                        <p><b>GraVy</b> introduces a new file called <b>Controller</b>.</p>
                        <p>
                            The controller is used as a Data Provider for a page and
                            all controllers contain the same function declarations and
                            parameter listings. The functions are naturally named to
                            represent CRUD operations on a data source, such as Select,
                            Insert, Update, Delete. Controllers are also contain
                            <b><u><i>mapStateToProps</i></u></b> function and are responsible
                            for getting data from the store and passing the data back
                            to the page.
                        </p>
                        <p>There is only one Action file for entire project with naturally named
                            functions such as GET, PUT, POST, DELETE, and PATCH.</p>
                        <p>
                            <img src="http://gravytraining.azurewebsites.net/Images/mrc_overview_complex.png" width="350"/>
                        </p>
                    </div>

                    <div className="blog-post">
                        <h1><b>Models</b></h1>
                        <p>The model contains properties which reflect the data schema
                            being returned from the API.  The properties are naturally named
                            and will be used within the application. The properties contain
                            attributes are listed below:</p>

                        <ul>
                            <li>name: This is the column name within the API data.</li>
                            <li>type: This is the type of the column value dispatched form the API.</li>
                            <li>value: The value of the property which can be set or retrieved.</li>
                            <li>sealed: This is used on properties that can’t be updated. Models are passed to the controller to perform updates on the data. During updates any property with a sealed attribute will be ignored.</li>
                        </ul>

                        <p>
                            All properties are prefixed with "p_" (lowercase p and underscore). This is to better find all properties when using IntelliSense.
                        </p>

                        <p>Models are used with forms and no need to use state for input text boxes
                            because the model property can be used instead.
                        </p>
                        <p>
                            <img src="http://gravytraining.azurewebsites.net/Images/Model.png" />
                        </p>

                    </div>

                    <div className="blog-post">
                        <h1><b>GravyBoat</b></h1>
                        <p>GravyBoat is a powerful component of GraVy.
                            With GravyBoat you have one reducer for all controllers, which
                            allows you to persist data when needed as well as clear persisted data.
                            GravyBoat is used within the controller’s <b><u><i>mapStateToProps</i></u></b> to get data
                            from the Redux store.</p>
                            <p >
                                <img src="http://gravytraining.azurewebsites.net/Images/GravyBoat.png" />
                            </p>

                    </div>

                    <div className="blog-post">
                        <h1>Naturally Named Functions</h1>
                        <p>Naturally named functions are named for the action that is being
                            performed within the context of its source.
                        </p>
                        <p>Example: Movie Action file should have a function named
                            Select instead of getMovieData. This is because the action
                            file’s responsibility is to get data from a data source and
                            Select is an inherit function within most databases
                            engines like Mongo, SQL and Oracle.
                        </p>
                        <p>
                            Another example is if a file that calls APIs should have naturally
                            named functions such as GET, POST, PUT, PATCH and DELETE</p>
                        <p>
                            Developers understand immediately natural named function
                        </p>

                    <h2><b>Watch the GraVy training </b>
                        <a href="http://gravytraining.azurewebsites.net" target="_blank">videos</a> here!
                    </h2>


                </div>

                </div>

            </div>

        </div>
    )
}

export default Overiview;