Structura proiectului

src/
│
├── App.jsx
├── main.jsx
├── styles/
│   └── global.css
│
├── context/
│   └── CartContext.jsx
│
├── hooks/
│   └── useLocalStorage.js
│
├── Components/
│   ├── Header/Header.jsx
│   ├── Footer/Footer.jsx
│   ├── HeroSlider/HeroSlider.jsx
│   ├── Products/Products.jsx
│   ├── ProductList/ProductList.jsx
│   ├── ProductCard/ProductCard.jsx
│   ├── ProductForm/ProductForm.jsx
│   ├── Reviews/Reviews.jsx
│   ├── SocialMedia/SocialCarusel.jsx
│   ├── ThemeToggle/ThemeToggle.jsx
│   └── Buton/Buton.jsx
│
├── pages/
│   ├── About/About.jsx
│   ├── GalleryPage/GalleryPage.jsx
│   ├── girls/GirlsCouture.jsx
│   ├── night/Night.jsx
│   ├── office/Office.jsx
│   ├── summer/Summer.jsx
│   ├── CartPage/CartPage.jsx
│   ├── CartPage/checkout.jsx
│   └── ContactPage/ContactPage.jsx
│
└── assets/
    ├── poze-site/...
        └── AcasaP/...
        └── atelier/...
        └── Carusel/...
        └── colectiiseara/... ( de la Produs1 - Produs11 )
        └── Designer/...
        └── instagram/...
        └── kids/... ( de la Produs1 - Produs8 )
        └── Logo/...
        └── office/...( de la Produs1 - Produs5 )
        └── summer/... ( de la Produs1 - Produs4 )
        
        
Tehnologii folosite

React – pentru structurarea componentelor reutilizabile.
React Router DOM – pentru navigare între pagini (<Route>, useNavigate, Link).
React Context API – gestionarea stării globale a coșului de cumpărături (CartContext).
Hooks:
useState, useEffect – pentru gestionarea stărilor și efectelor secundare.
useContext – pentru accesarea stării globale.
useLocalStorage (hook custom) – persistă datele în localStorage.
CSS modules (ex: Header.module.css) – pentru stilizare locală (scop limitat la componentă).
CSS global (global.css) – pentru stiluri aplicabile întregii aplicații.
react-icons – pentru pictograme (Facebook, Instagram, Visa etc.).
react-slick – carusel de imagini în componenta HeroSlider.

💡 De ce am ales această arhitectură
Componentizare – fiecare funcționalitate este izolată într-o componentă, ușurând testarea și reutilizarea.
CSS Modules – evită conflictele de clase CSS și permit stilizare scoped.
Manual imports – am ales importuri manuale pentru a controla granular ce fișiere se includ, reducând bundle-ul.
Alternativ, puteam folosi un index.js barrel file în fiecare folder pentru exporturi automate, dar asta ar crește bundle-ul și ar putea introduce circular imports.
React Router – mai flexibil decât alternative ca Next.js (care este opinionated) sau Gatsby (mai bun pentru conținut static, nu pentru CRUD cu API local).
