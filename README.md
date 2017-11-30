# gravy-app

![alt text](http://gravytraining.azurewebsites.net/Images/GravyCodingPattern.png)
![alt text](http://gravytraining.azurewebsites.net/Images/mrc_overview.png)


<p>
<b>GraVy</b> is a coding pattern, which is used to enhance your
React and Redux development. Gravy removes tightly coupled
code between pages and Redux by infusing separation of concerns
making code more readable and maintainable. <b>Steven Wickers</b>
created the Gravy pattern and was launch in <b>November 2017</b>.
</p>
<p><h2><b>What the Training</b>
<a href="http://gravytraining.azurewebsites.net" target="_blank">Videos</a> here!
</h2>
</p>

<p><h1>Controller</h1></p>
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
   <p>There is only one Action file for entire project with naturally named
   functions such as GET, PUT, POST, DELETE, and PATCH.</p>
   <p align="center">
     <img src="http://gravytraining.azurewebsites.net/Images/mrc_overview_complex.png" width="350"/>
   </p>
</p>
<p><h1><b>Models</b></h1></p>
<p>The model contains properties which reflect the data schema
    being returned from the API.  The properties are naturally named
    and will be used within the application. The properties contain
    attributes are listed below:</p>
<p>
    <ul>
        <li>name: This is the column name within the API data.</li>
        <li>type: This is the type of the column value dispatched form the API.</li>
        <li>value: The value of the property which can be set or retrieved.</li>
        <li>sealed: This is used on properties that can’t be updated. Models are passed to the controller to perform updates on the data. During updates any property with a sealed attribute will be ignored.</li>
    </ul>
    </p>
   <p>
    All properties are prefixed with "p_" (lowercase p and underscore). This is to better find all properties when using IntelliSense.
   </p>

<p>Models are used with forms and no need to use state for input text boxes
 because the model property can be used instead.
    <p align="center">
       <img src="http://gravytraining.azurewebsites.net/Images/Model.png" width="350px" />
    </p>
</p>
<p><h1><b>GravyBoat</b></h1></p>
<p>GravyBoat is a powerful component of GraVy.
    With GravyBoat you have one reducer for all controllers, which
    allows you to persist data when needed as well as clear persisted data.
    GravyBoat is used within the controller’s <b><u><i>mapStateToProps</i></u></b> to get data
    from the Redux store.
    <p align="center">
       <img src="http://gravytraining.azurewebsites.net/Images/GravyBoat.png" />
    </p>
</p>
<p><h1>Naturally Named Functions</h1></p>
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
Another example is if a file that call API should have naturally
named functions such as GET, POST, PUT, PATCH and DELETE</p>
<p>
Developers understand immediately natural named function
</p>
</p>
<p><h2><b>What the Training</b>
<a href="http://gravytraining.azurewebsites.net" target="_blank">Videos</a> here!
</h2>
</p>
