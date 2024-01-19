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
"images": [
{
"_id": "65aa505d9ea99b9a3202376e",
"url": "https://res.cloudinary.com/dcz8fqwkr/image/upload/v1705660508/Tobams/c2szff1phsccsk1ucdke.png",
"filename": "Tobams/c2szff1phsccsk1ucdke",
"mimetype": "image/png",
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
        "url": "https://res.cloudinary.com/dcz8fqwkr/image/upload/v1705660508/Tobams/c2szff1phsccsk1ucdke.png",
        "filename": "Tobams/c2szff1phsccsk1ucdke",
        "mimetype": "image/png",
        "_id": "65aa505d9ea99b9a3202376e",
        "__v": 0
    }
    }


    Errors Codes
    201 -Created
    400 BAD REQUEST - Invalid Image File
    500 - Internal Server Error - Something went wrong

  </details>
