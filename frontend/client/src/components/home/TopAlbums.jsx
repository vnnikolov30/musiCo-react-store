import React from 'react'
import ImageSlider from './ImageSlider'

function TopAlbums() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
    <div className="text-left">
      <h1 className="text-1xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Top Albums
      </h1>

      <ImageSlider/>
      
    </div>
  </div>
  )
}

export default TopAlbums