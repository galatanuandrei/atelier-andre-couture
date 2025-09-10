import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "./Night.module.css";
import Buton from "../../Components/Buton/Buton";



import p1_1 from "../../assets/poze-site/colectiiseara/Produs1/1.jpg";
import p1_2 from "../../assets/poze-site/colectiiseara/Produs1/2.jpg";
import p2_1 from "../../assets/poze-site/colectiiseara/Produs2/3.jpg";
import p2_2 from "../../assets/poze-site/colectiiseara/Produs2/4.jpg";
import p2_3 from "../../assets/poze-site/colectiiseara/Produs2/5.jpg";
import p3_1 from "../../assets/poze-site/colectiiseara/Produs3/6.jpg";
import p3_2 from "../../assets/poze-site/colectiiseara/Produs3/7.jpeg";
import p3_3 from "../../assets/poze-site/colectiiseara/Produs3/8.jpg";
import p3_4 from "../../assets/poze-site/colectiiseara/Produs3/9.jpg";
import p3_5 from "../../assets/poze-site/colectiiseara/Produs3/10.jpg";
import p3_6 from "../../assets/poze-site/colectiiseara/Produs3/11.jpg";
import p4_1 from "../../assets/poze-site/colectiiseara/Produs4/12.jpg";
import p5_1 from "../../assets/poze-site/colectiiseara/Produs5/15.jpg";
import p6_1 from "../../assets/poze-site/colectiiseara/Produs6/17.jpeg";
import p7_1 from "../../assets/poze-site/colectiiseara/Produs7/20.jpeg";
import p8_1 from "../../assets/poze-site/colectiiseara/Produs8/24.jpeg";
import p9_1 from "../../assets/poze-site/colectiiseara/Produs9/27.jpg";
import p10_1 from "../../assets/poze-site/colectiiseara/Produs10/30.jpg";
import p11_1 from "../../assets/poze-site/colectiiseara/Produs11/31.jpeg";
import p4_2 from "../../assets/poze-site/colectiiseara/Produs4/13.jpg";
import p4_3 from "../../assets/poze-site/colectiiseara/Produs4/14.jpeg";
import p5_2 from "../../assets/poze-site/colectiiseara/Produs5/16.jpg";
import p6_2 from "../../assets/poze-site/colectiiseara/Produs6/18.jpeg";
import p6_3 from "../../assets/poze-site/colectiiseara/Produs6/19.jpg";
import p7_2 from "../../assets/poze-site/colectiiseara/Produs7/21.jpeg";
import p7_3 from "../../assets/poze-site/colectiiseara/Produs7/22.jpeg";
import p7_4 from "../../assets/poze-site/colectiiseara/Produs7/23.jpg";
import p8_2 from "../../assets/poze-site/colectiiseara/Produs8/25.jpeg";
import p8_3 from "../../assets/poze-site/colectiiseara/Produs8/26.jpeg";
import p9_2 from "../../assets/poze-site/colectiiseara/Produs9/28.jpg";
import p9_3 from "../../assets/poze-site/colectiiseara/Produs9/29.jpg";


