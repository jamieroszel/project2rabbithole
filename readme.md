# Project Name

- **Author:** Jamie Roszel
- **Link to Live Site:** 


## Project Summary



## Technology Used
* Express.js
* Node.js
* HTML
* Bootstrap 5


## Models

Sample Model:
 - name => String
 - age => number


## Route Map

| Method | Endpoint | Resource/View |
|--------|----------|---------------|
|GET| "/sample" | List all Samples (sample/index.ejs) |
|GET| "/sample/:id | Display single Sample (sample/show.ejs)|
|GET| "/sample/new | Render form for New Sample (sample/new.ejs)|
|POST| "/sample" | Uses Form Submission to Create new Sample |
|GET| "/sample/:id/edit" | Render form to edit Sample (sample/edit.ejs)|
|PUT| "/sample/:id" | Uses Form Submission to edit Sample |
|DELETE| "/sample/:id" | Delete a particular Sample |


## Challenges


## Existing Bugs

myexpressboilerplate

BOILERPLATE DIRECTIONS
clone with command npx degit githubusername/githubreponame#branchname projectName

cd into new project folder

run npm install to install dependencies

rename template.env to .env

make sure to replace MONGODB_URL with a working Mongo URL

npm run dev

enjoy!

# Organization
## controllers
* Controller functions get the requested data from the models, create an HTML page displaying the data, and return it to the user to view in the browser.
* functions that separate out the code to route requests from the code that actually processes requests.
# db
## models
* this folder will contain the models that will be used to create documents, based on the schema, using mongoose and mongodb.
## public
the public folder serves static files such as images, CSS files, and JavaScript files.
## routes
* URL-handling code
* A route is a section of Express code that associates an HTTP verb (GET, POST, PUT, DELETE, etc.), a URL path/pattern, and a function that is called to handle that pattern.
* Routes forward the supported requests (and any information encoded in request URLs) to the appropriate controller functions.
## views
* the views folder holds the HTML that will be returned to the client URL request
* this will be an HTML template that also uses ejs to dynamically render pages for the user
## Middleware
* Morgan: HTTP request logger middleware for node.js
* Cors: CORS allows you to configure the web API's security. It has to do with allowing other domains to make requests against your web API.
* method-override: Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn’t support it.