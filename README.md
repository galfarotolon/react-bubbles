# Sprint Challenge: Advanced Web Applications - React Bubbles

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored Advanced Web Applications, focusing on testing, client-side authentication, hosting web apps, and PUT and DELETE requests.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. You must follow the twenty-minute rule before you seek support from your PM. You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your project manager).

## Description

In this project you will create a login page and request a token from the server that you'll use to send all other requests to the server. You will then be able to fetch the color data array, update data, and delete data, and watch the fun happen!

**Note** You can use the sites like the following to get color hex codes:

- [Color-Hex](https://www.color-hex.com/)

## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

 1- Explain what a token is used for.
 
Web applications usually require the client to be registered or logged in to be able to access most contents of the site. The server running these services can issue a JWT (JSON Web Token) as the authentication token, in exchange for correct login credentials. 
Modern web services dealing with JSON data often use JWTs. These tokens, issued by the server, are strings of encrypted text, which can be stored on the client-side using local storage or session storage. The server can readily tell the client that it issued the token. It can also read the token and make decisions for data access based on the client’s permission.

Once a token has been issued, this can allow users to access previously private routes that were blocked and could only be accessed with an authentication token.
 
2-  What steps can you take in your web apps to keep your data secure?

Using axiosWithAuth can be useful to make data secure. This call only triggers once the authentication has been passed (feeding the token payload to header). Using Private Route Path in protected routes is also a good way to keep data secure, as these data points/components can only be accessed after an authorization check has been passed. 
 
 3- Describe how web servers work.

The internet is essentially a network of interconnected computers. The web is just one way to share data over the internet. It consists of a body of information stored on web servers, ready to be shared across the world.
There are physical computer devices whose sole purpose is to store code from different places and share it across  the world at all times. This is what is known as a web server. When people store their code in these servers, the term is known as ‘hosting’. 
 
 
The way users all over the world are able to access these ‘hosted’ sites and apps is via a domain, which is specified using an URL(uniform resource locator). These urls point straight  at any information the user is accessing at any given point. 
 
 4- Which HTTP methods can be mapped to the CRUD acronym that we use when 
    interfacing with APIs/Servers.
 
C- Create → This is the process of adding information into API/Server. It can either be done by the developer or the user via inputs. 
R- Read → This is the process of displaying the data into the GUI so the user can visually access it. 
U- Update → This comes into place when the user wants to edit a piece of data that has been already created and is displayed by the App. Say a user wants to edit the date of a given post, or the content of a blog, this operation accesses the data and allows the user to edit the content instead of having to create a new set of data. 
D - Delete → The delete method is, as the name states, a way to get rid of data that was previously created, read or updated. This simply removes the data from the server/API. 



## Project Set Up

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add PM as collaborator on Github.
- [ ] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [ ] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [ ] Implement the project on this Branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.
- [ ] **RUN** `npm install` at the root to retrieve all the dependencies for the node server. You will not need to create any react apps here nor will you need to install any other dependencies. You should have all you need in this repo.
- [ ] **LOOK** at all the files you've been given for this project. One important file to note is `server.js`. This file contains an **API** that you are going to be interfacing with. Below is documentation on how to interact with the **API**.
- [ ] **RUN** `npm start` to get your API up and running on `http://localhost:5000`. This is the **URL** you're going to need to use within your React app in order to make AJAX requests for data.
- [ ] **LOOK** at your `client` directory and notice it's just a plain ol' React App that we've built using `create-react-app`.
- [ ] **cd** into `client` and run `npm install` to retrieve the client side dependencies.
- [ ] **RUN** `npm start` to fire up your React application.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your Project Manager as a Reviewer on the Pull-request
- [ ] PM then will count the HW as done by  merging the branch back into master.

## Minimum Viable Product

The MVP of this project will be broken up between 2 stages. Follow each step.

### Stage 1 - Authentication

Build a login form to authenticate your users.

- [ ] Construct an AXIOS request to retrieve a token from the server. You'll use this token to interact with the API
- [ ] Save the token to localStorage
- [ ] Build a `axiosWithAuth` module to create an instance of axios with the authentication header
- [ ] Build a `PrivateRoute` component and use it to protect a route that renders the `BubblesPage` component

### Stage 2 - Consuming the API

- [ ] When `BubblePages` renders, make a GET request to fetch the color data for your bubbles.
- [ ] In `ColorList.js`, complete the `saveEdit` and `deleteColor` functions to make AJAX requests to the API to edit/delete data
- [ ] Watch and enjoy as your app responds to updates in the data. Check out `Bubbles.js` to see how this is built.

### API Documentation

  * **[POST]** * to `/api/login`: returns a token to be added to the header of all other requests. Pass in the following credentials as the `body` of the request: `{ username: 'Lambda School', password: 'i<3Lambd4' }`
  * **[GET]** to `/api/colors`: returns the list of colors and their hex codes.
  * **[POST]** to `/api/colors`: creates a new color object. Pass the color as the `body` of the request (the second argument passed to `axios.post`).
  * **[PUT]** to `/api/colors/:id`: updates the color using the `id` passed as part of the URL. Send the color object with the updated information as the `body` of the request (the second argument passed to `axios.put`).
  * **[DELETE]** to `/api/colors/123`: removes the color using the `id` passed as part of the URL (123 in example).

## STRETCH PROBLEMS

**HTTP/Axios Stretch Problems**

- [ ] Build a form at the bottom of `ColorList.js` to add new colors to the colors data

**Data Visualization**

- [ ] Look at [Potion JS](https://potion.js.org/). This is the library used to display the color data
- [ ] Play around with the data visualization happening in `Bubbles.js`. Have fun with this! Try different components from the library, or see if you can add props to change the UI a bit.
