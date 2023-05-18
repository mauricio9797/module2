#Habitsu

![Logo](./public/images/habitsu.png)

                    Table of contents


1.Introduction

2.Prerequisites

3.Getting Started

*Cloning the Repository

*Installing Dependencies

*Setting Up Environment Variables

*Running the Application

4.Features and Usage

5.Building a Similar App

6.Contributions

7.Licence

8.Authors and Contact


#1.INTRODUCTION

Habitsu is a web application built using MongoDB, Express and Node.js (MEN stack). It provides a platform for users to track and manage their daily habits, helping them establish positive routines and achieve their goals. The application offers features such as habit creation, progress tracking and user account management.


#2.PREREQUISITES

Before cloning or building or cloning the project, ensure that you have the following installed

*Nodejs Download and install Node.js 
*MongoDB Download and install MongoDB


#3.CLONING THE APP

3.1 Git clone this repository in your terminal this link https://github.com/mauricio9797/module2.git

3.2 Install the dependencies

Copy paste the below in your terminal

	npm i express-session hbs mongo express dotenv mongoose cloudinary                   morgan cookie-parser

3.3 Setup/Configure the environment variables

*Create a .env file

*Set up the .env file with your configuration, copy the values below

		PORT=3000
		NODE_ENV=Development
		SESS_SECRET=your session secret

Also do not forget to use the configuration from your cloudinary, check the link below point 1
	https://gist.github.com/IH-WebDev-TA-Remote/414ceec9110bca5625921096d86d7698

3.4 Running the application

Start the application using the command [npm run dev] in your terminal.


#4. FEATURES AND USAGE

##4.1 FEATURES

*User Registration and Login: Users can sign up for an account and login to access their personalized dashboard.

*Secure password Storage: User passwords are securely stored using the bcrypt library, which hashes and salts the passwords to protect them from unauthorized access.

*Session Management: The application utilizes session cookies to manage user sessions, allowing users to stay authenticated while navigating through different pages.

*Middleware Functions:

*isLoggedOut: Middleware function that ensures only non-authenticated users can access specific routes, redirecting logged-in users to their dashboard

*isLoggedIn: Middleware function that verifies if a user is authenticated before access to protected routes.it redirects non-authenticated users to the login page.

*Habit Creation and Management: Users can create and manage their habits, specifying details such as habit name, tasks, time, count, duration, and goals.

*Habit Tracking: users can track their habit progress, update counts, and monitor their achievements over time.

*User Account Management: Users have the ability to edit their profile information, including username, and delete their account if desired.

##4.2 USAGE

*Open your web browser and navigate to http://localhost:3000

*Signup for a new account or login in you already have one

*Create habits and set your goals.

*Track your progress and manage your habits.

*Customize your account settings if required.

*Explore other features of the application.


#5. BUILDING A SIMILAR APP

If you want to build an app similar to Habitsu, you can use the following steps as a guide:

5.1 Set up a new Node.js project and initialize it with npm init:

*Open your terminal or command prompt.

*Navigate to the directory where you want to create your project.

*Run the following commands to initialize a new Node.js project.

Copy code 
		npm init
	
*Follow the prompts to set up your project details.

5.2 Install the required dependencies:

*To build an app similar to Habitsu, you’ll need to install the dependencies that was mentioned in the “Install the dependencies” above.

5.3 Create the necessary file structure and set up the project’s directory layout:

*Index.js or app.js: The main entry point of your application.

*routes folder: Contains the route handlers for different app functionalities.

*models folder: Defines the MongoDB data models for your app.

*views folder: Contains the HTML templates for rendering the UI.

*public folder:  Stores static assets like CSS stylesheets, client-side JavaScript files, and images

Note: Using Ironlauncher can save your time by setting up the basic project structure.

Feel free to explore the Ironlauncher documentations for more details on how to utilize the features and customize the generated project structure.

5.4 Implement the various features and functionalities of your app:

*Setting up Express.js and defining routes:	

-Require the necessary modules in your main entry file (index.js or app.js)    
	
	const express = require("express");

	const router = express.Router();

-Define the routes for different functionalities using  router.get(), router.post(),etc for example. Feel free to refer the auth.routes.js and index.routes .js of this repository.

*Implementing user registration and login functionality:

-Create the necessary MongoDB models in the models folder to represent user data. (refer user.models.js)

-Handle user registration by extracting the required data from the request body, validating it and storing it in the database.

-Handle user login by verifying the provided credentials against the stored data in the database.

*Implementing habit tracking functionality:

-Create the necessary MongoDB models in the models folder to represent habit data. (refer habits.models.js)

-Implement routes for creating, updating, and deleting habits.

-Handle these routes by extracting the required data from the request body, validating it, and performing the necessary database operations.

*Implementing session management using Express-session:

-Install the express-session dependency using npm install express-session.

-Configure Express to use express-session as middleware.

-Utilize session variables to manage user authentication and track session-specific data. 
        
For example, after a successful login , you can set a session variable to indicate that the user is authenticated.

				app.use(session({
                secret: process.env.SESS_SECRET,
                store: MongoStore.create({ mongoUrl: MONGO_URI }),
                resave: true,
                saveUninitialized: false,)
 

-Implement middleware functions to check if a user is logged in or logged out before allowing access to certain routes.

*Utilizing Bcrypt.js for password hashing and verification:

-Install the bcrypt.js dependency using npm install bcryptjs(Ignore if you done it before as mentioned in dependencies required)

-Use Bcrypt.js to hash user passwords before storing them in the database.

*Utilizing Cloudinary to add images and videos to your app.

-Install the cloudinary dependency using npm install (Ignore if you done it before as mentioned in dependencies required)

-Feel free to use refer the below link for cloudinary,

	https://gist.github.com/IH-WebDev-TA-Remote/414ceec9110bca5625921096d86d7698


5.5 Customize the UI and design of your app:

*Modify the HTML templates in the views folder to match your app’s design and layout.

*Add CSS stylesheets in the public folder to customize the appearance of your app.

*Enhance the user experience using client-side JavaScript if needed.


5.6 Test your app locally5 and make any necessary adjustment and improvements:

*Start your app locally by running the main entry file, such as npm run dev

*Use a web browser to access your app at your appropriate port.
	
*Test all the features and functionalities of your app to ensure they work as expected.

*Debug any issues or errors that may arise and make necessary adjustments and improvements to your code.


5.7 Deploy your app to a hosting platform or server of your choice:

*Choose a hosting platform or server to deploy your app. Some popular options include Heroku, AWS, Digital Ocean, Adaptable etc.

*Follow the deployment instructions provided by your chosen platform to deploy your app.

*Configure any necessary environment variables or server settings for your app to run properly in the production environment.


By following these steps, you’ll be able to build an app similar to Habitsu, customized with your own added features. All the best!



#6. CONTRIBUTION

Contributions to the Habitsu project are welcome! If you encounter any issues, have suggestions, or want to contribute new features, feel free to open an issue or submit a pull request on the GitHub repository.
Please ensure that your contributions adhere to the project’s coding standard, follow best practices and include appropriate documentations.


#7. LICENSE

The Habitsu project is an open-source with conditions. Feel free to use or modify for personal use and allows to distribute the code for commercial purposes only with prior notifications and approval from authors.


#8. AUTHORS AND CONTACT

Made with love by Mauricio, Krisztian, Rampriyakarthick .
If you have any questions or need further information about the Habitsu project, you can reach us at habitsu@gmail.com

Thank you for your interest in Habitsu! We hope you find the application helpful in building and maintaining your habits effectively.	

                    





