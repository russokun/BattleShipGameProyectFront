import React from 'react';
import Carousel from '../components/Carousel';
import Link from '../components/Link';

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-[#071952] flex flex-col items-center justify-center  text-primary-foreground py-6 px-4 md:px-6">
        <div className="container flex flex-col items-center gap-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-[#FAECC8]">
            BattleShip
          </h1>
          <p className="max-w-[700px] text-lg md:text-xl text-[#FAECC8]">
            Dive into the thrilling naval battle in this game of strategy and skill. Sink enemy ships and dominate the ocean.
          </p>
        </div>
      </header>
      <div className="flex-grow">
        <section className='bg-[#088395]'>
          <Carousel />
        </section>
        <section className="flex flex-col items-center py-12 md:py-24 lg:py-32 bg-[#EBF4F6] min-h-[450px]" style={{
          backgroundImage: "url('../fondoLanding.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <div className="container flex px-4 md:px-6 text-center justify-end items-end min-h-full">
            <div className="flex flex-col p-4 gap-4 justify-center pt-10 bg-[#5342255f] border-2 min-w-full">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#071952]">
                PLAY BATTLESHIP NOW!
              </h2>
              <p className="self-center text-[#071952] md:text-xl bg-slate-50 rounded-lg px-4 py-2">
                Try the game for free and start sinking ships in thrilling naval battles!
              </p>
              <div className='flex justify-center gap-8'>

              <button className="flex justify-center gap-4">
                <Link
                  to="/login"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Login
                </Link>
              </button>
              <button className="flex justify-center gap-4">
                <Link
                  to="/register"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Register
                </Link>
              </button>
                </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default LandingPage;
