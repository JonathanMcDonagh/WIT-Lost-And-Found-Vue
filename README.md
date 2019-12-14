# Web App Assignment 2 - WIT Lost and Found.

Name: Jonathan McDonagh

Student Number: 20074520

## Client UI.
WIT Lost And Found


[homepage]: images/HomePage.png

![][homepage]

>>Home Page

[itemspage]: images/ItemsPage.png

![][itemspage]

>>List of Lost Items

[formpage]: images/FormPage.png

![][formpage]

>>Form for users to add items they found

[mappage]: images/MapPage.png

![][mappage]

>>Interactive map for users to view WIT (Google API)

[aboutpage]: images/AboutPage.png

![][aboutpage]

>>About Page

[loginpage]: images/LoginPage.png

![][loginpage]

>>Login Page connected with firebase

[signuppage]: images/SignUpPage.png

![][signuppage]

>>Sign-up Page connected with firebase

## E2E/Cypress testing.

    Running:  home-page.spec.js                                                               (1 of 4)

    Home page
    √ Shows a header (3077ms)
    Navigation bar
      √ Shows the required links (774ms)
      √ Redirects when links are clicked (1507ms)
    3 passing (5s)
    (Results)

     ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
     │ Tests:        3                                                                                │
     │ Passing:      3                                                                                │
     │ Failing:      0                                                                                │
     │ Pending:      0                                                                                │
     │ Skipped:      0                                                                                │
     │ Screenshots:  0                                                                                │
     │ Video:        true                                                                             │
     │ Duration:     5 seconds                                                                        │
     │ Spec Ran:     home-page.spec.js                                                                │
     └────────────────────────────────────────────────────────────────────────────────────────────────┘


    ────────────────────────────────────────────────────────────────────────────────────────────────────

    Running:  items-spec.js                                                                   (2 of 4)

    Manage Items page
    To like an item operation
      √ increases the no. of likes by 1 (3912ms)
    To edit an item operation
      √ Changes item description (1702ms)
    For a cancelled edit operation
      √ leaves the list unchanged (1628ms)
    For a confirmed delete operation
      √ reduces the no. of items by 1 (1070ms)
    For a cancelled delete operation
      √ leaves the list unchanged (973ms)
    5 passing (9s)

    (Results)

    ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
    │ Tests:        5                                                                                │
    │ Passing:      5                                                                                │
    │ Failing:      0                                                                                │
    │ Pending:      0                                                                                │
    │ Skipped:      0                                                                                │
    │ Screenshots:  0                                                                                │
    │ Video:        true                                                                             │
    │ Duration:     9 seconds                                                                        │
    │ Spec Ran:     items-spec.js                                                                    │
    └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ────────────────────────────────────────────────────────────────────────────────────────────────────

    Running:  login-spec.js                                                                   (3 of 4)

    Lost Item page
    Tests user login
      With valid attributes
        √ allows user to be logged in (3650ms)
    1 passing (5s)

    (Results)

    ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
    │ Tests:        1                                                                                │
    │ Passing:      1                                                                                │
    │ Failing:      0                                                                                │
    │ Pending:      0                                                                                │
    │ Skipped:      0                                                                                │
    │ Screenshots:  0                                                                                │
    │ Video:        true                                                                             │
    │ Duration:     4 seconds                                                                        │
    │ Spec Ran:     login-spec.js                                                                    │
    └────────────────────────────────────────────────────────────────────────────────────────────────┘

    ────────────────────────────────────────────────────────────────────────────────────────────────────

    Running:  lostitem.spec.js                                                                (4 of 4)

    Lost Item page
    Add a item
      With valid attributes
        √ allows item to be submitted (5819ms)
    1 passing (6s)

    (Results)

    ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
    │ Tests:        1                                                                                │
    │ Passing:      1                                                                                │
    │ Failing:      0                                                                                │
    │ Pending:      0                                                                                │
    │ Skipped:      0                                                                                │
    │ Screenshots:  0                                                                                │
    │ Video:        true                                                                             │
    │ Duration:     6 seconds                                                                        │
    │ Spec Ran:     lostitem.spec.js                                                                 │
    └────────────────────────────────────────────────────────────────────────────────────────────────┘

    ====================================================================================================

    (Run Finished)

       Spec                                              Tests  Passing  Failing  Pending  Skipped  
    ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
    │ √  home-page.spec.js                        00:05        3        3        -        -        - │
    ├────────────────────────────────────────────────────────────────────────────────────────────────┤
    │ √  items-spec.js                            00:09        5        5        -        -        - │
    ├────────────────────────────────────────────────────────────────────────────────────────────────┤
    │ √  login-spec.js                            00:04        1        1        -        -        - │
    ├────────────────────────────────────────────────────────────────────────────────────────────────┤
    │ √  lostitem.spec.js                         00:06        1        1        -        -        - │
    └────────────────────────────────────────────────────────────────────────────────────────────────┘
      √  All specs passed!                        00:25       10       10        -        -        -  

## Links.
Client GitLab repo: https://gitlab.com/jonathanmcdonagh/wit-lost-and-found-cypress

Client Github repo: https://github.com/JonathanMcDonagh/WIT-Lost-And-Found-Vue

Web App Hosting: https://wit-lost-and-found.firebaseapp.com/

Web App Server: https://wit-lost-and-found.herokuapp.com/
