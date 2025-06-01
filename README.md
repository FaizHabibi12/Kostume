# Kostumee Rental Application

## Overview
The Costume Rental Application is a web application that allows users to rent and review costumes. It provides functionalities for user authentication, costume management, rental processing, and review submission.

## Features
- User authentication (login, register)
- Costume creation, updating, and retrieval
- Rental management (create and manage rentals)
- Review system for costumes

## Project Structure
```
costume-rental-app
├── src
│   ├── app.ts
│   ├── index.ts
│   ├── controllers
│   ├── routes
│   ├── middleware
│   ├── services
│   ├── generated
│   └── types
├── prisma
│   ├── schema.prisma
│   └── migrations
├── package.json
├── tsconfig.json
├── .env
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd costume-rental-app
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Configuration
- Create a `.env` file in the root directory and add your database connection string:
  ```
  DATABASE_URL="your_database_connection_string"
  ```

## Running the Application
To start the application, run:
```
npm run dev
```

## API Endpoints
- **Authentication**
  - POST `/api/auth/login`
  - POST `/api/auth/register`
  
- **Costumes**
  - GET `/api/costumes`
  - POST `/api/costumes`
  - PUT `/api/costumes/:id`
  
- **Rentals**
  - GET `/api/rentals`
  - POST `/api/rentals`
  
- **Reviews**
  - GET `/api/reviews`
  - POST `/api/reviews`

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.