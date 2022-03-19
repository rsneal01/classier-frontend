import React from "react";
import Card from "react-bootstrap/Card";

const Home = () => {

    return(
        <div>
            <Card border="primary" style={{ width: '18rem' }}>
                <Card.Header>Welcome to the Waldorf School of Bend!</Card.Header>
                <Card.Body>
                    <Card.Title>Our mission:</Card.Title>
                    <Card.Text>
                        Our school is dedicated to a hands-on approach to learning that stimulates artistic creativity, imagination, and playfulness.
                </Card.Text>
                </Card.Body>
            </Card>
            <br />
        </div>
    )
}



export default Home