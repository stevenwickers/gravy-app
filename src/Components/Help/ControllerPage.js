import React from 'react';
import HelpMenu from './Lib/HelpMenu';

const ControllerPage = () =>{
    return(
        <div>

            <div className="callout medium primary">
                <div className="row column text-center">
                    <h2>MRC Controller</h2>
                </div>
            </div>

            <div className="row" id="content">

                <div className="medium-3 columns" data-sticky-container>
                    <HelpMenu/>
                </div>

                <div className="medium-8 columns">
                    <div className="blog-post">
                        <h3>The Model File</h3>
                        <img className="thumbnail" src={require('./Lib/Images/Model.png')} />
                        <p>The Model contains constant property names that represent the data source schema.
                            Properties are naturally named, for example: <i>p_MovieName</i> is the exposed
                            property name for the application while the data source property is
                            named <i>movie_name</i> which is located within the <b>name</b> attribute.
                            Also, notice all property names are prefixed with <b>p_</b>
                            (lowercase p with underscore). This is because it will be faster to find the
                            property names with <b>IntelliSense. </b></p>
                    </div>

                    <div className="blog-post">
                        <h3>The Model Attributes</h3>
                        <img className="thumbnail" src={require('./Lib/Images/ModelAttributes.png')} />
                        <p>Each property contains attributes, which further describes each property.
                            <ul>
                                <li><b>name</b> - This is the name of the data source column which
                                    is returned from an API call.
                                </li>
                                <li>
                                    <b>value</b> - The value of the property which can be set or get
                                </li>
                                <li>
                                    <b>type</b> - This is the type of the property within application
                                    an not the type from the data source. Proper types are
                                    String, Number, Date…
                                </li>
                                <li>
                                    <b>sealed</b> - This is an OPTIONAL attribute.
                                    Use this attribute on properties that cannot be modified such as
                                    an ID field. When the model is passed to an API for a PUT operation
                                    all properties with the attribute sealed will be ignored.
                                </li>
                            </ul>

                        </p>

                    </div>

                </div>

            </div>



        </div>

    )
}

export default ControllerPage;