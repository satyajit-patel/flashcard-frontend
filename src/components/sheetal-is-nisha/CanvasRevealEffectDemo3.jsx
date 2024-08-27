"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./canvas-reveal-effect";

import { useState } from 'react';

export function CanvasRevealEffectDemo3({ arr=[] }) {
  const [hovered, setHovered] = React.useState(false);

  if(arr.length == 0) {
    return (
        <div className="flex flex-wrap justify-center items-center">
            <div className="bg-red-600 h-60 text-white">
                No data found
            </div>
        </div>
    );
  }

  const [index, setIndex] = useState(0);
  const [isFlip, setIsFlip] = useState(false);
  const nextCard = () => {
      setIsFlip(false);
      setIndex((i) => (i+1) % arr.length);
  };
  const prevCard = () => {
      setIsFlip(false);
      setIndex((i) => ((i-1)+arr.length) % arr.length);
  };


  return (
    (<div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="h-[40rem] flex flex-col lg:flex-row overflow-hidden items-center justify-center bg-black w-full gap-4 mx-auto px-8 relative">
      <p
        className="md:text-2xl text-2xl font-medium text-center text-white relative z-20 max-w-2xl mx-auto">
        {/* With insomnia, nothing&apos;s real. Everything is far away. Everything
        is a copy, of a copy, of a copy */}

        <div className='flex flex-wrap justify-center items-center flex-col'>
            <div className={`flashcard ${isFlip ? 'isFlip' : ''}`}>
                <div className="front">{arr[index].quote}</div>
                <div className="back">{arr[index].poet}</div>
            </div>
            <div className='flex justify-evenly p-2'>
                <button onClick={prevCard} className="btn mx-2">Previous</button>
                <button onClick={() => setIsFlip(!isFlip)} className="btn mx-2">Flip</button>
                <button onClick={nextCard} className="btn mx-2">Next</button>
            </div>
        </div>

      </p>
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0">
            <CanvasRevealEffect
              animationSpeed={5}
              containerClassName="bg-transparent"
              colors={[
                [59, 130, 246],
                [139, 92, 246],
              ]}
              opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
              dotSize={2} />
          </motion.div>
        )}
      </AnimatePresence>
      {/* Radial gradient for the cute fade */}
      <div
        className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
    </div>)
  );
}
