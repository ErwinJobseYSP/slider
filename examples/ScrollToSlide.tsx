import type { FC, ComponentType } from 'react';
import React, { useRef } from 'react';
import { Slider } from '../src';
import type { SliderTypes } from '../src';

const ScrollToSlide: FC<typeof Slider extends ComponentType<infer T> ? Omit<T, 'children'> : never> = (sliderProps) => {
    const sliderRefObject = useRef<SliderTypes.API>(null);

    return (
        <>
            <h3>Slides with ScrollToSlide button</h3>
            <button onClick={() => sliderRefObject.current !== null && sliderRefObject.current.scrollToSlide(2, 'smooth')}>Scroll to slideIndex 2 (Slide 3)</button>
            <br/><br/>
            <Slider {...sliderProps} ref={sliderRefObject}>
                <div className="demo-slide demo-slide--fixed" style={{ backgroundColor: 'rgb(50, 50, 50)' }}>Slide 1</div>
                <div className="demo-slide demo-slide--fixed" style={{ backgroundColor: 'rgb(75, 75, 75)' }}>Slide 2</div>
                <div className="demo-slide demo-slide--fixed" style={{ backgroundColor: 'rgb(100, 100, 100)' }}>Slide 3</div>
                <div className="demo-slide demo-slide--fixed" style={{ backgroundColor: 'rgb(125, 125, 125)' }}>Slide 4</div>
                <div className="demo-slide demo-slide--fixed" style={{ backgroundColor: 'rgb(150, 150, 150)' }}>Slide 5</div>
                <div className="demo-slide demo-slide--fixed" style={{ backgroundColor: 'rgb(175, 175, 175)' }}>Slide 6</div>
                <div className="demo-slide demo-slide--fixed" style={{ backgroundColor: 'rgb(200, 200, 200)' }}>Slide 7</div>
                <div className="demo-slide demo-slide--fixed" style={{ backgroundColor: 'rgb(225, 225, 225)' }}>Slide 8</div>
            </Slider>
        </>
    );
};

export default ScrollToSlide;
