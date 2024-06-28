import { Carousel } from "flowbite-react";

function Corousel() {
  return (
    <div className="h-44">
      <Carousel slideInterval={3000} indicators={false} >
        <div className="space-y-2 flex flex-col justify-center items-center">
                <h1 className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Estrategia</h1>
                <h2 className="text-3xl font-bold tracking-tighter text-white">Estrategia Naval</h2>
                <p className="text-muted-foreground rounded-lg bg-gray-100 px-3 py-1 ">
                  Despliega tus barcos con cuidado y anticipa los movimientos del enemigo para ganar la batalla.
                </p>
              </div>
              <div className="space-y-2 flex flex-col justify-center items-center">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Habilidad</div>
                <h2 className="text-3xl font-bold tracking-tighter text-white">Puntería Precisa</h2>
                <p className="text-muted-foreground rounded-lg bg-gray-100 px-3 py-1">
                  Apunta con precisión y hunde los barcos enemigos con tiros certeros.
                </p>
              </div>
              <div className="space-y-2 flex flex-col justify-center items-center">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Multijugador</div>
                <h2 className="text-3xl font-bold tracking-tighter text-white">Combate en Línea</h2>
                <p className="text-muted-foreground rounded-lg bg-gray-100 px-3 py-1">
                  Compite contra jugadores de todo el mundo en partidas emocionantes.
                </p>
              </div>
      </Carousel>
    </div>
  );
}

export default Corousel;