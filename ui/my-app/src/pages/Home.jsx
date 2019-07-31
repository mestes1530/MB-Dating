import React, { useState, useEffect, useGlobal } from 'reactn';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from "axios";

import { Button, Card, CardDeck } from 'react-bootstrap';

const Home = () => {

    return (
        <div className="CardField">
            <CardDeck className="FlexBox">
                <Card className="Card FlexItem">
                    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/03/11/03/25/steve-jobs-1249665_1280.jpg" />
                    <Card.Body>
                    <Card.Title>ENTJ</Card.Title>
                    <Card.Text>
                        Some info about ENTJ's...
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="info" href="https://www.reddit.com/r/random/">Reddit</Button>
                    </Card.Footer>
                </Card>
                <Card className="Card FlexItem">
                    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2013/07/12/18/52/leonardo-da-vinci-153911_1280.png" />
                    <Card.Body>
                    <Card.Title>ENTP</Card.Title>
                    <Card.Text>
                        Info on ENTP typed people...
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="info" href="https://www.reddit.com/r/random/">Reddit</Button>
                    </Card.Footer>
                </Card>
                <Card className="Card FlexItem">
                    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/04/01/09/48/barack-obama-1299586_1280.png" />
                    <Card.Body>
                    <Card.Title>ENFJ</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="info" href="https://www.reddit.com/r/random/">Reddit</Button>
                    </Card.Footer>
                </Card>
                <Card className="Card FlexItem">
                    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/03/31/19/58/actor-1295427_1280.png" />
                    <Card.Body>
                    <Card.Title>ENFP</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="info" href="https://www.reddit.com/r/random/">Reddit</Button>
                    </Card.Footer>
                </Card>
                
                <Card className="Card FlexItem">
                    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2018/07/09/09/41/frank-sinatra-3525676_1280.png" />
                    <Card.Body>
                    <Card.Title>ESTJ</Card.Title>
                    <Card.Text>
                        Some info about ESTJ's...
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="info" href="https://www.reddit.com/r/random/">Reddit</Button>
                    </Card.Footer>
                </Card>
                <Card className="Card FlexItem">
                    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/04/01/10/17/britain-1299836_1280.png" />
                    <Card.Body>
                    <Card.Title>ESTP</Card.Title>
                    <Card.Text>
                        Info on ESTP typed people...
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="info" href="https://www.reddit.com/r/random/">Reddit</Button>
                    </Card.Footer>
                </Card>
                <Card className="Card FlexItem">
                    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/04/01/09/48/barack-obama-1299586_1280.png" />
                    <Card.Body>
                    <Card.Title>ESFJ</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="info" href="https://www.reddit.com/r/random/">Reddit</Button>
                    </Card.Footer>
                </Card>
                <Card className="Card FlexItem">
                    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/12/04/13/59/art-2997019_1280.jpg" />
                    <Card.Body>
                    <Card.Title>ESFP</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="info" href="https://www.reddit.com/r/random/">Reddit</Button>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </div>
    )
}

export default Home;