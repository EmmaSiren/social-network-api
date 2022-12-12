# <social-network-api>
# **Social Network API**

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Insomnia](https://img.shields.io/badge/Insomnia-5849be?style=for-the-badge&logo=Insomnia&logoColor=white)


## **Description**

This application uses MongoDB to create an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. I first started by creating the models following a MongoDB database and the Mongoose ODM. Once those were finished I began working on controllers for each functionality of creating, reading, updating, and deleting users, friends, thoughts, and reactions. I then wrote the API routes for each CRUD operation on their respective Users or Thoughts routes. Finally, I went back to the models and used JavaScript’s Date object to format the timestamps for user’s thought posts. 

As this was an application with no starter code it was a very exciting opportunity to figure out every step of a larger application. It took correct understanding and knowledge of routing and the Mongoose ODM to ensure every piece of the API functioned as intended. Navigating Insomnia was crucial to testing out the API routes and ensuring the correct JSONified information was being fed through each CRUD operation. 

## **Installation & Usage**
Initiate Node by running ‘npm i’ in the GitBash terminal. Once all packages have been installed run ‘npm run start’ command to start up the server. Now go to Insomnia and test out the various GET, POST, PUT, and DELETE routes for Users and Thoughts including Friends and Reactions. See below for walkthrough video.

[Walkthrough Video](https://drive.google.com/file/d/1Xueh6g-EO57A4PajEyYSZ-EisOsVMuQm/view?usp=sharing)