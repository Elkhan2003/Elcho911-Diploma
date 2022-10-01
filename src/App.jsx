import React, { useState, useEffect } from 'react'
import { BallTriangle, Triangle } from 'react-loader-spinner'
import { Spinner, Button } from 'react-bootstrap'

import './App.css';

import { Header } from './Components/Header/Header'

import sound1 from './Audio/Loading.mp3'
import sound2 from './Audio/welcome.wav'
import sound3 from './Audio/Anfisa.mp3'

export const App = () => {

  const [loading1, setLoading1] = useState(false)

  useEffect(() => {
    setLoading1(true)
    setTimeout(() => {
      setLoading1(false)
    }, 700)
  }, [])

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  return (
    <>
      {
        loading1 ?
          <div className="loading">
            {/* <audio src={sound1} autoplay="autoplay"></audio> */}
            <Triangle
              height="250"
              width="250"
              color='aqua'
              ariaLabel='loading'
            />
            <Button variant="info" disabled>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              <span className='loading__color'>Загружаюсь...</span>
            </Button>
          </div>
          :
          <>
            <div className="App">
              {
                loading ?
                  <div className="loading">
                    <audio src={sound1} autoplay='autoplay'></audio>
                    <Triangle
                      height="250"
                      width="250"
                      color='aqua'
                      ariaLabel='loading'
                    />
                    <Button variant="info">
                      <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                      <a className='load__url' href="https://elkhan2003.github.io/test-react-single-page/">
                        <span className='loading__color'>Пожалуйста подождите...</span>
                      </a>
                    </Button>
                  </div>
                  :
                  <>
                    <Header />
                    <audio src={sound3} autoplay='autoplay'></audio>
                  </>
              }
            </div>
          </>
      }
    </>
  )
}
