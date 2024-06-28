import React from 'react'
import Corousel from "../components/Carousel"
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
      <main className='flex flex-col'>
      <Corousel></Corousel>
      </main>
      <footer  className="w-full py-12 md:py-24 lg:py-32 bg-[#EBF4F6] min-h-[450px] bottom-0" style={{
          backgroundImage: "url('../fondoLanding.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',}}>

          <div className="container px-4 md:px-6 text-center">
            <div className="space-y-4 flex flex-col items-end ">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                ¡Juega BattleShip Ahora!
              </h2>
              <p className="max-w-[500px] text-muted-foreground md:text-xl">
                Prueba el juego gratis y comienza a hundir barcos en emocionantes batallas navales !
              </p>
              
              
            </div>
            <div className='flex gap-4 justify-evenly pt-10'>
              <button className="flex justify-center gap-4">
                <a
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  
                >LogIn</a>  
              </button>
              <button className="flex justify-center gap-4">
                <a
                  href="/auth"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  
                >SignUp</a>  
              </button>
              </div>
          </div>
      </footer >
    </div>
  )
}

export default LandingPage