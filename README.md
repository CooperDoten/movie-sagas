
# Movies Saga

## Description

_Duration: weekend_

Directly above this is how long it took you to develop the project. Your project description goes here. What problem did you solve? How did you solve it? 

I had a lot of fun with this project! I was able to incorporate a lot of the skills I've learned over the past several weeks an put it into a weekend sprint.
For this project I had to problem solve several things:
- get a list of movies from a database
- send that information to the client side 
- on user click view single movie and all details
- incorporate a seperate table of 'genres' and combine tables with a 'many-to-many' junction table
- add a movie and update database accordingly
- work on vanilla css skills

To see the fully functional site, please visit: [DEPLOYED VERSION OF APP](www.heroku.com)

## Screen Shot

![Screenshot](./movie_saga_homepage_screenshot.png?raw=true)
![Screenshot](./movie_saga_addMovie_screenshot.png?raw=true)

### Prerequisites


- [Node.js](https://nodejs.org/en/)
- [Reactjs](https://reactjs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Postico](https://eggerapps.at/postico/) 
(or other PostgreSQL client)
- [React-Redux](https://react-redux.js.org/)


## Installation

1. Create a database named `saga_movies_weekend`,
2. The queries in the `movies.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. I recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install` 
(should install all dependencies in package.json)
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal,
and should 

## Usage

1. on app-load you will be on the homepage
2. to get more details on a movie, click on any poster
3. you will be navigated to the details page for that movie
4. click on the home button to go back to home
5. click on the add movie button to add a movie to the database and see it on the homepage
6. once on the add movie page, enter the details prompted by the inputs and hit save to enter or cancel to return to home page


## Built With

- react
- redux
- sagas 
- PostgreSQL
- Postico



## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality and of course all my cohort-mates in the Tarjan Cohort, Swing Swing!

## Support
If you have suggestions or issues, please email me at 
cooper.doten@gmail.com
