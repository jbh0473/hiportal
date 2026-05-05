
# Lotto Number Generator

This project is a simple web application that generates lotto numbers.

## Implemented Features

*   **User Interface:** A clean and simple interface with a title, a container to display the generated numbers, and a button to generate a new set of numbers.
*   **Number Generation:** The application generates 6 unique random numbers between 1 and 45. The numbers are sorted in ascending order.
*   **Multi-set Generation:** Generates 5 sets of numbers simultaneously for better usability.
*   **Bonus Number:** Each set includes an additional bonus number, distinct from the main 6 numbers.
*   **Sequential Numbering:** Each set is numbered (1-5) for easy reference.
*   **Dynamic Display:** The generated numbers are dynamically displayed on the page without requiring a page reload.
*   **Timestamp Display:** The current date and time are displayed whenever a new set of numbers is generated.

## Deployment
The application is deployed and available at:
[https://jbh0473.github.io/hiportal/](https://jbh0473.github.io/hiportal/)

## Project Structure
*   `index.html`: The main HTML file containing the structure of the web page.
*   `style.css`: The CSS file for styling the application.
*   `main.js`: The JavaScript file containing the logic for generating and displaying the lotto numbers.

## How it works

1.  When the user clicks the "Generate Numbers" button, the `generateNumbers` function in `main.js` is called.
2.  This function creates an array of 6 unique random numbers between 1 and 45.
3.  The `displayNumbers` function is then called to render the numbers on the screen.
4.  The current date and time are captured, formatted, and displayed in the timestamp element.
5.  The numbers are displayed in sorted order inside individual `div` elements.
