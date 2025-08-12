## Tonic Todo List - Astro with Database

A simple todo application built with Astro, React, and Astro DB.

## Setup and Run Locally

1. **Clone the repository**
   ```sh
   git clone <your-repo-url>
   cd tonic-todo-list
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Start the development server**
   ```sh
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321`

The application will be running with a local database and all API endpoints available.

<br><br>

## How I Met the Project Requirements

### Frontend
- Created an **Astro** app that uses **React** components and **TypeScript**.
- Implemented **file-based routing** with `.ts` files under `src/pages`.
- Implemented full **CRUD** functionality:
  - **Create** a new task.
  - **Read** all tasks to display them on screen (this happens automatically).
  - **Update** a task by clicking the **Complete** button.
  - **Delete** a task by clicking the **Delete** button.
- Created a clean UI using **Tailwind CSS**.

### Backend
- In the Astro app, used **TypeScript** to implement server-side logic in a **Node.js** environment.
- Exposed 4 API endpoints to handle **Create**, **Read**, **Update**, and **Delete** operations.
- Included **Astro DB** as the persistence layer.