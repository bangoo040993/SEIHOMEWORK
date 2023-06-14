we can test the code in post man with these body
get(/items) you can test on postman by picking get and clicking send. and it should list all the data from mongodb 

post /items by putting in these body in a post request and sending it
"name": "default",
"price": "default", 
it return what ever string you put in the default place and also return an _id for each new item we make.

get /items/:id
similar to the get/items route we send a request for a specific item that had already been made using their speicific id for that item and return the body for that item.

Put /items/:id using the same specific id we got 
we can make changes or update the other two object such as name and price depending on your schema.

delete /items/:id this route completely delete the items from server collection so you cant find it anymore