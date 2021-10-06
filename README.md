# Angular WebApp
![MEAN Stack](https://www.newgenapps.com/wp-content/uploads/2020/04/mean-stack.jpeg)
### WebApp designed for holding my Resume and creating some network presence of myself.

#### Technologies used:
- Backend (NodeJS, Express, MongoDB)
- Frontend (Angular.js)


## Setup:
1. Move folder frontend outside Angular-WebApp folder
2. Install @angular/cli if you don't have it yet.
3. Inside frontend folder append your resume.pdf under frontend/src/assets/
4. Inside frontend folder modify frontend/src/app/services/comment.service.ts variable named URL_API to your API location. (ex: http://mywebsite:4000/comments or http://myip:4000/comments
5. Inside frontend run: npm i && ng build
6. Move contents from frontend/dist/frontend to /var/www/html. P.d: Remember changing ownership to www-data with chown, you will need a webserver like apache2 or nginx to serve your SPA.
7. Inside Angular-WebApp folder modify Angular-WebApp/backend/src/config.ts enviroment variables at will paying special attention to CORS variable
8. Inside Angular-WebApp run: npm i && npm run build
9. To run the backend:
    - ssh connection to remote server: nohup node Angular-WebApp/backend/dist/index.js & > nohup.out
    - local server: node Angular-WebApp/backend/dist/index.js & > nohup.out


## Monitoring: 
1. Frontend logs: tail -f /var/log/nginx/access.log   #This may vary depending on installed webserver
2. Backend logs: tail -f nohup.out

## Theme: 
Themes are loaded through bootswatch package, to change frontend theme lookup for a theme @ https://bootswatch.com/ and change its name inside frontend/angular.json
```json
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "frontend": {
      "projectType": "application",
      "schematics": {
        "@schematics/angular:application": {
          "strict": true
        }
      },
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "dist/frontend",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "tsconfig.app.json",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "node_modules/bootswatch/dist/vapor/bootstrap.min.css",     // Here change vapor for your desired theme
              "src/styles.css"
            ],
```

!! Disclaimer !!
You may need to adapt css for some components to get a clean look of the theme.
