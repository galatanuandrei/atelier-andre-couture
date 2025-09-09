import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Buton.module.css";

export default function Buton({ targetRoute = "/" }) {
  const navigate = useNavigate();

  return (
    <button
      className={styles.backBtn}
      onClick={() => navigate(targetRoute)}
    >
      ←
    </button>
  );
}
