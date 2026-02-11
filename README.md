# RESTful API Activity – Andrea Pearl A. Manqueria
## Best Practices Implementation
**1. Environment Variables:**

 -Why did we put `BASE_URI` in `.env` instead of hardcoding it?

 -Answer:
We placed BASE_URI in the .env file to avoid hardcoding values inside the source code. This makes the application easier to maintain and update because changes can be made without modifying the code. It also follows best practices by separating configuration from logic and allows the application to work properly in different environments such as development and production.

**2. Resource Modeling:**

 -Why did we use plural nouns (e.g., `/dishes`) for our routes?

 -Answer:
Plural nouns are used because RESTful APIs represent collections of resources. Using plural route names makes the API more consistent and easier to understand, especially when handling multiple records such as retrieving all items, adding new data, updating, or deleting resources.

**3.Status Codes:**

 -When do we use `201 Created` vs `200 OK`?

 -Answer:
201 Created is used when a new resource is successfully created, usually after a POST request.
200 OK is used when a request is successful but does not create a new resource, such as GET, PUT, or DELETE requests.

 -Why is it important to return 404 instead of just an empty array or a generic error?

 -Answer:
Returning 404 Not Found clearly tells the client that the requested resource does not exist. 

**4.Testing:**



<img width="358" height="565" alt="Screenshot 2026-01-28 164540" src="https://github.com/user-attachments/assets/bac00133-cdfc-4be9-867c-0319f7e2b53f" />

**"Why did I choose to Embed the [Review/Tag/Log]?"**
- I chose to embed the reviews inside the Dish model because reviews belong strictly to a specific dish. A review does not need to exist independently from the dish it describes. When users view a dish, they usually want to see its reviews together with it.

Embedding makes retrieval faster because all related data (dish details + reviews) can be fetched in a single query. It also keeps the database organized by grouping related information inside one document.

**"Why did I choose to Reference the [Chef/User/Guest]?"**
-- I chose to reference the Chef because a chef exists independently from any single dish. One chef can cook multiple dishes, and those dishes can all point to the same chef.

Referencing prevents data duplication. Instead of copying the chef’s information into every dish document, I only store the Chef’s ObjectId. This keeps the database cleaner, more scalable, and easier to maintain. If the chef’s information changes, it only needs to be updated in one place.

