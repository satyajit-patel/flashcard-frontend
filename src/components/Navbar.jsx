import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  const handleHome = () => {
    navigate('/Flashcard')
  }
  const handleCreate = () => {
    navigate('/AdminDashboard')
  }
  const handleDelete = () => {
    navigate('/AdminDashboardDelete')
  }
  const handleUpdate = () => {
    navigate('/AdminDashboardUpdate')
  }
  const handleLogout = () => {
    navigate('/Signin')
  }
  const handleAllFlashcards = () => {
    navigate('/SeeAllCards')
  }

  return (
    <div className="fixed top-0 left-0 w-full bg-cobalt shadow-md z-50">
      <div className="mx-auto flex flex-wrap max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex space-x-4">
          <button 
            onClick={handleHome}
            className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              Home
            </div>
          </button>
        </div>
        <div className="flex space-x-4">
          <button className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
            <a href="https://en.wikipedia.org/wiki/Flashcard" target="_blank" rel="Wiki">Wiki</a>
          </button>

          <button 
            onClick={handleCreate}
            className="px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
            Create
          </button>
          <button
            onClick={handleAllFlashcards} 
            className="px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
            Read
          </button>
          <button
            onClick={handleUpdate} 
            className="px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
            Update
          </button>
          <button
            onClick={handleDelete} 
            className="px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
            Delete
          </button>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={handleLogout} 
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Logout
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
