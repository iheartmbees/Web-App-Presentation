Interactive HTML Form with JavaScript Validation


This project demonstrates how to implement an interactive HTML registration form with custom JavaScript validation and styled error messages. It focuses on the use of HTML input fields, attributes, and DOM-based validation techniques.


Features
- Clean and responsive HTML form layout
- External CSS styling
- JavaScript validation for:
    - Username length
    - Email format
    - Password strength
- Per-field error messages
- A styled global error alert message
- Fully separated HTML, CSS, and JS files for clarity
  

Project Structure
validated_form_project/
│
├── index.html        # Main form page
├── styles.css        # Styling for form layout and errors
└── script.js         # JavaScript validation logic


How It Works
1. HTML (index.html)
  - Defines the structure of the registration form with:
  - Username, Email, Password fields
  - <small> elements for displaying field-level errors
  - A global error box (#formError)
    

2. CSS (styles.css)
  - Provides simple and modern styling:
  - Centered form container
  - Styled input fields
  - Styled submit button
  - Red alert box for global errors
    

3. JavaScript (script.js)
  - Handles validation when the user submits the form:
  - Checks if username ≥ 3 characters
  - Checks if email contains @ and .
  - Checks if password ≥ 6 characters
  - Displays custom messages without refreshing the page
  - Shows a styled alert box if any input is invalid
    

How to Use
1. Download and extract the project folder.
2. Open index.html in any web browser.
3. Enter details and click Register.
4. Validation happens instantly—errors appear below fields or in the top alert box.
   

Learning Objectives
- Understanding HTML form structure
- Using input attributes like id, name, and required
- Writing JavaScript to validate form fields
- Manipulating the DOM to show/hide error messages
- Creating user-friendly UI with CSS
