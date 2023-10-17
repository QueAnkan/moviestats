import { useState } from 'react'
import './App.css'
import MovieLanguages from './components/MovieLanguages'
import PremiereMonths from './components/PremiereMonths'


function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <MovieLanguages/>
            <PremiereMonths/>
        </>
    )
}

export default App
