import React from 'react'
import { Hero } from '../components/Hero/Hero'
import { Offer } from '../components/Offer/Offer'
import { Popular } from '../components/Popular/Popular'
import { NewCollections } from '../components/NewCollections/NewCollections'
import { NewsLetter } from '../components/NewsLetter/NewsLetter'
export const Shop = () => {
  return (
    <div>
      <Hero></Hero>
      <Popular></Popular>
      <Offer></Offer>
      <NewCollections></NewCollections>
      <NewsLetter></NewsLetter>
      
 
    </div>
  )
}
