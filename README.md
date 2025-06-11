# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# 🚀 React Vite Portfolio (Docker Dev Setup)

This is a React Vite project that runs inside Docker — no need to install Node.js or npm manually.

---

## 📦 Prerequisites

- Docker installed on your machine

---

## 🛠️ How to Build & Run the App

1. Clone the repo and navigate into the folder:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Build the Docker Image

 ```bash
    docker build -t vite-dev .
  ```

3. Run the Docker Container
```bash
    docker run -p 5173:5173 vite-dev
```

4. Open in Your Browser
Visit: http://localhost:5173/me