const nightProducts = [
  {
    id: 1,
    title: "Rochie lungă burgundy",
    description: `Rochie lunga realizata din matase naturala, cu fusta plisata manual si talie marcata cu betelie. Bustul este simplu si elegant, completat de maneci lungi transparente cu mansete. Inchidere discretă la spate cu fermoar ascuns. Croiala fluidă avantajeaza orice silueta si ofera confort in purtare.
Compozitie: 100% matase naturala.
Disponibila doar la comanda, in diverse culori si marimi.
Aceasta rochie fucsia este o poveste de feminitate si rafinament. Pliseurile fine danseaza la fiecare pas, iar manecile transparente adauga un aer romantic si delicat. Este creatia perfecta pentru o aparitie memorabila, in care eleganta se imbina cu naturaletea absoluta a matasii.`,
    images: [p1_1, p1_2],
    price: 200
  },
  {
    id: 2,
    title: "Rochie midi roz",
    description: `Rochie midi din matase naturala, cu bust tip corset si fusta plisata manual. Croiala midi ii confera un aer rafinat si modern, iar talia marcata subliniaza silueta. Inchidere la spate cu fermoar ascuns. Perfecta pentru evenimente de zi sau de seara.
Compozitie: 100% matase naturala. Disponibila doar la comanda, in diverse culori si marimi.
Aceasta rochie roz prafuit este definitia grației. Bustul elegant, lipsit de bretele, lasa umerii sa straluceasca natural, in timp ce pliseurile delicate creeaza o miscare fluida. Este rochia care te face sa te simti lejera, dar spectaculoasa in acelasi timp, o alegere ce transforma fiecare moment intr-o aparitie de neuitat.`,
    images: [p2_1, p2_2, p2_3],
    price: 180
  },
  {
    id: 3,
    title: "Rochie cu fustă și corset",
    description: `Rochie eleganta din matase naturala, cu corset plisat manual si fusta ampla, fluida. Maneci scurte, delicate, care completeaza linia feminina a bustului. Inchidere la spate cu fermoar ascuns. Croiala este gandita sa evidentieze talia si sa ofere un echilibru intre rafinament si confort.
Compozitie: 100% matase naturala. Disponibila doar la comanda, in diverse culori si marimi.
Aceasta rochie este expresia perfectiunii intre delicatete si forta. Corsetul plisat contureaza silueta cu gratie, iar manecile scurte ii dau o nota romantica si jucausa. Este rochia care vorbeste despre incredere, feminitate si eleganta atemporala, o piesa ce transforma fiecare aparitie intr-o amintire pretioasa.`,
    images: [p3_1, p3_2, p3_3, p3_4, p3_5, p3_6],
    price: 250
  },
  {
    id: 4,
    title: "Rochie drapată cu fustă voal",
    description: `Rochie rosie din matase naturala, cu corset drapat manual si fusta din voal tip a-line. Bretelele delicate si drapajul orizontal subliniaza talia si decolteul in forma de inima, evidentiind linia feminina a bustului. Inchidere la spate cu fermoar ascuns. Croiala este gandita sa evidentieze talia si sa ofere un echilibru intre rafinament si confort.
Compozitie: 100% matase naturala. Disponibila doar la comanda, in diverse culori si marimi.`,
    images: [p4_1,p4_2,p4_3],
    price: 190
  },
  {
    id: 5,
    title: "Fustă burgundy plisată",
    description: `Fusta midi realizata din matase naturala, cu pliseuri fine lucrate manual. Talia este marcata, iar croiala fluida ofera libertate de miscare si un aspect elegant. Este o piesa versatila, ce poate fi purtata atat la ocazii speciale, cat si in tinute de zi sofisticate.
Compozitie: 100% matase naturala. Disponibila doar la comanda, in diverse culori si marimi.
Aceasta fusta burgundy este un omagiu adus feminitatii discrete si rafinate. Pliseurile ei se misca usor la fiecare pas, oferind o eleganta naturala si o nota subtila de seductie. O piesa care adauga profunzime si caracter oricarei tinute, facandu-te sa te simti increzatoare si sofisticata.`,
    images: [p5_1,p5_2],
    price: 120
  },
  {
    id: 6,
    title: "Rochie cu bretele fundă",
    description: `Aceasta rochie vine intr-o culoare indrazneata. Fusta midi realizata din matase naturala, cu pliseuri fine lucrate manual. Talia este marcata de corset, iar croiala fluida ofera libertate de miscare si un aspect elegant. Este o piesa versatila, ce poate fi purtata atat la ocazii speciale, cat si in tinute de zi sofisticate. Inchidere la spate cu fermoar ascuns.
Compozitie: 100% matase naturala. Disponibila doar la comanda, in diverse culori si marimi.`,
    images: [p6_1,p6_2,p6_3],
    price: 230
  },
  {
    id: 7,
    title: "Rochie cu fustă dreaptă cu trenă",
    description: `Rochia este realizata din tafta de calitate, un material distins folosit pentru rochii de ocazie, ce se remarca prin luciul sau subtil ce-i ofera o nota de eleganta deosebita. Rochia prezinta un corset cu decolteu drept, bretea cu funda dubla, rochie tip sirena cu crapatura si trena. Este o rochie deosebita, pentru un eveniment deosebit. Inchidere la spate cu fermoar ascuns.
Compozitie: 100% poliamida. Disponibila pe baza de comanda, intr-o larga varietate de culori.`,
    images: [p7_1,p7_2,p7_3,p7_4],
    price: 270
  },
  {
    id: 8,
    title: "Rochie cu fulgi de struț",
    description: `Rochie cu corset drapat, forma de scoica, fara bretele, cu fusta dreapta si terminatie din fulgi de strut. Este o rochie deosebita, pentru un eveniment deosebit. Rochia este realizata din tafta de calitate, un material distins folosit pentru rochii de ocazie, ce se remarca prin luciul sau subtil ce-i ofera o nota de eleganta deosebita. Inchidere la spate cu fermoar ascuns.
Compozitie: 100% poliamida. Disponibila pe baza de comanda, intr-o larga varietate de culori.`,
    images: [p8_1,p8_2,p8_3],
    price: 220
  },
  {
    id: 9,
    title: "Rochie cu broderie florală",
    description: `Rochie eleganta cu corset "V" si cu fusta din tulle voluminoasa si diafana, care confera miscare si gratie la fiecare pas. Talie marcata subtil pentru a evidentia silueta, iar bustul pastreaza o linie simpla si rafinata. Broderia florala aplicata manual adauga detalii delicate si sofisticate. Bretelele delicate completeaza armonios designul, iar inchiderea discretă la spate cu fermoar ascuns pastreaza linia impecabila a croielii. Croiala fluida avantajeaza orice silueta si asigura confort in purtare.
Aceasta rochie este o declaratie de feminitate si eleganta atemporala. Tulle-ul diafan creeaza o prezenta delicata si visatoare, iar broderia florala ofera un detaliu artistic si romantic. Perfecta pentru momente speciale. Compozitie captuseala: 80% bumbac, 20% matase naturala. Compozitie exterior: 80% poliamida, 20% bumbac. Disponibila doar la comanda, adaptata pe masuri si culori preferate.`,
    images: [p9_1,p9_2,p9_3],
    price: 240
  },
  {
    id: 10,
    title: "Rochie lungă drapată Roz Prăfuit",
    description: `Realizata dintr-un material fluid si delicat, rochia cade gratios, evidentiind eleganta fiecarui pas. Croiala A-line a fustei, completata de crinolina in partea de jos, confera volum subtil si o silueta armonioasa, potrivita pentru orice forma a corpului. Drapajele fine de pe bust contureaza subtil decolteul in V, adaugand profunzime si rafinament. Inchidere discretă la spate cu fermoar ascuns.
O creatie romantica si delicata, aceasta rochie roz prafuit este alegerea ideala pentru aparitii memorabile. Drapajele elegante si volumul controlat al fustei inspira feminitate si rafinament, transformand fiecare moment intr-o adevarata poveste de eleganta si gratie. Se realizeaza exclusiv la comanda, personalizata pe masuri si culori diferite.
Compozitie: 100% poliamida.`,
    images: [p10_1],
    price: 200
  },
  {
    id: 11,
    title: "Rochie din paiete",
    description: `Rochie cu corset, decolteu inima si "V" in talie cu fusta scurta clos. Rochia este realizata din broderie eleganta cu paiete si margele. Captuseala este din bumbac 100%, ceea ce o face foarte confortabila la purtare. Vei straluci cu siguranta in aceasta rochie. Se realizeaza exclusiv la comanda, personalizata pe masuri si exista posibilitatea de a alege si o culoare diferita.
Compozitie exterior: 100% poliamida. Compozitie interior: 100% bumbac.`,
    images: [p11_1],
    price: 210
  },
];


