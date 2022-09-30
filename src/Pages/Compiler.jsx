import React, { useState, useEffect } from 'react'
import { Triangle } from 'react-loader-spinner'
import { Container } from 'react-bootstrap'
import css from './Pages.module.css'

export const Compiler = () => {

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    return (
        <div className={css.content}>
            <Container>
                {
                    loading ?
                        <div className={css.loading}>
                            <Triangle
                                height="200"
                                width="200"
                                color='red'
                                ariaLabel='loading'
                            />
                        </div>
                        :
                        <div className={css.sites__url}>
                            <iframe className={css.site__url} src="https://rextester.com/l/pascal" scrolling="auto"> </iframe>
                        </div>
                }
            </Container>
        </div>
    )
}
