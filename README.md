# Steps followed

- Creating app
- configure Tailwind css
- configure Routing (install react-router-dom)
- In body.js created router configuration for routing between login/ browser pages
    - providing the config to render on page (router provider)
- building header using netflix images
- building Login page 
    - bg image
    - Sign In form and tailwind css to the form
    - Sign Up form by reusing sign In form (done using state handler toggle button)
    - Validation using regex for inputs given to forms on click of signIn/up button

- Setting firebase connection in our project, connecting to our firebase account and deploying our app using firebase hosting to production
    - commands ( npm install -g firebase-tools,firebase login, firebase init, npm run build to create build, firebase deploy)

- Login page continuation
    - Sign up and sign in imoplementation using firebase auth
- Setting up redux store
    - npm i -D @reduxjs/toolkit
    - npm i react-redux
    - created store
    - created slice and exported reducer and actions of slice
    - imported slice reducer into store
    - we have just configured store when we created it, now we will connect our store to the app
        - done using <provider store={appStore}></provider>
    - we have to now write dispatchers of actions and selectors for subscribing to the store slices.
    - dispatcher is written in body.js inside onAuthStateChanged() this is basically like  a event listener whenever user state is changed the call will be made.
    - update of user profile with display name in body.js after user signs up.
    - signOut button implementation in the header for signed in user.
        - installed reactjs-popup ( for popup below of logged in user icon )
        - using reactjs-popup modal, popup is built ( Hip Hip Hooray !!!! Read the documentation !!!)
    - fixing the bug of routing to browse page even when user is signed in
    - unsubscribing to onAuthStateChanged when component is unmounted( always unsubscribe to listeners on unmounting the component)


- Building Browse page using TMDB Api's
    - Registered for TMDB api
    - fetch api call for nowplaying movies in Browse page
    - configuring moviesSlice and adding it to redux store for the storage of data fetched from api
    - wrote customHook for fetching data call and updating the store so that browse component looks clean.
    - created BigSuggestion and MainBrowseCompoenent cmponents
    - For the bigsuggestion video play and display, added videoTitle.js and videoBackground.js
    - fetched video details using custom hook and updated movieSlice with the data
    - In videoBackground.js using the key returned from videos api of tmdb, "YOUTUBE EMBEDDED VIDEO" is inserted to play trailer of 
        movie suggestion
    - made the video autoplay and mute
    - BigSuggestion.js is styled and completed
    - Now building of MainBrowseComponent.js

- Building Browse page movie lists
    - created movieList, movieCard components
    - created a slice to store tvseries data in store
    - using TMDB api's, created custom hooks for getting top rated and popular series, movies
    - using the above data, lists are populated in MainBrowseContainer component
    - each list will have all the cards of received toprated, popular values
    - NOTE: make sure right data type is declared in slice while intializing the state (object, array etc)
    - using tailwind css components are adjusted to match netflix UI.

- Movie recommendation system using GPT API
    - Button on header so that user is directed to gpt search feature
    - toggle feature for showcase of gpt view when clicked on gpt button using redux store value 
    - 2 components gpt search bar and gpt suggestions
    - built the search bar outlook 

- adding multi language feature to our website
    - dropdown on header to select the language for logged in user using constants.js "langs" array of language objects
    - creating languageConstants.js file to add all the texts for corresponding keys for different languages
    - new slice creation for updation of user preferred language
    - Using useRef to update the store with selected value

# learnings
- when we write parent inside a parent instead of child by mistake, app will be crashed and usually shows white blank page or page unresponsive.
# Planning 
- new User Home page
    - sign In options
    - signup options
- Sign in PAGE
    - sign in / sign up form 
    - redirection to browse page after authenticated
- when user is not logged in, on click of browse page,user is routed to home page (i.e sign in page )
- Browse page (only available to logged in USER)
    - header
    - Big suggestion box
        - trailer in bg
        - suggestion title and description ( with info, play buttons)
    <!-- - suggestions for you section
        - scrollable list of suggestions
    - suggestions based on genre
        - scrollable list of suggestions
    - Top 10 movies list
    - Top 10 series list -->
        - all the above lists are repetative (same component can be used)
            - lists * n
                - each list will have different no of movies each with a movie card
                    - movieCards * n

- Netflix GPT page
    - Search bar that gives suggestions using GPT based on user request