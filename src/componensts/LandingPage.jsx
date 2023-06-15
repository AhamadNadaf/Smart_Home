import React, { useState } from 'react'
import './style/landingPage.css'
import scence1 from '../assets/images/home-off.jpg'
import switchBoard from '../assets/images/switch-board.png'
import fingerOff from '../assets/images/finger-off.png'
import fingerOn from '../assets/images/finger-on.png'
import scence1Off from '../assets/images/home-on.png'
import kitchenLigth1 from '../assets/images/home/color-1.jpg'
import kitchenLigth2 from '../assets/images/home/color-2.jpg'
import kitchenLigth3 from '../assets/images/home/color-3.jpg'
import kitchenLigth4 from '../assets/images/home/color-4.jpg'
import kitchenLigth5 from '../assets/images/home/color-5.jpg'
import kitchenLigth6 from '../assets/images/home/color-6.jpg'
import kitchenLigth7 from '../assets/images/home/color-7.jpg'
import kitchenLigth8 from '../assets/images/home/color-8.jpg'
import kitchenLigth9 from '../assets/images/home/color-9.jpg'
import kitchenLigth10 from '../assets/images/home/color-10.jpg'
import kitchenLigth11 from '../assets/images/home/color-11.jpg'
import kitchenLigth12 from '../assets/images/home/color-12.jpg'
import kitchenLigth13 from '../assets/images/home/color-13.jpg'
import kitchenLigth14 from '../assets/images/home/color-14.jpg'
import kitchenLigth15 from '../assets/images/home/color-15.jpg'

// Creating Home function component
const Home = () => {
    const [finger, setFinger] = useState('false')
    const [finger1, setFinger1] = useState('false')
    const [finger2, setFinger2] = useState('false')
    const [kitchenLigths, steKitchenLigths] = useState(kitchenLigth1)
    const image = [
        { id: 1, value: kitchenLigth1 },
        { id: 2, value: kitchenLigth2 },
        { id: 3, value: kitchenLigth3 },
        { id: 4, value: kitchenLigth4 },
        { id: 5, value: kitchenLigth5 },
        { id: 6, value: kitchenLigth6 },
        { id: 7, value: kitchenLigth7 },
        { id: 8, value: kitchenLigth8 },
        { id: 9, value: kitchenLigth9 },
        { id: 10, value: kitchenLigth10 },
        { id: 11, value: kitchenLigth11 },
        { id: 12, value: kitchenLigth12 },
        { id: 13, value: kitchenLigth13 },
        { id: 14, value: kitchenLigth14 },
        { id: 15, value: kitchenLigth15 }]

    const [rangeValue, setRangeValue] = useState(1)

    const handleFingerOffOn = (id) => {
        if (id.id === '1') {
            if (finger === 'true') {
                setFinger('false')
            } else {
                setFinger('true')
            }
        }
        else if (id.id === '2') {
            if (finger1 === 'true') {
                setFinger1('false')
            } else {
                setFinger1('true')
            }
        }
        else {
            if (finger2 === 'true') {
                setFinger2('false')
            } else {
                setFinger2('true')
            }
        }
    }


    const handleRangeChange = (values) => {

        setRangeValue(values.value)
        const a = image.filter((val) => {
            return val.id == rangeValue
        })
        steKitchenLigths(a[0].value)

    }

    return (
        <div className='container'>
            <nav className="navbar navbar-light bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Smart Home
                    </a>
                    <div>
                        <a className="navbar-brand feature1Text" href="#feature1">
                            Feature 1
                        </a>
                        <a className="navbar-brand feature1Text" href="#feature2">
                            Feature 2
                        </a>

                    </div>

                </div>

            </nav>

            {/* Feature 1  */}
            <div id="feature1" className='feature-1-div'>
                <h1>Feature 1</h1>
                <img src={finger2 !== 'true' ? scence1 : scence1Off} className="scence1" alt="" />
                <div className='switchBoardDiv'>
                    <img src={switchBoard} className="switchBoard" alt="" />
                    <div className='fingerOffDiv'>
                        <img src={finger2 === 'true' ? fingerOn : fingerOff} className="fingerOff" alt="" id='3' onClick={(event) => handleFingerOffOn(event.target)} />
                        <img src={finger === 'true' ? fingerOn : fingerOff} className="fingerOff" alt="" id='1' onClick={(event) => handleFingerOffOn(event.target)} />
                        <img src={finger1 === 'true' ? fingerOn : fingerOff} className="fingerOff" alt="" id='2' onClick={(event) => handleFingerOffOn(event.target)} />
                    </div>
                    <h1 className='feature-1-text'>Please click &#128070; for demo experience</h1>
                </div>
            </div>
            {/* Feature 2 */}


            <div id="feature2" className='kitchenLigthDiv'>
                <h1 >Feature 2</h1>
                <img src={kitchenLigths} alt="images" className='kitchenLigth' />
                <h1 className='feature-2-h1'>Change the colour of the light in one touch</h1>
                <input className='' type='range' min="1" max="15" steps='1' value={rangeValue} onChange={(e) => {
                    handleRangeChange(e.target)
                }}></input>

            </div>
        </div>
    )
}

export default Home;