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
   <br>There is only one Action file for entire project</br>
   <p align="center">
     <img src="http://gravytraining.azurewebsites.net/Images/mrc_overview_complex.png" width="350"/>
   </p>
</p>
<p><h1><b>Models</b></h1></p>
<p>Used like a DTO object, the model contains database schema
    with users friendly property names along with attribute types
    such as name, type, value, and sealed. The model attributes
    allows the code to properly maintain the data during
    CRUD operations.
    <br>With Models state is not needed when filling out forms.</br>
    <p align="center">
       <img src="http://gravytraining.azurewebsites.net/Images/Model.png" />
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


