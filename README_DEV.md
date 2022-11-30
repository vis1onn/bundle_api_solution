## Task Description
This project required creating an Express.js server endpoint that fetches data from three different sources (requestData1, requestData2, requestData3). These sources might fail independently of each other and it was necessary to handle such scenarios, i.e., if one request fails, it should not affect others.

Another requirement was to process the results of requestData3 with a utility function, makeNamesUnique, before sending the response. The function makeNamesUnique helps to ensure that the name property in the Data3Item objects is unique.

In addition, TypeScript was used extensively for type checking. For each request function, there was a corresponding DataItem interface (i.e., Data1Item, Data2Item, Data3Item).

## Project Structure
The project follows a modular structure that's divided into the following main directories:

- `api`: Contains all request-related functions.
- `utils`: Contains utility functions, such as makeNamesUnique.
- `interfaces`: Contains TypeScript interfaces for data types.
- `controllers`: This folder contains the controller functions that process incoming requests and return responses. In our case, this is where the `getBundle` function resides.
- `routes`: This folder defines the endpoints of our application and directs the HTTP requests to the correct controller functions.

Each data request has its own TypeScript interface and these interfaces are grouped together in the interfaces directory. The makeNamesUnique utility function also resides in a separate utils directory.

## Solution
The implemented solution uses TypeScript and Express.js to create the `/bundle` endpoint. This endpoint makes use of `Promise.allSettled()` to ensure that all requests are processed, regardless of whether they are resolved or rejected.

Error handling is implemented by checking the status of each promise. If a promise is rejected, it returns an empty array. If it is fulfilled, it casts the returned data to the appropriate data type.

For the requestData3 results, the `makeNamesUnique` function is used to process the data before responding.

## Task Estimate
This task required a good understanding of TypeScript and asynchronous operations in Node.js. With a well-defined task description and requirements, the estimate for completing this task would be approximately:

- `Research and planning`: 30 minutes
- `Coding and implementation`: 1 hours
- `Testing and debugging`: 30 minutes
- `Documentation`: 20 minutes

The actual time spent on this task aligns completely with this estimate.