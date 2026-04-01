# 📚 Interactive Bookstore Application

An interactive Bookstore web application built using **ReactJS** that allows users to browse books, view details, add items to a cart, and place orders.

---

## 🚀 Features

* Browse 20+ books with images and details
* Search books by title
* Add to Cart with quantity support
* Remove items from cart
* Checkout and place order
* Simple Authentication (Login system)
* Multi-page navigation using React Router
* Responsive UI

---

## 🛠️ Tech Stack

* **Frontend:** ReactJS
* **Routing:** React Router DOM
* **State Management:** React Context API
* **Styling:** CSS
* **Package Manager:** npm

---

## 📁 Project Structure

```
src/
 ├── components/
 │    ├── Navbar/
 │    ├── BookCard/
 │
 ├── pages/
 │    ├── Home/
 │    ├── Books/
 │    ├── BookDetails/
 │    ├── Cart/
 │    ├── Checkout/
 │    ├── Login/
 │
 ├── context/
 │    ├── CartContext.js
 │    └── AuthContext.js
 │
 ├── data/
 │    └── books.js
 │
 ├── App.js
 └── index.js
```

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

### 1️⃣ Clone the Repository

```
git clone https://github.com/rajubontha96/bookstore.git
cd bookstore
```

### 2️⃣ Install Dependencies

```
npm install
```

### 3️⃣ Install Required Packages

```
npm install react-router-dom
```

### 4️⃣ Start the Application

```
npm start
```

👉 The app will run at:

```
http://localhost:3000
```

---

## 📌 Usage Instructions

* Navigate to **Books** page to view all books
* Use search bar to filter books
* Click **Details** to view full information
* Click **Add to Cart** to add items
* Go to **Cart** to manage items
* Proceed to **Checkout** to place order
* Login using any username (demo authentication)

---

## 🔐 Authentication

* Simple login system using React Context
* No backend (demo purpose only)
* User state is stored in memory

---

## 🛒 Cart Functionality

* Add items to cart
* Increase quantity automatically
* Remove items
* Total price calculation

---

## 💳 Checkout

* Displays total items
* Allows order placement
* Shows success alert

---

## 🎯 Future Enhancements

* 🔐 Real authentication (JWT / Firebase)
* 💾 Cart persistence (localStorage)
* 🌐 Backend integration (Node.js + MongoDB)
* 💳 Payment gateway integration
* ⭐ Ratings & reviews
* 📱 Mobile responsive UI

---

### ❌ react-router-dom not found

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create your branch (`git checkout -b feature-name`)
3. Commit changes
4. Push and create PR

---

## 👨‍💻 Author

Developed by **Raja Bontha**

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
