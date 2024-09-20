"use client"
import { useState } from "react";


export default function Gallery({ images }) {
  const [imageIndex, setImageIndex] = useState(0);

  function loopArrayBounds(unadjustedIndex) {
    const imageCount = images.length

    if (unadjustedIndex >= imageCount) {
      return unadjustedIndex - imageCount
    }

    if (unadjustedIndex < 0) {
      return unadjustedIndex + imageCount
    }

    return unadjustedIndex
  }

  function onNextClicked() {
    setImageIndex(
      loopArrayBounds(imageIndex + 1)
    )
  }

  function onPreviousClicked() {
    setImageIndex(
      loopArrayBounds(imageIndex - 1)
    )
  }

  return (
    <div>
      <img src={images[imageIndex]}/>
      <button onClick={onPreviousClicked}>
	Previous	
      </button>
      <button onClick={onNextClicked}>
	Next
      </button>
    </div>
  )
}

