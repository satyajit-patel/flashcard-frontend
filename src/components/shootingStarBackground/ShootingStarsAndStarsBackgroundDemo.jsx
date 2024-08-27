"use client";
import React, { useState } from 'react';
import { ShootingStars } from "./shooting-stars";
import { StarsBackground } from "./stars-background";
import axios from 'axios';

const createFlashcard = async (flashcard) => {
  const response = await axios.post(`${import.meta.env.VITE_URL_GLOBAL}/todo/todos`, flashcard);
  return response.data;
};

export function ShootingStarsAndStarsBackgroundDemo({ setFlashcards }) {
  const [quote, setQuestion] = useState('');
    const [poet, setAnswer] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newFlashcard = await createFlashcard({ quote, poet });
        console.log(newFlashcard.data);
        if(newFlashcard.quote == quote) {
            alert("data created");
        }
        setFlashcards(prevFlashcards => [...prevFlashcards, newFlashcard]);
        setQuestion('');
        setAnswer('');
    };

  return (
    (<div
      className="h-[40rem] rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full">
      

      <div className="admin-dashboard bg-moonGlow h-[250px] w-[450px]">
            <h2 className='text-slate-400'>Admin Dashboard</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={quote}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Question"
                    required
                />
                <input
                    type="text"
                    value={poet}
                    onChange={(e) => setAnswer(e.target.value)}
                    placeholder="Answer"
                    required
                />
                <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                    type="submit"
                >
                    Add Flashcard
                </button>
            </form>
        </div>


      
      <ShootingStars />
      <StarsBackground />
    </div>)
  );
}
