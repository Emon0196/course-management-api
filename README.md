Course-Management-API

This is a Back-End project for creating an API to update courses, including nested modules and videos. Each course can have multiple modules, and each module can contain multiple videos. This API allows updates to any part of the course: adding/removing modules, updating individual videos of a module, etc.




**The stacks and tools used in this project are described below:**
- Node.js + Express.js + Mongoose
-  This project was developed using Node.js-based express.js Framework using mongoose ODM.
-  Used Postman for testing the API with mongodb database that was created based on a given schema.
-  Implemented JWT Bearer Token as middleware for authentication.
-  Validated the data and ensured partial updates are possible.
-  Used Mongoose’s subdocument capabilities to handle nested updates efficiently.
-  Ensured proper error handling and logging of update outcomes. 