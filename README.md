Course-end Project 2 (Kitchen Story) Developer: Aryamann Mishra
Email: fr.aryamann.mishra@prolim.in GitHub Link:
https://github.com/AryamannMishraFR/Aryamann-Mishra-course4-end-project-2

Description
Kitchen Story is an e-commerce portal that enables users to shop for basic food items online. The system includes both a user-facing website for shopping and an admin backend for managing the list of available food items.
Project Objective

The objective of the Kitchen Story project is to develop a user-friendly e-commerce platform with the following features:
1. User Features:
○ A search form on the home page to allow customers to search for food
items.
○ Display of available food items based on the search query along with
their prices.
○ A detailed view of the selected item and an option to purchase it.
○ An order summary page displaying the breakdown of the order and
payment details.
○ A confirmation page showing the order details after successful
payment.

2. Admin Features:
○ An admin login page with the option to change the password after
logging in.
○ A master list of food items available for purchase.
○ Functionality to add or remove food items from the list.
  
 Technologies Used
1. HTML:
○ Structure and layout of the web pages.
2. CSS:
○ Styling for layout and elements.
○ Bootstrap: For responsive design and styling components.
3. JavaScript:
○ jQuery: For handling form submissions, dynamic content generation,
and AJAX requests.
○ Client-side validation and interaction.
4. JSON:
○ For storing and retrieving the list of food items.

File Structure
● index.html: The main landing page with the search form.
● search.html: The page displaying search results.
● order.html: The page displaying the order details.
● confirmation.html: The page displaying the order confirmation.
● admin.html: The admin login and management page.
● styles.css: The CSS file for custom styles.
● script.js: The JavaScript file for handling user interactions.
● items.json: The JSON file containing the list of food items.

How to Run
Start a Local Server
1. Using http-server:
npm install -g http-server http-server

Open the Application
● Open your browser and navigate to http://localhost:8080. Usage
1. Admin Login:
○ Navigate to admin.html and log in using the default credentials
(Username: admin, Password: admin).
○ After logging in, you can change the password, add new food items,
or remove existing ones. 2. User Shopping:
○ On the index.html page, enter the name of the food item in the search form and click "Search".
○ View the search results on the search.html page and select an item to purchase.
○ Review the order details on the order.html page and proceed to payment.
○ After successful payment, view the order confirmation on the confirmation.html page.

Summary
This project provides a comprehensive implementation of an e-commerce portal for basic food items. It includes user-friendly interfaces for both customers and administrators, enabling efficient shopping and management of food items.
Ensure to replace placeholders with actual functionality such as real API calls, database integration, and secure authentication mechanisms for production use.
