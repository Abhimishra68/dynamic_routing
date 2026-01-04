<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======


## 📘 README.md

# React Router v6 Practice App

A React application built to practice **React Router v6**, covering **basic routing**, **dynamic routing**, and **programmatic navigation** using `useNavigate`. The app also follows clean layout practices with reusable components.

---

## 🚀 Features

* React Router v6 routing system
* Dynamic routing using URL parameters
* Programmatic navigation with `useNavigate()`
* Shared Navbar and Footer across pages
* 404 page handling
* Tailwind CSS styling

---

## 📁 Project Structure

```
src/
│── components/
│   ├── Navbar.jsx
│   └── Footer.jsx
│
│── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Product.jsx
│   ├── CourseDetails.jsx
│   ├── Nestedroute.jsx
│   └── Note.jsx
│
│── App.jsx
│── main.jsx
```

---

## 🛣️ Routes Overview

| Route                | Description                 |
| -------------------- | --------------------------- |
| `/`                  | Home page                   |
| `/about`             | About page                  |
| `/product`           | Product page                |
| `/courses/:CourseId` | Dynamic course details page |
| `/product/nested`    | Nested route example        |
| `*`                  | 404 Not Found page          |

---

## 🔀 Programmatic Navigation

The **About page** uses `useNavigate()` to control navigation via buttons.

### Navigation Actions:

* Go to Home page
* Go back to previous page
* Go forward in history

```js
const navigate = useNavigate();

navigate('/');
navigate(-1);
navigate(1);
```

---

## 🧩 Technologies Used

* React
* React Router DOM v6
* Tailwind CSS

---

## ▶️ Run the Project

1. Clone the repository

   ```bash
   git clone <your-repo-url>
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the server

   ```bash
   npm run dev
   ```

---

## 📌 Key Learnings

* Dynamic routing with URL params
* History navigation using `useNavigate`
* Clean routing structure
* SPA navigation without page reload

---

## 📄 License

Free to use for learning and practice purposes.

---

<img width="1874" height="961" alt="Screenshot 2026-01-04 131300" src="https://github.com/user-attachments/assets/1fcad99a-aecd-45b4-b794-2c280d8db51a" />
<img width="1859" height="880" alt="Screenshot 2026-01-04 130520" src="https://github.com/user-attachments/assets/fef087ec-004c-4758-9533-b548e255a19c" />


Just say 👍
>>>>>>> 8024b3851248f07181b2b961fa8000170bcd17ee
