import { useState } from 'react'
import './App.css'
import MovieLanguages from './components/MovieLanguages'


function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <MovieLanguages/>
        </>
    )
}

export default App
