import React from 'react';

const LandingPage = () => {
  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <header className='bg-[#071952] text-primary-foreground py-6 px-4 md:px-6'>
        <div className='container flex flex-col items-center gap-4 text-center'>
          <h1 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-[#FAECC8]'>BattleShip</h1>
          <p className="max-w-[700px] text-lg md:text-xl">
              Sumérjete en la emocionante batalla naval en este juego de estrategia y habilidad. Hunde los barcos enemigos
              y domina el océano.
            </p>
        </div>
      </header>
      <main className='flex-1'>
      <section className="w-full py-12 md:py-24 lg:py-32 " >
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Estrategia</div>
                <h2 className="text-3xl font-bold tracking-tighter text-white">Estrategia Naval</h2>
                <p className="text-muted-foreground rounded-lg bg-gray-100 px-3 py-1 ">
                  Despliega tus barcos con cuidado y anticipa los movimientos del enemigo para ganar la batalla.
                </p>
              </div>
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Habilidad</div>
                <h2 className="text-3xl font-bold tracking-tighter text-white">Puntería Precisa</h2>
                <p className="text-muted-foreground rounded-lg bg-gray-100 px-3 py-1">
                  Apunta con precisión y hunde los barcos enemigos con tiros certeros.
                </p>
              </div>
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Multijugador</div>
                <h2 className="text-3xl font-bold tracking-tighter text-white">Combate en Línea</h2>
                <p className="text-muted-foreground rounded-lg bg-gray-100 px-3 py-1">
                  Compite contra jugadores de todo el mundo en partidas emocionantes.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#EBF4F6]" style={{backgroundImage: "url('./fondoLanding.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',}}>
          <div className="container px-4 md:px-6 text-center">
            <div className="space-y-4 flex flex-col items-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                ¡Juega BattleShip Ahora!
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Prueba el juego gratis y comienza a hundir barcos en emocionantes batallas navales !
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Jugar YA
                </a>
                
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;