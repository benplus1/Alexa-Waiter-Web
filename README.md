# Alexa-Waiter-Web

This full stack HackPrinceton Spring 2017 application that uses AWS, Alexa, front-end, and back-end (databases) to create a more efficient restaurant workplace. 

Won HackPrinceton Spring 2017 Best Financial Hack, and Top 10 Finalist.

## Overview

This project helps restaurants work more efficiently by automating the ordering process. An Alexa skill is used to take orders, and customers can see live updating receipts and orders. Restaurants, on the other side, can see their revenue total or register for this service. 

The total application has three parts:
* Front-end -> HTML, JavaScript, CSS, AngularJS to create a reactive portal for the restaurant's end, and an updating dynamic receipt for customers
* Back-end -> RESTful services + database for handling static data, using Nessie (Capital One API), MongoDB, SparkJava. Allows for basic handling of financial information, and stores all data from the receipts.
* Alexa -> Amazon Web Services + Physical Alexa, used NLP to acquire said orders from customers


## Setup

Please clone both this Web portion, along with WaiterServer (another forked repository) as well. 

Place the local repositories within the same folder.

After going into the directory, these are the steps to get the app up and running locally:

#### Step 1. Install Dependencies

Make sure the latest version of Node.js and Angular is installed:
Node: https://nodejs.org/en/
Angular: https://angular.io/

Make sure you have the latest version of MongoDB for Java:
MongoDB: https://mongodb.github.io/mongo-java-driver/

Make sure you have unique API keys for Nessie:
Nessie: http://api.reimaginebanking.com/

It is also highly recommended that you use Eclipse + Maven, so that you can just include the SparkJava Maven Library.
SparkJava: http://sparkjava.com/download


#### Step 2. Setting up the front-end

You will need to find domain names or deploy both the Client and RestaurantClient to PaperPlane / Heroku / other sites.

Pertinent information can be found here:
https://www.paperplane.io/


#### Step 3. Setting up the back-end

Simply use Eclipse and run Main.java within src/main using Eclipse. 

Make sure the ID for the Alexa is set using Main.java.

You're done!

## Credit

Built by Benjamin Yang, Aditya Shastri, Revanth Korrapolu, Pranay Gupta at Rutgers University, kept under the MIT License.
