## Description

[TOBAMS TASK](https://github.com/flames-web/Tobam-Task.git) TOBAMS GROUPS NODE JS INTERN TASK

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start:dev

# watch mode
$ npm run start:dev

#Database 
 Create a .env file 
 DB_URL='yourdatabase'

 #BaseUrl
 baseUrl = http://localhost:3000 


```

## ENDPOINTS

<details>
<summary>IMAGES</summary>

  <details>
  <summary>Get Images</summary>

    Request
    GET {baseUrl}/get_images
    No request body required


    Response
    {
      "images": [
      {
        "url": "https://example.com",
        "filename": "Tobams/c2szff1phscc",
        "mimetype": "image/png",
        "_id": "imageId",
        "__v": 0
     }
     ]
    }



    Errors
    500 Internal Server Error - Something went wrong

  </details>

  <details>
  <summary>Upload Image</summary>

    Request
    Post {baseUrl}/upload

    Request Body
    "image"-"imageFile"

    Response

    {
    "message": "Image upload sucessful",
    "image": {
        "url": "https://example.com",
        "filename": "Tobams/c2szff1phscc",
        "mimetype": "image/png",
        "_id": "imageId",
        "__v": 0
    }
    }


    Errors Codes
    200 - OK - Image upload sucessful
    400 BAD REQUEST - Invalid Image File
    500 - Internal Server Error - Something went wrong

  </details>
