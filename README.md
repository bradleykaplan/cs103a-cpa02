# CS103a Express App Demo

This is a starter project which has a simple authentication module 
and provides access to a mongoose database in the cloud.

## Installation
Download the project from github and download nodejs and npm from https://nodejs.org
and cd into the folder

Install the packages with
``` bash
npm install
```
Start the project with
``` bash
node app.js
```

## Movie Link
https://drive.google.com/drive/folders/1i3jUjbTY1AkyvENKshwcJLMgE5QIVJds?usp=sharing

## If the app fails to start
Unsure what causes this issue or if it's universal, but the app may fail to start with an err_dlopen_failed

The solution we found to this was to remove and reinstall the bcrypt node module
