import { Container, Navbar } from 'react-bootstrap'

const Navigation = () => {
  return (
    <Navbar className='bg-body-tertiary'>
        <Container>
            <Navbar.Brand>
                Admin
            </Navbar.Brand>
        </Container>
    </Navbar>
  )
}

export default Navigation