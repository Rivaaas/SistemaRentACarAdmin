import React from 'react'

import { Nav } from 'react-bootstrap'

const Index = () => {
    return (
        <div>
            <h1>Rent a car</h1>
            <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/home">Active</Nav.Link>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
                <Nav.Link eventKey="disabled" disabled>
                    Disabled
                </Nav.Link>
            </Nav>
        </div>
    )
}

export default Index