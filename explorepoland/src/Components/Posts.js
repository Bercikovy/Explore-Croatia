import React from 'react'
import '../Stylesheets/Posts.scss'
import './Fonts/Fonts.scss'
import { MdArrowForward } from "react-icons/md";


export default function Posts() {
  return (
    <section className='postsWrapper'>

            <div className='postsContent'>
                <h2>Oto Propozycja Kilku Atrakcji</h2>
                <p>Wybranie zestawu najpiękniejszych miejsc w Polsce to bardzo trudne zadanie.
                   Nasz kraj oferuje tyle wspaniałych zakątków, że nie sposób zmieścić je w takiej skondensowanej formie.
                   Nie traktujcie więc tego zestawienia zbyt poważnie. Na pewno wiele miejsc w nim brakuje. Nie gniewajcie się.
                   To tylko subiektywna propozycja punktów do odwiedzenia. Więcej, o wiele więcej odkryjecie już na własną rękę, do czego gorąco zachęcamy, bo Polska jest piękna!</p>
            </div>
            <div className='newestPosts'>

    {/*Zmienić nazwe klas na bardziej semantyczne*/}
                <div className='postOne'><span>Lot Widokowy nad Tatrami <p>Zakopane</p></span></div>
                <div className='postTwo'><span>SPŁYW DUNAJCEM <p>Szczawnica</p></span></div>
                <div className='postThree'><span>Słowiński Park Narodowy <p>Smołdzino</p></span></div>
            </div>
            <div className='seeMore'><a href='#'>ZOBACZ WIĘCEJ</a><MdArrowForward fontSize={"20px"} color={"rgb(48,108,178)"}/> </div>
            
    </section>

    
  )
}
