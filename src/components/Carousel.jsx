import { Carousel } from "flowbite-react";

function CarouselComponent() {
  return (
    <div className="h-44">
      <Carousel slideInterval={3000} indicators={false} >
        <div className="space-y-2 flex flex-col justify-center items-center">
          <h1 className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Tactics</h1>
          <h2 className="text-3xl font-bold tracking-tighter text-white">Naval Strategy</h2>
          <p className="text-muted-foreground rounded-lg bg-gray-100 px-3 py-1">
            Deploy your ships carefully and anticipate enemy movements to win the battle.
          </p>
        </div>
        <div className="space-y-2 flex flex-col justify-center items-center">
          <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Skill</div>
          <h2 className="text-3xl font-bold tracking-tighter text-white">Precision Shooting</h2>
          <p className="text-muted-foreground rounded-lg bg-gray-100 px-3 py-1">
            Aim precisely and sink enemy ships with accurate shots.
          </p>
        </div>
        <div className="space-y-2 flex flex-col justify-center items-center">
          <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Multiplayer</div>
          <h2 className="text-3xl font-bold tracking-tighter text-white">Online Combat</h2>
          <p className="text-muted-foreground rounded-lg bg-gray-100 px-3 py-1">
            Compete against players from around the world in thrilling matches.
          </p>
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
