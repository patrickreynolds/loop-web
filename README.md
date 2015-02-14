# loop-api
===

## Tech Stack

### Config
#### - Require.js
#### - Grunt.js

### Back-end
#### - Node.js
#### - MySQL  

### Front-end  
#### - React  
#### - Flux  
#### - Less  
#### - Data Modeling?  

===
## API
#### User Testing

	curl -i -X GET http://localhost:4000/users

	curl -i -X GET http://localhost:4000/users/54d82ed3bd8f865f3947635a

	curl -i -X POST -H 'Content-Type: application/json' -d '{"username": "patrick@gmail.com", "password": "test"}' http://localhost:4000/users

	curl -i -X PUT -H 'Content-Type: application/json' -d '{"username": "patrick@gmail.com", "password": "testtest"}' http://localhost:4000/users/54d82ed3bd8f865f3947635a

	curl -i -X DELETE http://localhost:4000/users/54d82e54bd8f865f39476359


###  List Testing  

	curl -i -X GET -H 'Content-Type: application/json' http://localhost:4000/users/54d82ed3bd8f865f3947635a/lists  

	curl -i -X GET -H 'Content-Type: application/json' http://localhost:4000/users/54d82ed3bd8f865f3947635a/lists/54d83b555a1711514788fc08  

	curl -i -X POST -H 'Content-Type: application/json' -d '{"list": {"title": "YumYums", "description": "Best eats in SF!"}}' http://localhost:4000/users/54d82ed3bd8f865f3947635a/lists  

	curl -i -X PUT -H 'Content-Type: application/json' -d '{"list": {"title": "YumYums", "description": "Best eats in all of SF!"}}' http://localhost:4000/users/54d82ed3bd8f865f3947635a/lists/54d83b555a1711514788fc08  

	curl -i -X DELETE -H 'Content-Type: application/json' http://localhost:4000/users/54d82ed3bd8f865f3947635a/lists/54d83b555a1711514788fc08  


### Authentication Testing  

	curl -i -X POST -H 'Content-Type: application/json' -d '{"username": "albert@gmail.com", "password": "testtest"}' http://localhost:4000/signup  

	curl -i -X POST -H 'Content-Type: application/json' -d '{"username": "albert@gmail.com", "password": "testtest"}' http://localhost:4000/login  
