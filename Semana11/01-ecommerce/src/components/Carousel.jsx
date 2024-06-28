import { useState } from "react";
import { Transition } from "@headlessui/react";

const Carousel = () => {
  const images = [
    "https://images.unsplash.com/photo-1615680022647-99c397cbcaea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://peru21.pe/resizer/ZKVvKvF5eTNxs__kyw-xK-yJ-HQ=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/ZHOTPY3VTRCAZNYKF6MVJSSLAU.jpg",
    "https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];

  const [show, setShow] = useState(true);
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((index + 1) % images.length);
  }

  const previousImage = () => {
    setIndex((index - 1 + images.length) % images.length);
  }

  return (
    // contenedor principal
    <div className="relative w-full h-full overflow-hidden">
      {/* contenedor Transition e imagenes */}
      <div className="relative w-full h-auto">
        <img
          src={images[index]}
          alt={`Imagen ${index + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
      {/* controles */}
      <button
        onClick={previousImage}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-sky-600 text-white font-bold p-4 text-lg">
        {"<"}
      </button>
      <button
        onClick={nextImage}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-sky-600 text-white font-bold p-4 text-lg">
        {">"}
      </button>
    </div>
  )
}

export default Carousel