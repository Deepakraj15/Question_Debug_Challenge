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
Replicate the HTML components as depicted in 'image1.png'. Once done, click the button available at the bottom of the website to proceed to the next task.

### Task 2:
Debug the `auth.js` file, which is intended to execute simple form validation on user input. Click 'login' to proceed to the next task once debugging is complete.

### Task 3:
You are provided with a Weather API. Fetch the details and display them on the `weather.html` page as illustrated in 'image2.png'.

### Task 4:
Document the modifications you make on the website in the `report.txt` file (You can adhere to any format of your preference).

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