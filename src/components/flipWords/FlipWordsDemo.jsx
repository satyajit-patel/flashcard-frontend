import React from "react";
import { FlipWords } from "./flip-words";
import { useState } from "react";
import axios from 'axios';


export function FlipWordsDemo({ setFlashcards }) {
  const words = ["Create", "Generate", "Build", "Develop", "Forge", "Craft"];
  const createFlashcard = async (flashcard) => {
      const response = await axios.post(`${import.meta.env.VITE_URL_GLOBAL}/todo/todos`, flashcard);
      return response.data;
  };
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
    (<div className="h-[40rem] flex flex-col justify-center items-center px-4 bg-slate-200">
      <div
        className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Please
        <FlipWords words={words} /> <br />
        informatic content and learn by sharing..
      </div>
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
    </div>)
  );
}
