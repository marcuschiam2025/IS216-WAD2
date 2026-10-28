const express = require("express");
const cors = require("cors");

const server = express();
server.use(cors({ origin: /^http:\/\/localhost:\d+$/ }));
server.use(express.json());

const products = [
  { id: 1, title: "Notebook", price: 3.5, description: "A5 lined notebook for class notes." },
  { id: 2, title: "Pen", price: 1.2, description: "Smooth gel pen (0.5mm)." },
  { id: 3, title: "Backpack", price: 29.9, description: "Comfortable backpack with laptop sleeve." },
  { id: 4, title: "Water Bottle", price: 9.5, description: "700ml BPA-free bottle." },
  { id: 5, title: "USB Drive", price: 12.0, description: "64GB USB 3.0 flash drive." },
  { id: 6, title: "Headphones", price: 49.0, description: "Over-ear headphones with good bass." }
];

let orders = []; // in-memory (instead of persistence storage)

server.get("/products", (req, res) => {
  res.json(products);
});

// Fake login: accept any username/password
server.post("/login", (req, res) => {
  const { username } = req.body || {};
  if (!username) return res.status(400).json({ error: "username required" });

  res.json({ token: "fake-token-123", username });
});

server.post("/checkout", requireAuth, (req, res) => {
  // const auth = req.header("Authorization") || "";
  // if (auth !== "Bearer fake-token-123") {
  //   return res.status(401).json({ error: "Unauthorized" });
  // }
  const { items } = req.body || {};
  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: "Cart is empty" });
  }

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  let orderId = orders.length + 1
  const order = {
    id: orderId,
    createdAt: new Date().toISOString(),
    items,
    total
  };

  orders.unshift(order)
  console.log(orders)

  res.json({ message: "Checkout ok", orderId });
});

function requireAuth(req, res, next) {
  // console.log(req.header("Authorization"))
  const auth = req.header("Authorization") || "";
  if (auth !== "Bearer fake-token-123") return res.status(401).json({ error: "Unauthorized" });
  next();
}


// List orders
server.get("/orders", requireAuth, (req, res) => {
  console.log(orders)
  res.json(orders)
})

server.listen(8000, () => console.log("API running at http://localhost:8000"))