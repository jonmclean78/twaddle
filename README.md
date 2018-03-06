# twaddle
A simple app for obtaining a list of a specific twitter user's followers

## Project Brief

>In a framework and language of your choice build an application that will oAuth to Twitter and pull back a list of followers. Store the details of the followers in a database of your choice and display a list of the followers.
>
>Deploy the application to Heroku.
>
>Commit your code to a public github repo and supply this along with the demonstration app.

## Project write up

I started this project with some sketched wireframes for a one page web app, which I could then build with ReactJS.

![initial wireframes](https://raw.githubusercontent.com/rawonjon/twaddle/master/twaddle-wireframes.jpg "initial wireframes")

The wireframe helped me to decide on the components that would be needed for the app to function.  The essential idea was that the user could enter a twitter name in the input **(1)**, which would then update the and then click on the 'Get Followers' button **(2)** which would then trigger to GET calls to the API.  One of these calls would return the User information, including the profile image, full name and twitter bio, which be displayed in the Username area **(3)**.  The list of returned followers would then be displayed on the right hand side of the page **(4)**.

I would also have a header and a footer area to display other important information:

 * In the header, the name of the App and logo (Twaddle was inspired by my daughter's book, [Toddle Waddle](https://www.google.co.uk/search?q=toddle+waddle&oq=toddle+waddle&aqs=chrome..69i57.1893j0j7&sourceid=chrome&ie=UTF-8), which is about a game of follow the leader)
 * In the footer, my contact details / link to github repo

With a basic layout and plan in place, I set about setting up the app with react and bootstrap.

## Problems encountered

Initial problem with using React was keeping track of the state of the input. I wanted the twitter handle that was being searched for to automatically update in the User Information area, with the twitter @ symbol next to it. To do this, I was using `setState` to change the state as text was entered to the input.  However, `setState` is an asynchronous action which meant that the output always lagged one character behind the text input.  

At this point, I probably should have simply altered the plan to update the state on the button submit, as this would have saved me some time.

However, instead I installed redux and refactored my code to make the input stateless, updating initial state through a reducer.

The second and more challenging problem encountered was interacting with the Twitter API. Having obtained the necessary keys and tokens from the twitter dev site, I spent a good day trying to get these to work with both Postman and my app.  Unfortuantely, due to the fact that the Twitter API does not currently support CORS, I got a 400 error in response.  The solution was to write my own API using Laravel and Guzzle which would to act as a 'middleman' between my app and the twitter api.  This would also help to write data to a mysql database, as required by the brief.

## The current version

With the API up and running, the app now works.  You can enter a username, press the submit button and the request is made via the Laravel app to Twitter.  A list of the last 20 names to follow that user is returned and these appear on screen.

## Things still to do

- sort out the styling
- add some more functionality, eg, options to display different information, add profile pictures of followers, a 'show more' button to load the next twenty followers...
- would be good to write the information received from twitter to my own database, in order to prevent hitting the twitter rate limit
- get a working version up online

# Install the current version

First, go and install the Twaddle-API from here: https://github.com/rawonjon/twaddle-api.  

You require git, node, and npm:

`git clone https://github.com/rawonjon/twaddle.git`

`cd twaddle`

`npm install`

`npm start`
	

