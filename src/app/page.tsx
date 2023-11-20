import Link from "next/link";
import style from "./style.module.css";

export default function Public() {
  return (
    <div className={style.fundo}>
      <div className={style.borda}>
        <div>
          <h1>Faça login para continuar</h1>
          <p>Voce autoriza a coleta de dados</p>
          <Link href={"/loja"}>
            <button className={style.button}>Entrar</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
