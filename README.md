![GitHub branch checks state](https://img.shields.io/github/checks-status/nezlobnaya/image-repo/main)[![Build Status](https://app.travis-ci.com/nezlobnaya/image-repo.svg?branch=main)](https://app.travis-ci.com/nezlobnaya/image-repo)[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)![GitHub](https://img.shields.io/github/license/nezlobnaya/image-repo)

#  API Documentation for image-repo

#### Backend deployed to [Heroku](https://image-repo-be.herokuapp.com/) <br>

## Getting Started

To get the server running locally:

1. `git clone <REPO>`
2. `npm install`
3. Create an account on MongoDB and/or create new Cluster and add connection string to your .env application file and connect to your server

## Available Scripts

- `npm start` to start the local server
- `npm test` to run test suite once
- `npm run server` to auto restart the local server in the development mode


## Endpoints

#### Image Routes

| Method | Endpoint                     | Access Control   | Description                                 |
| ------ | -----------------------------| -----------------| --------------------------------------------|
| POST   | `/api/images`                | all users        | Adds an image to the database               |
| GET    | `/api/images`                | all users        | Returns an array of images                  |
| GET    | `/api/images/:id`            | all users        | Returns a specific image                    |
| PUT    | `/api/images/:id`            | all users        | Modifies an existing image                  |
| DELETE | `/api/images/:id`            | all users        | Deletes an existing image                   |
| DELETE | `/api/images`                | all users        | Deletes all images in the database.         |
| GET    | `/api/images/tag/:id`        | all users        | Returns images with a specific tag.         |
| GET    | `/api/images/title/:id`      | all users        | Returns images with a specific title        |
| GET    | `/api/images/description/:id`| all users        | Returns images with a specific description  |
| GET    | `/api/images/date/:id`       | all users        | Returns images with a specific date         |
| PUT    | `/api/images/like/:id`       | all users        | Increases like count of a specific image    |
| PUT    | `/api/images/dislike/:id`    | all users        | Decreases like count of a specific image    |
| PUT    | `/api/images/tag/:id`        | all users        | Adds a tag to a specific image              |
| PUT    | `/api/images/untag/:id`      | all users        | Removes a tag from a specific image         |
| GET    | `/api/images/tags/:id`       | all users        | Returns an array of tags of a specific image|
| GET    | `/api/images/likes/:id`      | all users        | Returns like count of a specific image      |

#### User Routes

| Method | Endpoint               | Access Control     | Description                                         |
| ------ | ---------------------  | ------------------ | ----------------------------------------------------|
| POST   | `/api/users`           | all users          | Adds a user to the database                         |
| GET    | `/api/users/:id`       | all users          | Returns an array of users                           |
| GET    | `/api/users/:id`       | all users          | Returns a specific user                             |
| GET    | `/api/users/:id/images`| all users          | Returns an array of images posted by a specific user|
| PUT    | `/api/users/:id`       | all users          | Modifies an existing user                           |
| DELETE | `/api/users/:id`       | all users          | Deletes an existing user                            |




