# CS103a Express App

This is a project which provides a way to search B Corporations using a mongoose database in the cloud.

## Installation
Download the project from github and download nodejs and npm from https://nodejs.org
and cd into the folder

Install the packages with
``` bash
npm install
```
Start the project with
``` bash
export mongodb_URI=[your db URI]
npm start
```
Populate the database by typing into browser
```
localhost:5000/upsertDB
```
Finally, type this into browser to get started
```
localhost:5000
```

Use the textboxes to search for B Corporations by country or keyword, then click on the hyperlinked name of each company for details and its website.
##Screenshots:
![Screen Shot 2022-05-08 at 8 18 15 PM](https://user-images.githubusercontent.com/58448238/167321909-d90e49d7-cd1d-4bf0-bc6b-4adf57cfae15.png)
![Screen Shot 2022-05-08 at 8 18 24 PM](https://user-images.githubusercontent.com/58448238/167321916-4c2a45ea-f4e2-452e-b7c4-cc227e5128ce.png)
![Screen Shot 2022-05-08 at 8 18 32 PM](https://user-images.githubusercontent.com/58448238/167321918-42d023e6-5d56-4e67-9fff-4d8240155fc2.png)


## Demo Link
Log in to Brandeis email to view:
https://drive.google.com/file/d/1yXjpkUP2Ugm677P4LHZwMv-Rn5V0Se1Y/view?usp=sharing

## Pitch Link
Log in to Brandeis email to view:
https://drive.google.com/file/d/1Ub_dsu5wC2tcCEvLbEqgjFPR7IJq9HRu/view?usp=sharing

## If the app fails to start
Unsure what causes this issue or if it's universal, but the app may fail to start with an err_dlopen_failed

The solution we found to this was to remove and reinstall the bcrypt node module
