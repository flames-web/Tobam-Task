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
        "Images": [
            {
                "_id": "64e368c8549ccb663639957e",
                "url": "Isaac Ayorintr",
                "filename": "isaacayorinde0003@gmail.com",
                "mimetype":"lekan/jpeg"
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

   
    Errors Codes
    401 - Unauthorized 
    400 BAD REQUEST - Invalid Image File
    500 - Internal Server Error - Something went wrong


  </details>
