'use client'
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'


export const EmblaCarousel = () => {
const [emblaRef,  emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
}, [emblaApi])

const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
}, [emblaApi])

return (
    <div className="embla">
        
        <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
                {/* <button className="embla__prev" onClick={scrollPrev}>
                    Prev
                </button> */}
                <div className="embla__slide">
                    <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                        <Image 
                            src="/images/hero/slider_1.jpg"
                            className="rounded-lg"
                            alt="Slider Desayuno"
                            width={500}
                            height={500}
                        />                  
                    </div>
                </div>
                <div className="embla__slide">
                    <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                        <Image 
                            src="/images/hero/slider_2.jpg"
                            className="rounded-lg"
                            alt="Slider Desayuno"
                            width={500}
                            height={500}
                        />                  
                    </div>
                </div>
                <div className="embla__slide">
                    <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                        <Image 
                            src="/images/hero/slider_3.jpg"
                            className="rounded-lg"
                            alt="Slider Desayuno"
                            width={500}
                            height={500}
                        />                  
                    </div>
                </div>
                {/* <button className="embla__next" onClick={scrollNext}>
                    Next
                </button> */}
            </div>
        </div>
    </div>
)
}
