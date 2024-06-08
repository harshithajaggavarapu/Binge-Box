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