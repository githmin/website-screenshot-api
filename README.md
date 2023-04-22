
# Web Screenshot API

This is a simple Web Screenshot API built using Node.js and the Puppeteer library for personal use. The API allows you to take a screenshot of any website by passing in the URL as a parameter. You can also specify the width and height of the viewport (optional).



## Getting Started


To use this API, you need to have Node.js and Puppeteer installed on your system. If you don't have them installed, you can follow the instructions below:



```bash
  clone the project
  cd website-screenshot-api
  npm install
```
    
## Usage
To use this API, you need to start the server by running the following command in your terminal:



```javascript
node index.js

```

Once the server is running, you can send a GET request to the "/api/v1/ss" endpoint with the website parameter to take a screenshot of the website.

Example 

Send a post request to http://localhost:4000/api/v1/ss with the following params
```
{
    "website" : "http://www.github.com/githmin",
    "width" : "1920",
    "height" : "1080"
}
```
NOTE : width and height is optional, fallback is width : 1920 & height : 1080

API will return a binary image of the screenshot as a response.
## Authors

- [@githmin](https://www.github.com/githmin)