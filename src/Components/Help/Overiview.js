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

                <div className="medium-2 columns" data-sticky-container>
                    <HelpMenu/>
                </div>

                <div className="medium-10 columns">
                    <div className="blog-post">
                        <h1>Overview</h1>
                        <p><b>Gravy</b> is a coding pattern, which is used to enhance
                            your React and Redux development. Gravy removes
                            tightly coupled code between pages and Redux by
                            infusing separation of concerns making code
                            more readable and maintainable. <b>Steven Wickers</b> created
                            the Gravy pattern and was
                            launch in <b>November 2017</b>.</p>

                           <p> To understand Gravy and how it works, let’s first look at how
                               React and Redux is used today.
                        </p>
                    </div>

                    <div className="blog-post">
                        <h1>Current React / Redux Pattern</h1>
                        <div className="large-12" style={{paddingLeft:25}}>

                                <h2><ul><li>Page</li></ul></h2>

                        </div>

                        <div className="medium-6 columns">
                        <p>Suppose you have a page that needs to display movie
                            data in a tabular format. This data will come from a
                            data source such as Mongo or SQL. After developing the
                            Movie Page a Movie Action file is needed to retrieve
                            data via an API call. </p>

                            <h2><ul><li>Action File</li></ul></h2>

                            <p>Usually the developer creating the page must also
                                create the action file and any associated reducer
                                files.
                            </p>
                        </div>
                        <div className="medium-6 columns">
                            <img className="thumbnail" src={require('./Lib/Images/current_redux.png')} />
                        </div>

                        <div className="medium-12 columns" >
                            <p>In this example, the Movie Action file contains an exposed
                                function called <i>GetMovieData</i>, which will retrieve all
                                movie data from an API. Unfortunately this function is
                                not naturally named. Suppose there is another action file
                                called Member and the developer who created this file
                                has a function named <i>QueryMemberData</i>. This leads to
                                non-standard naming conventions or even non-intuitive
                                function names. On top of that, the function names are
                                not <b>naturally</b> named. A even bigger problem is that
                                the developer of the page must know the exact function
                                name and parameters to get the information needed.
                            </p>
                            <p>Naturally named functions are named for the actions
                                that is being performed. For example, a function named
                                <i>Select</i> is a naturally named function within the
                                action file.  This is because the action file’s
                                responsibility is to get data from a data source and
                                <i>Select</i> is an inherit function within most
                                databases like Mongo or SQL. A file that calls APIs
                                would have natural function name such as <i>POST</i>.
                                Developers understand immediately natural named function
                                within the file’s context.

                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Overiview;