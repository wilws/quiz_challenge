
# Link of the Web
https://quiz-wilws.vercel.app/

*** <br>
Loading time may be slow due to using free tier database service. Thanks for understanding.<br>
*** <br>
<br><br><br>


# Sample Video
https://drive.google.com/file/d/14ZhdXl8R8YnR4iRoWhyCQXnj74y35QWN/view?usp=sharing

<br><br><br>

# Start the application :
<br>

## STEP 1 -- Clone the Application <br>

```
git clone https://github.com/wilws/quiz_challenge.git
```
<br>
<br>

## STEP 2 -- Move to the Project Folder <br>

```
cd quiz_challenge
```
<br>
<br>

## STEP 3 -- Install Packages <br>

```
npm install
```
<br>
<br>

## STEP 4 -- Set SQLite Database <br>

```
npx prisma migrate dev
```
```
## You will be asked to name the migration:
Enter a name for the new migration: …  (input any name you like)
```

<br>
Data will also be seeded in this step :


```

Running seed command `node prisma/seed/run-seed.js` ...
Inserted 24 users records into table "user".
Also created 3 questions records for each user (total 70 questions records were inserted into table "questions").

🌱  The seed command has been executed.
```

<br><br>

## STEP 5 -- Seed Data (do it if seeding not happen in step 4) <br>

Normally prisma will automatically seed data in step 4 above. If it is not the case, you can manually do it by following command

```
npm run seed
```
<br>
<br>

## STEP 6 -- Build & Start the Application  <br>

```
npm run build
```

and then

```
npm run start
```
<br>


<br>
<br>

## STEP 7 -- View the Application  <br>

Move to "localhost:3000" in browser
<br><br>
<br>

# Some Features :
<br>

## (1) - Data Seeding
<br>
Dummy data is ready for use. You can run the following command in terminal :

```diff
npm run seed  
```

Then you will see the following output in terminal:

```diff
Inserted 24 users records into table "user".
Also created 3 questions records for each user (total 72 questions records were inserted into table "questions").
```
<br>
<br>

## (2) - Delete All Data in Database <br>
Run the following command in terminal to delete all the data in database

```diff
npm run clear-data
```

You will see the following output in terminal:

```diff
All questions in database were deleted.
All users in database were deleted.
```
<br>
<br>

## (3) - Lazy Loader <br>
In the index page, when scrolling all to the bottom, auto loading will be triggered and another 12 quizzes will be fetched. When all the data are fetched out, lazy loader will be suspended.
*** may take time to load because of using free tier database service.

<br><br>

## (4) - Quiz <br>
Though the task only requires to display the questions. But I amend it to be a small quiz. You can see the result after finishing the question, have fun!
<br><br>
<br>


## (5) - Static Site Generation (SSG) <br>
In view page, 24 pages are pre-rendered during the build time.



<img src="https://drive.google.com/uc?export=view&id=1q4F2NEKVfHEzYFg5uWC14fqt7GYW7fKF" style="width: 650px; max-width: 100%; height: auto" title="" />



<br><br><br><br>

# Draft Design in Adobe XD

<img src="https://drive.google.com/uc?export=view&id=1sHUpEBPfjYUg3w5WxSvsKII4UvPUQqKQ" style="width: 650px; max-width: 100%; height: auto" title="" />

<br>
I used to make draft before code. The major tool that I use for web design is Adobe XD. Sometime I will use Photoshoop and Adobe AI for image styling. 

<br>




## Overview
The goal of this project is to create a basic quiz application using NextJS, Prisma, TailwindCSS and React Query. The application will have three main features: a home page that displays a list of quizzes, a create quiz page that allows users to input the name and questions for a new quiz, and a view quiz page that displays the name and questions of a selected quiz.

## Steps
The home page will retrieve the list of quizzes from an API using React Query, and allow users to click on a quiz to view it. There will also be a button on the home page that allows users to create a new quiz.

The create quiz page will have a form for users to input the name and three yes or no questions and their answers. When the form is submitted, it will create a new quiz in the database and redirect the user back to the home page.

The view quiz page will render the name and questions of the selected quiz, and will be optimized for fast loading using incremental static regeneration to fetch the data.

The provided template is a blank NextJS template with all required packages installed and set up. The database for the project will be SQLite file for ease of use. The project requires the implementation of best practices with the technologies used and the creation of an appropriate database schema using Prisma. Validation and error handling is not required for this project.

## Submission
Once finished, please either send the files to us in a compressed format (excluding the "node_modules" folder) via email, or create a public repository and share the link with us.
