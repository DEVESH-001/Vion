## Vion Workflow

user sign-in -> Home(authenticated) -> OnBoarding (if not onboarded) -> Dashboard

`when user is onBoarding for the First Time then this code will run /src/modules/auth/actions/index.js`- uses clerk to get user details and upserts user in database

## OnBoarding

- Collect user details
- Create user in database
- Redirect to dashboard


