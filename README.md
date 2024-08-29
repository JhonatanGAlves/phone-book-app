# Phone Book App

<h1 align="center">
   <img src="./public/readme/phone-book-app.gif">
</h1>

<div align="center">
   <a href="#desktop_computer-project">
      <img src="https://img.shields.io/badge/PROJECT-8047F8?style=for-the-badge&logo=react&logoColor=white" />
   </a>
   <a href="#technologist-technologies">
      <img src="https://img.shields.io/badge/TECHNOLOGIES-8047F8?style=for-the-badge&logo=codacy&logoColor=white" />
   </a>
   <a href="#clipboard-how-to-use">
      <img src="https://img.shields.io/badge/HOW_TO_USE-8047F8?style=for-the-badge&logo=visual-studio-code&logoColor=white" />
   </a>
   <a href="#speech_balloon-contact">
      <img src="https://img.shields.io/badge/CONTACT-8047F8?style=for-the-badge&logo=maildotru&logoColor=white" />
   </a>
</div>
<br>

## :desktop_computer: Project

Phone Book App is a full-stack application designed to manage and store contact information. This project is built with modern web technologies and follows best practices for a scalable and maintainable codebase.

## :technologist: Technologies Used

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
  - Radix UI
  - React Icons
  - React Input Mask

## :clipboard: How to Use

To get a local copy of the project up and running, follow these steps.

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Git](https://git-scm.com/)
- [PostgreSQL](https://www.postgresql.org/download/)

OBS: Make sure PostgreSQL service is running.

1. **Start PostgreSQL service**<br/>
   Linux (Ubuntu/Debian):

```bash
   sudo systemctl start postgresql
```

MacOS (Using Homebrew):

```bash
   brew services start postgresql
```

### Installation

1. **Clone the repository**:

```bash
   git clone https://github.com/JhonatanGAlves/phone-book-app.git
   cd phone-book-app
```

2. **Install dependencies:**:

```bash
   npm install
```

3. **Setup the environment variables:**<br/>
   Rename .env.example to .env and fill in the required environment variables. Something like this:
   - POSTGRES_USER=postgres
   - POSTGRES_PASSWORD=password
   - POSTGRES_PORT=5432
   - POSTGRES_DB=phonebookapp
   - POSTGRES_HOST=localhost
   - PORT=8080
   - DATABASE_URL="postgresql://postgres:password@localhost:5432/phonebookapp"
4. **Run database migrations:**<br/>

```bash
   npx prisma migrate dev
```

5. **Start the application:**<br/>
   Backend:

```bash
   npm run start:dev
```

Frontend:

```bash
   npm run dev
```

## Usage

Once the server is running, you can access the application at http://localhost:5173 (or the port you specified in the .env file).

## License

This project is licensed under the MIT License.

## :speech_balloon: Contact

<br>
<div align="center">
   <a href="https://jhonatandev-alves-app.vercel.app/" target="_blank">
      <img src="https://img.shields.io/badge/PORTFOLIO-8047F8?style=for-the-badge&logo=codeium&logoColor=white">
   </a>
   <a href="https://www.linkedin.com/in/jhonatan-alves-11b28015b/" target="_blank">
      <img src="https://img.shields.io/badge/LINKEDIN-8047F8?style=for-the-badge&logo=linkedin&logoColor=white" />
   </a>
   <a href="mailto:jhonatan.galves1996@gmail.com">
      <img src="https://img.shields.io/badge/EMAIL-8047F8?style=for-the-badge&logo=gmail&logoColor=white" />
   </a>
</div>
