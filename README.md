# Travolta - Online Travel Agency Demo
A [React.js](https://reactjs.org/) web app for finding hotels based on user preferences.

## Try it now!
> Please note that this web app is calling a [web service](https://github.com/giladpomer/travolta-server) which sleeps when it's not frequently called. Calling an endpoint by entering the web app will start the service (this can take around 40 seconds for the first call)

Travolta is available [here](https://travolta.onrender.com/)

## Running Locally
In the project directory, you can run:

`npm start`

It runs the app in development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Features
 + Search hotels based on parameters like destination, check in and check out times.
 + Responsive and looks well on mobile.

## Screenshots
### PC Resolution
![pc_main](https://user-images.githubusercontent.com/26198102/207729647-14b47b41-2a74-4a3b-af4a-89f9268eafeb.png)
![pc_results](https://user-images.githubusercontent.com/26198102/207729661-512f0546-3a93-48bc-9f0b-337d560c02b3.png)

### Mobile Resolution
![mobile_main](https://user-images.githubusercontent.com/26198102/207729669-88c7b0d1-62d0-4066-9819-69577f94df2a.png)
![mobile_results](https://user-images.githubusercontent.com/26198102/207729680-1ab834a4-0e15-4364-a509-694eea40d729.png)

## Continuous Integration (CI)
All [jest](https://jestjs.io/) unit tests will automatically run on every push to this GitHub repository before trying to deploy.

## Continuous Deployment (CD)
The repository is automatically deployed on every push to this GitHub repository using [render](https://render.com/).

## External Packages
+ [react-bootstrap](https://react-bootstrap.github.io/)
+ [axios](https://axios-http.com/)
