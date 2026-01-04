

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

<img width="1874" height="961" alt="Screenshot 2026-01-04 131300" src="https://github.com/user-attachments/assets/aa218cd8-e6a1-4e88-8bb4-c7a73d757186" />
<img width="1859" height="880" alt="Screenshot 2026-01-04 130520" src="https://github.com/user-attachments/assets/b98ae3c0-d366-40a2-9a86-4ea88176d2ed" />

