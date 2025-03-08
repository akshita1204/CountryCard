
import { useState } from 'react'
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import CountriesList from './CountriesList'
import { BrowserRouter, Routes, Route, Outlet, useOutletContext } from 'react-router-dom';
function Home() {
const [query,setQuery]=useState("")
const [isdark]=useOutletContext()
  return (
    <main className={`${isdark ? 'dark' : '' }`}>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery} />
          <SelectMenu />
        </div>
        {query === 'unmount' ? '' : <CountriesList query={query} />}
      </main>
  )
}

export default Home