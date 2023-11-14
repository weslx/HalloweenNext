import Image from "next/image";
import style from "./styles.module.css";

export default function WitchGame() {
  return (
    <div className={style.fundo}>
      <Image src="./witch.svg" alt="witch" width={100} height={100} />
    </div>
  );
}
