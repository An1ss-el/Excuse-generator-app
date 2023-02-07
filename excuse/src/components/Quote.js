import '../styles/quote.css'
import { useState, useEffect } from 'react'
import axios from 'axios'


function Quote() {
    const [excuse, setExcuse] = useState([])
    const tag = []
    // The initial value
    useEffect(() => {
        if (excuse.length === 0) {
            const initialExcuse = { id: 97, Excuse: "I basically just did what my PM told me to do.", Tag: "disagreement " }
            setExcuse(initialExcuse)
        }
    }, [excuse.length])

    // Call the API
    const lazy = () => {
        axios.get(`https://api.lazydesignerexcuses.com/random/${tag}`).then((res) => {
            setExcuse(res.data)
        })
    }

    return (
        // Consume the API
        <>
            <div className="card-quote"  >
                <div className="content">
                    <p id="advice-id">
                        EXCUSE #{excuse.id}</p>
                    <div className="quote">
                        <p id="quote">“ {excuse.Excuse} ”</p>
                    </div>
                    <p id='tag'>{(excuse.Tag)}</p>
                    <button className="btn" onClick={lazy} >
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733" />
                        </svg>
                    </button>

                </div>
            </div>
        </>

    )
}


export default Quote
