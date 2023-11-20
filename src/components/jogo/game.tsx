"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./styles.module.css";

export default function WitchGame() {
  const [contadorClicques, setContadorClicques] = useState(0);
  const [mensagemFinal, setMensagemFinal] = useState(false);

  const handleImageClick = async (
    event: React.MouseEvent<HTMLImageElement>
  ) => {
    const target = event.target as HTMLImageElement;
    if (!target.classList.contains("encontrada")) {
      target.classList.add("encontrada");
      setContadorClicques(contadorClicques + 1);

      if (contadorClicques + 1 === 10) {
        setMensagemFinal(true);
        // Enviar o valor para a API
        const response = await fetch("/api/cashback", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ cashback: contadorClicques + 1 }),
        });
        const data = await response.json();
        alert(data);
      }
    }
  };

  const reiniciarJogo = () => {
    document.querySelectorAll(".hidden-object").forEach(function (element) {
      element.classList.remove("encontrada");
    });

    setContadorClicques(0);
    setMensagemFinal(false);
  };

  return (
    <div className={styles.fundo}>
      <Image
        src="/witch.svg"
        alt="witch"
        width={100}
        height={100}
        onClick={handleImageClick}
        className={`${styles.hiddenobject} ${styles.hiddenobject1}`}
        style={{ position: "absolute" }}
      />
      <Image
        src="/witch.svg"
        alt="witch"
        width={100}
        height={100}
        onClick={handleImageClick}
        className={`${styles.hiddenobject} ${styles.hiddenobject2}`}
        style={{ position: "absolute" }}
      />
      <Image
        src="/witch.svg"
        alt="witch"
        width={100}
        height={100}
        onClick={handleImageClick}
        className={`${styles.hiddenobject} ${styles.hiddenobject3}`}
        style={{ position: "absolute" }}
      />
      <Image
        src="/witch.svg"
        alt="witch"
        width={100}
        height={100}
        onClick={handleImageClick}
        className={`${styles.hiddenobject} ${styles.hiddenobject4}`}
        style={{ position: "absolute" }}
      />
      <Image
        src="/witch.svg"
        alt="witch"
        width={100}
        height={100}
        onClick={handleImageClick}
        className={`${styles.hiddenobject} ${styles.hiddenobject5}`}
        style={{ position: "absolute" }}
      />
      <Image
        src="/witch.svg"
        alt="witch"
        width={100}
        height={100}
        onClick={handleImageClick}
        className={`${styles.hiddenobject} ${styles.hiddenobject6}`}
        style={{ position: "absolute" }}
      />
      <Image
        src="/witch.svg"
        alt="witch"
        width={100}
        height={100}
        onClick={handleImageClick}
        className={`${styles.hiddenobject} ${styles.hiddenobject7}`}
        style={{ position: "absolute" }}
      />
      <Image
        src="/witch.svg"
        alt="witch"
        width={100}
        height={100}
        onClick={handleImageClick}
        className={`${styles.hiddenobject} ${styles.hiddenobject8}`}
        style={{ position: "absolute" }}
      />
      <Image
        src="/witch.svg"
        alt="witch"
        width={100}
        height={100}
        onClick={handleImageClick}
        className={`${styles.hiddenobject} ${styles.hiddenobject9}`}
        style={{ position: "absolute" }}
      />
      <Image
        src="/witch.svg"
        alt="witch"
        width={100}
        height={100}
        onClick={handleImageClick}
        className={`${styles.hiddenobject} ${styles.hiddenobject10}`}
      />
      {mensagemFinal && (
        <div className={styles.mensagemfinal}>Mensagem Final</div>
      )}
      <div id="contador" className={styles.contador}>
        Contagem de Cliques: {contadorClicques}
      </div>
      <button className={styles.reiniciar} onClick={reiniciarJogo}>
        Reiniciar Jogo
      </button>
    </div>
  );
}
