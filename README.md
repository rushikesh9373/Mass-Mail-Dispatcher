# Mass-Mail-Dispatcher

This README provides an overview of the "Mass-Mail Dispatcher" web application, including its functionality, file structure, and how to set it up and use it as an experienced web developer.

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [File Structure](#file-structure)
4. [Setup and Usage](#setup-and-usage)
5. [Customization](#customization)
6. [Server-Side](#server-side)
7. [Conclusion](#conclusion)

## 1. Introduction

The "Mass-Mail Dispatcher" is a web application that allows users to send mass emails to a list of recipients provided through a CSV file. It provides a user-friendly interface for uploading the recipient list, defining the email subject and content, and sending emails. The application also validates email addresses and separates them into valid and invalid categories for easy reference.

## 2. Features

### Key features of the application include:

- **CSV File Upload**: Users can upload a CSV file containing a list of email addresses for recipients.

- **Email Validation**: The application validates each email address to distinguish between valid and invalid addresses.

- **Separate Lists**: Valid and invalid email addresses are displayed in separate lists, making it easy for users to identify and review problematic emails.

- **Customizable Email Content**: Users can specify the email subject and content.

- **Background Image**: The application features a customizable background image.

## 3. File Structure

The file structure of the application is as follows:

- **index.html**: The main HTML file containing the structure of the web page.

- **styles.css**: The CSS file for styling the web page.

- **script.js**: The JavaScript file for client-side validation and functionality.

- **sendmail.php**: The server-side PHP script for sending emails to valid recipients.

## 4. Setup and Usage

To set up and use the "Mass-Mail Dispatcher" web application, follow these steps:

1. **Clone or Download the Repository**: Clone this repository to your local development environment or download the files.

2. **Web Server Configuration**: Deploy the application on a web server with PHP support. You can use XAMPP, WAMP, or any other web server environment.

3. **Customize Background Image**: Replace `"Image1.jpeg"` in the `body` section of `styles.css` with the path to your desired background image.

4. **Customize Email Subject and Content**: Open `index.html` and customize the email subject and content as needed by modifying the `<textarea>` elements with IDs `"subject"` and `"emailContent"`.

5. **Testing**: Start your web server and access the application in a web browser. You can access it via `http://localhost/your-path-to-the-application/`.

6. **Upload CSV File**: Use the provided form to upload a CSV file containing recipient email addresses.

7. **Send Emails**: Click the "Upload and Send" button to validate and send emails. Valid and invalid email addresses will be displayed in separate lists.

## 5. Customization

You can further customize the application by modifying the HTML structure, CSS styles, JavaScript functionality, and PHP server-side script to match your specific requirements.

## 6. Server-Side

The server-side script `sendmail.php` uses PHP's `mail()` function to send emails to valid recipients. Customize this script for your email sending needs, including sender address, subject, and message content.

## 7. Conclusion

The "Mass-Mail Dispatcher" is a web application that contains HTML, CSS, JavaScript, and PHP files, allowing you to send mass emails to a list of recipients. By following this README, you should be able to set up and customize the application for your own use as an experienced web developer. Feel free to expand upon or enhance its features to suit your needs.