export default function Night() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openPopup = (product) => {
    setSelectedProduct(product);
    setSelectedImageIndex(0);
  };

  const closePopup = () => setSelectedProduct(null);

  const prevImage = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? selectedProduct.images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) =>
      prev === selectedProduct.images.length - 1 ? 0 : prev + 1
    );
  };
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart(product);
    fetch("http://localhost:3008/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    }).catch(console.error);};

  return (
    <section className={styles.nightGallery}>
      <div style={{ marginBottom: "1rem" }}>
        <Buton targetRoute="/gallery" />
      </div>
      <h2>Colecția de Seară</h2>
      <div className={styles.grid}>
        {nightProducts.map((product) => (
          <div key={product.id} className={styles.card}>
            <img
              src={product.images[0]}
              alt={product.title}
              onClick={() => openPopup(product)}
            />
            <h3>{product.title}</h3>
            <p>Preț: {product.price} €</p>
            <button onClick={() => handleAddToCart(product)}>
              Adaugă în coș
            </button>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className={styles.popupOverlay} onClick={closePopup}>
          <div
            className={styles.popupContent}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedProduct.images[selectedImageIndex]}
              alt={selectedProduct.title}
              className={styles.popupImage}
            />
            {selectedProduct.images.length > 1 && (
              <div className={styles.imageNav}>
                <button onClick={prevImage}>&lt;</button>
                <button onClick={nextImage}>&gt;</button>
              </div>
            )}
            <h3>{selectedProduct.title}</h3>
            <p>{selectedProduct.description}</p>
            <p>Preț: {selectedProduct.price} €</p>
            <button className={styles.closeBtn} onClick={closePopup}>
              Închide
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
