# 📊 Dashboard App — Angular

A web-based dashboard application built with **Angular** as part of an interview assignment. Features user authentication (Sign In) and a data visualization dashboard with charts and tables.

---

## ✨ Features

- 🔐 **Sign In** — authentication with form validation
- 📊 **Dashboard** — Interactive donut chart & bar chart
- 📋 **User Table** — Data grid displaying users from API
- 🔒 **Route Guard** — Protected routes; unauthenticated users are redirected to Sign In

## 📁 Project Structure

```
src/
├── app/
│   ├── features/
│   │   ├── dashboard/      # Dashboard module
│   │   └── login/          # Sign In module
│   ├── core/
│   │   ├── guards/             # Auth route guard
│   │   ├── interceptor/        # HTTP interceptor
│   │   └── services/           # Service API
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>= 14.x`
- NPM `>= 6.x`
- Angular CLI `>= 14.x`

```bash
npm install -g @angular/cli@14
```

### Installation

```bash
# Clone the repository
git clone https://github.com/allail-qadrillah/fe-tasks-web

# Navigate to project folder
cd fe-tasks-web

# Install dependencies
npm install
```

### Run Development Server

```bash
ng serve
```

Open your browser at `http://localhost:4200`

### Build for Production

```bash
ng build --configuration production
```

Output will be in the `dist/` folder.

---

## 🔑 Credentials (Demo)

| Field | Value |
|-------|-------|
| Email | `user@aemenersol.com` |
| Password | `Test@123` |

---

## 🌐 API Reference

### Sign In

```
POST http://test-demo.aemenersol.com/api/account/login
```

```json
{
  "username": "string",
  "password": "string"
}
```

### Dashboard Data

```
GET http://test-demo.aemenersol.com/api/dashboard
Authorization: Bearer <token>
```

Returns `chartDonut`, `chartbar`, and `tableUsers` arrays.

---

## 🔒 Authentication Flow

1. User submits credentials on Sign In page
2. API returns a **Bearer Token**
3. Token is stored in `localStorage`
4. An **HTTP Interceptor** automatically attaches the token to every subsequent API request
5. An **Auth Guard** protects the `/dashboard` route — redirects to `/login` if no token is found