# Atelier Andre Couture

## Descriere
Aplicație web pentru gestionarea unui magazin de îmbrăcăminte.  
Permite adăugarea, editarea și ștergerea produselor, filtrare, sortare și schimbarea temei light/dark.

## Tehnologii folosite
- React + Vite
- JavaScript (ES6+)
- CSS3 (Grid/Flexbox)
- JSON Server (mock API)
- LocalStorage pentru temă
- Hooks: useState, useEffect, useMemo
- Structură componentizată

## Instalare și rulare local
1. Clonează proiectul sau descarcă-l:
```bash
git clone <URL_PROIECT>


atelier-andre-couture/
├─ db.json
├─ package.json
└─ src/
   ├─ main.jsx
   ├─ App.jsx
   ├─ App.css
   ├─ hooks/
   │   └─ useLocalStorage.js
   └─ components/
       ├─ Header.jsx
       ├─ Footer.jsx
       ├─ ThemeToggle.jsx
       ├─ ProductForm.jsx
       ├─ ProductList.jsx
       ├─ ProductCard.jsx
       └─ Filters.jsx

Funcționalități
Adaugă produse noi
Editează produse existente
Șterge produse
Filtrare după categorie și căutare text
Sortare după preț sau dată
Schimbare temă light/dark
Persistență a temei în LocalStorage
Interfață responsive (desktop, tabletă, mobil)


Note
Folosit fetch nativ pentru API
Hook personalizat useLocalStorage pentru gestionarea temei
Mock API cu JSON Server pentru simulare backend


