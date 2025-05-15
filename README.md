# 🧳 Packing List App

A simple, interactive packing list application built with vanilla JavaScript. Plan your travel essentials by adding items with a name and quantity, get a relevant image fetched automatically, and mark items as packed or unpacked as you go.

---

## ✨ Features

- **Add Items**: Enter the name of an item and select the quantity to add it to your list.
- **Image Fetching**: Automatically fetches a relevant image for each item using an external image API.
- **Fallback Image**: Displays a default backpack image if no relevant image is found.
- **Packed Status**: Toggle each item between **Packed** and **Unpacked**. Packed items are greyed out and labeled accordingly.
- **Remove Items**: Easily delete items from your list with the **Delete** button.

---

## 🧠 Tech Stack

- **HTML**
- **CSS**
- **JavaScript (ES6+)**
- **External Image API** (Unsplash)

---

## 🚀 How to Use

1. Type the name of an item in the input field.
2. Choose the quantity from the dropdown.
3. Click **Add to list** to insert the item into your list.
4. Use the **Packed/Unpack** button to track your progress.
5. Click the **🗑 Delete (X)** button to remove any item.

---

## 🖼 Image Handling

- The app attempts to fetch a representative image for each item via a public API.
- If the image cannot be retrieved, a default backpack image is shown instead.

---

## 🔧 Future Improvements _(Optional Ideas)_

- Save list to `localStorage` for persistence.
- Drag-and-drop to reorder items.
- Filter by packed/unpacked.
- Dark mode toggle.

---

## 📸 Demo

[Demo here](https://simonsjostrand-portfolio.github.io/packing-list/)

---

## 📁 Project Setup

No build tools or frameworks required.

```bash
git clone https://github.com/yourusername/packing-list-app.git
```
