import { Container, Card, Placeholder } from 'react-bootstrap'
import css from './Pages.module.css'

import { News } from '../News/News'

export const Blog = () => {
    return (
        <div style={{ marginTop: '70px', padding: '0 0' }} className={css.content}>
            <Container>
                <News />
            </Container>
        </div>
    )
}
