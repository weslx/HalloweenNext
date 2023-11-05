import Link from "next/link";

export default function Public() {
  return (
    <div className="h-screen font-[3vh] font-[Sweet Scream] bg-[rgb(40,40,40)] flex items-center justify-center">
      <div className="w-[50vw] h-[50vh] bg-[rgb(105,0,0)] rounded-[10%] border-[1vh] border-[rgb(255,140,0)] animate-colorchange">
        <div className="grid items-center justify-center text-[rgb(255,140,0)]">
          <h1>Teste login</h1>
          <p>faça login para continuar</p>
          <Link href={"/loja"}>
            <button className="w-[20vh] h-[10vh] bg-[rgb(255,140,0)] text-white rounded-[10vh]">Entrar</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
