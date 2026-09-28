// ==========================================
// 1. MASSIV (ARRAY) — mahsulotlar ro'yxati
// ==========================================

const products = [
  { id: 1, name: "MacBook Pro",     price: 1500, category: "laptop",    image: "https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/thumbnail.webp" },
  { id: 2, name: "iPhone 13 Pro",   price: 1200, category: "phone",     image: "https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/thumbnail.webp" },
  { id: 3, name: "AirPods",         price: 250,  category: "audio",     image: "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods/thumbnail.webp" },
  { id: 4, name: "Apple Watch",     price: 400,  category: "accessory", image: "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-watch-series-4-gold/thumbnail.webp" },
  { id: 5, name: "Dell XPS",        price: 1300, category: "laptop",    image: "https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/thumbnail.webp" },
  { id: 6, name: "Samsung S10",     price: 900,  category: "phone",     image: "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s10/thumbnail.webp" },
  { id: 7, name: "AirPods Max",     price: 550,  category: "audio",     image: "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/thumbnail.webp" },
  { id: 8, name: "MagSafe Battery", price: 100,  category: "accessory", image: "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-magsafe-battery-pack/thumbnail.webp" }
];

// Savat — boshida bo'sh massiv
const cart = [];


// ==========================================
// 2. HTML ELEMENTLAR
// ==========================================

const productsBox = document.getElementById("products");
const cartBox = document.getElementById("cart");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

document.getElementById("productCount").textContent = products.length;
document.getElementById("totalProducts").textContent = products.length;
