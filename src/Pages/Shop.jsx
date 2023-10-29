import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popoular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter.jsx/NewsLetter'
export default function Shop() {
  return (
    <div>
        <Hero />
        <Popoular />
        <Offers />
        <NewCollections />
        <NewsLetter />
    </div>
  )
}
