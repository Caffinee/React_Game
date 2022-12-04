import { Container, Row, Col, Card, Image } from "react-bootstrap"
import back4blood from "../asset/best/back4blood.jpg"
import crysis3 from "../asset/best/crysis3.jpg"
import residentEvil2 from "../asset/best/residentEvil2.jpg"
import theWalkingDead from "../asset/best/theWalkingDead.jpg"
import thief from "../asset/best/thief.jpg"
import untilDawn from "../asset/best/untilDawn.jpg"


const Best = () => {
    return(
        <div>
            <Container>
                <br/>
                <h1 className="text-white text-center" id="best">Best Games</h1>
                <br/>
                <Row>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={back4blood} alt="Back 4 Blood game" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Back 4 Blood</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead -in additional content
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last Update 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={crysis3} alt="Crysis 3 game" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Crysis 3</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead -in additional content
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last Update 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={residentEvil2} alt="Resident Evil 2 game" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Resident Evil 2</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead -in additional content
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last Update 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={theWalkingDead} alt="The Walking Dead game" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">The Walking Dead</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead -in additional content
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last Update 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={thief} alt="Thief game" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Thief</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead -in additional content
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last Update 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={untilDawn} alt="Until Dawn game" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Until Dawn</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead -in additional content
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last Update 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Best;