import { useState } from 'react'
import './App.css'
import MovieLanguages from './components/MovieLanguages'
import PremiereMonths from './components/PremiereMonths'
import MovieLength from './components/MovieLength'
import MovieGenre from './components/MovieGenre'


function App() {
    const [count, setCount] = useState(0)

    return (
        <main>
            <MovieLanguages/>
            <PremiereMonths/>
            <MovieLength/>
            <MovieGenre/>
        </main>
    )
}

export default App
