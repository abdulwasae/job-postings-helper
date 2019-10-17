# Job Postings Helper - Web

### Project setup
##### 1. Install Packages
```
npm install
```
##### 2. Add Firebase
See [Guide](https://firebase.google.com/docs/web/setup). See steps relevant to a Node.js app.
Obtain the config object from [Step 3](https://firebase.google.com/docs/web/setup#add-sdks-initialize) in this guide and place it in `/src/Firebase.js`

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lint and fix files
```
npm run lint
```

### Customize Vue.js configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Initialize Firebase Hosting
See [Guide](https://firebase.google.com/docs/hosting/quickstart/). Use `dist` when asked to specify the name your 'public root directory'.
This should result in two new files in the root of this folder:
##### 1. `firebase.json`, that may look something like:
```
{
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ]
  }
}
```
##### 2. `.firebaserc`, that may look something like:

```
{
  "projects": {
    "default": "geniteam-careers"
  }
}

```
### Deploy to Firebase Hosting
```
npm run build
```
```
firebase deploy
```
