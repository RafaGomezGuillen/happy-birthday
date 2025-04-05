import React from "react";

// Import images
import image1 from "../assets/img/img1.JPG";
import image2 from "../assets/img/img2.JPG";
import image3 from "../assets/img/img3.jpg";
import image4 from "../assets/img/img4.JPG";
import image5 from "../assets/img/img5.jpg";
import image6 from "../assets/img/img6.JPG";
import image7 from "../assets/img/img7.JPG";

// Import Framer Motion
import { motion } from "framer-motion";

export const Landing = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7];
  const title = "🎉 ¡Feliz cum Andrew! 🎂";
  const wish =
    "¡Que todos tus deseos se hagan realidad y te recuperes de toz crónica 🎁!";

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-400 via-yellow-300 to-green-400 flex flex-col items-center justify-center overflow-hidden p-4">
      <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-10 text-center animate-bounce">
        {title}
      </h1>

      <div className="relative bg-white w-full max-w-4xl h-96 overflow-hidden rounded-3xl shadow-2xl border-4 border-white">
        <motion.div
          className="flex w-max h-full z-20"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: "linear",
          }}
        >
          {[
            ...images,
            ...images,
            ...images,
            ...images,
            ...images,
            ...images,
          ].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`img-${i}`}
              className="w-64 h-96 object-cover flex-shrink-0 border-r-4 border-white z-20"
            />
          ))}
        </motion.div>
      </div>

      <p className="mt-10 text-white text-xl md:text-2xl font-semibold text-center bg-black/30 px-6 py-3 rounded-xl shadow-lg">
        {wish}
      </p>
    </div>
  );
};
