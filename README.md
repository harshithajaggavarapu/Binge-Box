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
    - suggestions for you section
        - scrollable list of suggestions
    - suggestions based on genre
        - scrollable list of suggestions
    - Top 10 movies list
    - Top 10 series list

- Netflix GPT page
    - Search bar that gives suggestions using GPT based on user request