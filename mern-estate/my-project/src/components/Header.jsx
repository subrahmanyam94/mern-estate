import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <header  className='bg-slate-200 shadow-md '>
      <div className='flex  justify-between items-center max-w-7xl mx-auto px-4 py-3'>
      <Link to="/">
      <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
        <span className='text-slate-700'>Sahand </span>
        <span className='text-slate-500'>Estate </span>
      </h1>
      </Link>
      <form className='bg-slate-100 p-3 rounded-lg flex items-center gap-2'>
        <input type='text' placeholder='Search...' 
        className='bg-transparent focus: outline-none w-24 sm:w-64'/>
        <FaSearch className='text-slate-500'/>  
      </form>
      <ul className=' flex gap-4'>
        <li className='hidden sm:inline text-slate-700 hover:underline'>
          <Link to="/">Home</Link>
        </li>
        <li className='hidden sm:inline text-slate-700 hover:underline'>
          <Link to="/about">About</Link>
        </li>
        <li className='text-slate-700 hover:underline'>
          <Link to="/sign-in">Sign In</Link>
        </li>
      </ul>
      </div>
    </header>
  )
}
