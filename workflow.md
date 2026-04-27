## Vion Workflow

user sign-in -> Home(authenticated) -> OnBoarding (if not onboarded) -> Dashboard

`when user is onBoarding for the First Time then this code will run /src/modules/auth/actions/index.js`- uses clerk to get user details and upserts user in database

## OnBoarding

- Collect user details
- Create user in database
- Redirect to dashboard


## Sandbox Workflow

- User creates a new project
- User selects a template
- User submits the project
- Backend creates a sandbox using E2B
- Backend returns the sandbox ID to the frontend
- Frontend displays the sandbox

`also in sandbox-template we can add more templates like expo,react. If user selects expo then backend will create a sandbox using expo template`