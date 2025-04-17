# 💻 Full-Stack Coding Challenge: Post Viewer App

## Overview

Build a small full-stack application using **React** and **Node.js/Express**. The app should display a list of posts fetched from your own backend API, allow users to add new posts, fetch by post id, and include basic search and UI features.

---

## 🧠 What You'll Build

- A **React frontend** (`PostList`) that fetches and displays posts.
- A **simple Express server** that provides post data via an API.
- Functionality to **add**, **search**, and **persist** posts.

---

## 🧩 Requirements

### 1. Set Up an Express API

- Build a simple **Express server** that serves a list of posts at a `/api/posts` endpoint.
- Use a **`server/posts.json`** file to simulate post data.
- Implement a **POST** route to add new posts.
- Implement a **GET** route to fetch a post by its ID (`/api/posts/:id`).
- **Create and implement a logger middleware** to log the following details for each request:
  - **Timestamp**
  - **HTTP Method** and **URL**
  - **Payload/Data** for POST requests

> 💡 _Optional:_ Add error handling and support for GET query filtering (e.g., by title).
> 💡 _Optional:_ Implement **in-memory caching** for performance.

---

### 2. Build the React App

#### React Component 1: `PostList`

- Create a React component named `PostList` that displays **all posts** retrieved from your Express server.
- Use `fetch` or an equivalent method to call your `/api/posts` endpoint.
- Display each post's **title** and **body** using **semantic HTML**.

#### React Component 2: `SinglePost`

- Create a React component named `SinglePost` that displays **one post** retrieved from your Express server.
- Use `fetch` or an equivalent method to call your `/api/posts/:id` endpoint.
- Display the post's **title** and **body** using **semantic HTML**.

---

### 3. Manage State in React

- Use **React Hooks** (`useState`, `useEffect`) to manage and load post data.
- Add optional states for **loading** and **error handling**.
- _(Bonus)_ Persist and **GET** fetched posts from **local storage** so data persists across hard reloads (use `localStorage.setItem` and `localStorage.getItem`).

---

### 4. Add Search Functionality

- Add a **search input** to filter posts by title.
- The search should update the UI in real time as the user types.

---

### 5. Add New Posts

- Create a form (`AddPostForm`) to allow users to add new posts.
- Submitting the form should send a **POST** request to your backend and update the frontend list of posts.

---

### 6. Styling & Accessibility

- Add basic styling using a **separate CSS file**.
- Ensure the use of **semantic HTML** and follow basic accessibility best practices:
  - Use **ARIA labels**.
  - Maintain **proper heading structure**.
  - Support **keyboard navigation**.

---

## 🚀 Bonus Ideas (Optional)

- Add a **loading spinner** or animation during fetch calls.
- Display **user-friendly error messages** when requests fail.
- Implement **validation** in the post form (e.g., require both a title and a body).
- Allow users to **delete or edit posts**.
- _(Bonus)_ **Unit test** your Express API routes using a testing library like **Jest** or **Mocha**.

---

## 💡 What We're Looking For

- **Clear, organized, and maintainable code**.
- Ability to **structure a simple full-stack app**.
- A good understanding of **React** and **Express** fundamentals.
- Thoughtful **UX decisions** (error states, loading, form validation, etc.).

---

> Feel free to use any project structure that makes sense to you. If you're unsure where to start, begin with setting up the **backend API** and then move to the **frontend**.
