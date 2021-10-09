# Fitness-Tracker
  ## ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

  ## Description
  A web application that allows a user to continue, create and track daily workouts. In order for users to reach their fitness goals quicker, a user can track and log multiple exercises a day by selecting a type of workout, while listing the details of the workout like name, distance, weight, sets, reps, or duration. View the logged exercises in a neat graph and track daily progress easily.

  The application is hosted on a server and stores data on a MongoDB database. Makes use of a few node modules to make the development easier, including: Express, Mongoose, and Morgan. This app makes use of:
  * Node.js and Express.js to create RESTful APIs
  * MongoDB (noSQL) and Mongoose OMT for the database
  * MongoDB aggregate function to dynamtically find the sum of select fields and add feilds
  * GET, POST, and PUT routes to communiciate with the database 

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Questions](#questions)
  
  ## Installation
  To install Node.js, follow the documentation [Node.js](https://coding-boot-camp.github.io/full-stack/nodejs/how-to-install-nodejs)

  To install MongoDB, follow the documentation [MongoDB](https://docs.mongodb.com/manual/installation/)

  To install necessary dependencies, run the following command: 
  ```
  npm i
  ```
  
  ## Usage
  Access the webpage by going to the deployed site: [Fitness-Tracker](https://intense-river-35630.herokuapp.com/?id=615fad95b766510016e33241). 

  If you want to run this on a local server, set the path to the Fitness-Tracker folder in the terminal. Run `npm seed` to source the seeds folder, if you want preset data.  Then run the server.js file by typing `npm start`. Go to http://localhost:3000 to acesss the site.
![fitnesslast](https://user-images.githubusercontent.com/83731627/136641337-ad28b7a0-87a8-43f5-a4e1-2f0721837716.png)
![fitnessdashboard](https://user-images.githubusercontent.com/83731627/136641342-91337ff6-8c30-46ab-bc6f-6627b7a60e9d.png)
![fitnesscreate](https://user-images.githubusercontent.com/83731627/136641348-5be5f088-6fdf-474b-b536-d1f20d75d1a4.png)

  ## License  
  This project is licensed under the terms of the [MIT License](https://opensource.org/licenses/MIT).

  ## Contributing
   I am the sole author of this repo and I am not currently looking for contributors.

  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at Gaitherdb@gmail.com. You can find more of my work at [Gaitherdb](https://github.com/Gaitherdb).
