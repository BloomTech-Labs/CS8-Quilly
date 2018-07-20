# Quilly API
# User endpoints
## Register new user
* Description: Registers a new user

* #### URL:      ```/user/register```
* #### Method:   ```POST```

* URL Params: None

* Data Params:
|Name        |Type       |Required (Y/N)|
||--|--|
|username    |string     |Y             |
|password    |string     |Y             |
|email       |string     |Y             |
|fisrtname   |string     |Y             |
|lastname    |string     |Y             |


### Success Response
* **Code**: 201 <br/>
**Content:** 
```
{
    _id: [string],
    username: [string],
    email: [string],
    firstname: [string],
    lastname: [string],
    createdAt: [timestamp]
}
```

### Error Response
Code: 422

Content: ``` {error: 'User already exists} ```

Code: 500

Content: ``` { error: 'New user could not be created' } ```


## Get User Information
Description: Returns information associated with logged in user

#### URL:      ```/user/```
#### Method:   ```GET```

URL Params: None

Data Params: None

### Success Response
Code: 201
Content: 
```
{
    _id: [string],
    username: [string],
    email: [string],
    firstname: [string],
    lastname: [string],
    createdAt: [timestamp]
}
```

### Error Response
Code: 400

Content: ``` { message:'You must be logged in to do this function' } ```

Code: 500

Content: ``` {error: "Could not retrieve user information"} ```



## Login
Description: Logs in an exsisting user

#### URL:      ```/user/login```
#### Method:   ```POST```

URL Params: None

Data Params:
|Name        |Type       |Required (Y/N)|
||--|--|
|username    |string     |Y             |
|password    |string     |Y             |


### Success Response
Code: 200
Content: 
```
{ success: 'Login successful' }
```

### Error Response
Code: 422

Content: 
```{ error: 'Invalid credentials' } ```

Code: 422

Content: 
```{ error: 'User not found' } ```

Code: 500

Content: ``` { error: 'Database error' } ```



## Logout
Description: Logs out current user

#### URL:      ```/user/logout```
#### Method:   ```GET```

URL Params: None

Data Params: None

### Success Response
Code: 200
Content: 
```
{ success: 'Successfully logged out' }
```

### Error Response
Code: 422

Content: 
```{ error: 'Invalid credentials' } ```

Code: 422

Content: 
```{ message: 'Not logged in' }```

Code: 500

Content: ``` { error: 'Error logging out' } ```



## Delete User
Description: Deletes logged in user

#### URL:      ```/user/delete```
#### Method:   ```DELETE```

URL Params: None

Data Params: None

### Success Response
Code: 201
Content: 
```
{ success: 'User has been deleted' }
```

### Error Response
Code: 500

Content: ```{ error: 'User does not exist'}```



## Updat user information
Description: Registers a new user

#### URL:      ```/user/update```
#### Method:   ```PUT```

URL Params: None

Data Params:
|Name        |Type       |Required (Y/N)|
||--|--|
|username    |string     |N             |
|password    |string     |N             |
|email       |string     |N             |
|fisrtname   |string     |N             |
|lastname    |string     |N             |


### Success Response
Code: 201
Content: 
```
{message: "User informatoin sucessfully updated"}
```

### Error Response
Code: 500

Content: ```{error: 'User information could not be updated'}```


# === Application endpoints ===

## Get Applications
* Description: Returns applications associated with logged in user

* #### URL:      ```/user/applications/```
* #### Method:   ```GET```

* URL Params: None

* Data Params: None

### Success Response
* Code: 200 <br/>
Content: 
```
{
    [
        {
            "submitted": false,
            "onsiteInterview": false,
            "receivedResponse": false,
            "whiteboard": false,
            "phoneInterview": false,
            "codeTest": false,
            "rejection": false,
            "offer": false,
            "open": true,
            "status": "wishlist",
            "testData": false,
            "_id": "5b5267c8d107c9405856ca10",
            "company": "Company",
            "position": "Position",
            "createdAt": "2018-07-20T22:52:56.133Z",
            "updatedAt": "2018-07-20T22:52:56.133Z",
            "__v": 0
        }
    ]
}
```

### Error Response
* **Code:** 400 <br/> 
**Content:** ``` { message:'You must be logged in to do this function' } ```

* **Code:** 500 <br/>
**Content:** ```{ error: 'Request could not be fulfilled.' }```



## Add application
Description: Adds application to logged in user

#### URL:      ```/users/applications/```
#### Method:   ```POST```

URL Params: None

Data Params:
|Name                |Type       |Required (Y/N)|
|--|--|--|
|company             |string     |Y             |
|positions           |string     |Y             |
|submitted           |bool       |N             |
|onsiteInterview     |bool       |N             |
|recievedResponse    |bool       |N             |
|whiteboard          |bool       |N             |
|phoneInterview      |bool       |N             |
|codeTest            |bool       |N             |
|rejection           |bool       |N             |
|offer               |bool       |N             |
|open                |bool       |N             |
|status              |string     |N             |

### Success Response
Code: 200
Content: 
```
{
    [
        {
            "submitted": false,
            "onsiteInterview": false,
            "receivedResponse": false,
            "whiteboard": false,
            "phoneInterview": false,
            "codeTest": false,
            "rejection": false,
            "offer": false,
            "open": true,
            "status": "wishlist",
            "testData": false,
            "_id": "5b5267c8d107c9405856ca10",
            "company": "Company",
            "position": "Position",
            "createdAt": "2018-07-20T22:52:56.133Z",
            "updatedAt": "2018-07-20T22:52:56.133Z",
            "__v": 0
        }
    ]
}
```

### Error Response
* **Code:** 422 <br/>
**Content:** 
```{message: 'company and position are required'}```

* **Code:** 500 <br/>
**Content:** ``` { error: 'Database error' } ```



## Logout
Description: Logs out current user

#### URL:      ```/users/logout```
#### Method:   ```GET```

URL Params: None

Data Params: None

### Success Response
Code: 200
Content: 
```
{ success: 'Successfully logged out' }
```

### Error Response
Code: 422

Content: 
```{ error: 'Invalid credentials' } ```

Code: 422

Content: 
```{ message: 'Not logged in' }```

Code: 500

Content: ``` { error: 'Error logging out' } ```



## Delete User
Description: Deletes logged in user

#### URL:      ```/users/delete```
#### Method:   ```DELETE```

URL Params: None

Data Params: None

### Success Response
Code: 201
Content: 
```
{ success: 'User has been deleted' }
```

### Error Response
Code: 500

Content: ```{ error: 'User does not exist'}```



## Updat user information
Description: Registers a new user

#### URL:      ```/users/update```
#### Method:   ```PUT```

URL Params: None

Data Params:
|Name        |Type       |Required (Y/N)|
||--|--|
|username    |string     |N             |
|password    |string     |N             |
|email       |string     |N             |
|fisrtname   |string     |N             |
|lastname    |string     |N             |


### Success Response
Code: 201
Content: 
```
{message: "User informatoin sucessfully updated"}
```

### Error Response
Code: 500

Content: ```{error: 'User information could not be updated'}```