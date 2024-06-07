import { Container, Navbar, Nav } from 'react-bootstrap'

const Navigation = () => {
  return (
    <Navbar className='bg-body-tertiary' expand="lg">
        <Container>
            <Navbar.Brand>
                Admin
            </Navbar.Brand>

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className='me-auto'>
                <Nav.Link>
                  Crear Producto
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Navigation