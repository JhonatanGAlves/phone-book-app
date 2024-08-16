# Phone Book App

Phone Book App is a full-stack application designed to manage and store contact information. This project is built with modern web technologies and follows best practices for a scalable and maintainable codebase.

## Technologies Used

- **Backend**:

  - Node.js
  - Express
  - Zod
  - Validator
  - UUID
  - Prisma
  - Pg
  - PostgreSQL

- **Frontend**:
  - React
  - TypeScript
  - Tailwind CSS
  - React Icons
  - React Input Mask

## Getting Started

To get a local copy of the project up and running, follow these steps.

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository**:
   git clone https://github.com/JhonatanGAlves/phone-book-app.git
   cd phone-book-app
2. **Install dependencies:**:
   npm install
3. **Setup the environment variables:**
   Rename .env.example to .env and fill in the required environment variables:
   Something like this:
   POSTGRES_USER=root
   POSTGRES_PASSWORD=password
   POSTGRES_PORT=5432
   POSTGRES_DB=phonebookapp
   POSTGRES_HOST=localhost
   PORT=8080
4. **Run database migrations:**
   npx prisma migrate dev
5. **Start the application:**
   Backend: npm run start:dev
   Frontend: npm run dev

## Usage

Once the server is running, you can access the application at http://localhost:5173 (or the port you specified in the .env file).

## License

This project is licensed under the MIT License.
