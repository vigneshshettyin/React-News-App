# React News App

This website is built using [React](https://reactjs.org/), A JavaScript library for building user interfaces.

### Installation

```
$ yarn install
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Create Docker Image & Run

```
$ docker build -t docker_id/app_name:latest .
```

```
$ docker run -p 80:80 docker_id/app_name
```
