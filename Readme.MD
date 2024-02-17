# Debugging Challenge README

## INSTRUCTIONS TO FOLLOW
1) Avoid making unnecessary alterations to any part of the website.
2) Feel free to seek clarification from the coordinator who will be available during the challenge.
3) You may utilize any offline code editor of your preference.

---

This challenge aims to evaluate your fundamental understanding of web development. The tasks provided will assess the following areas:

1) Basic HTML and CSS.
2) JavaScript.
3) API integration.

### Task 1:
Please replicate the HTML components as shown in 'image1.png'. After completion, click the button located at the bottom of the website to proceed to the next task. Make necessary changes in `index.html` and `index.css` to achieve the desired results.

### Task 2:
Debug the `login.html` file, which is designed to perform simple form validation on user input. Click 'login' to verify if the task is functioning correctly; otherwise, click the 'next task' button to proceed once debugging is finished.

### Task 3:
Your assignment is to debug the 'weather.html' file and 'server.js' file to restore functionality to the Weather API.

### Task 4:
Please document the modifications made to the website in the `report.txt` file. You may choose any format that suits your preference.

---

### FOLDER STRUCTURE FOR REFERENCE
```
Question_Debug_Challenge
    |
    └── source
    |     |
    |     └── Templates
    |     |     |
    |     |     └── index.html
    |     |     └── login.html
    |     |     └── weather.html
    |     └── styles
    |           |
    |           └── index.css
    |           └── login.css
    |           └── weather.css
    |
    └── server.js
    └── package.json
    └── package-lock.json
    └── auth.js
    └── report.txt
    └── requirements.txt
```

* All the HTML files will be available in the `Templates` folder (`source\Templates`).
* All the CSS files will be available in the `styles` folder (`source\styles`).
* `server.js` will act as a local server on port 3000 (you are allowed to change the port in case port 3000 is occupied).
* `auth.js` will have the code required to perform validation on user input.
* `package.json` will have the dependencies used in this challenge.