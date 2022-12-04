import { Container, Row, Col, Card, Image } from "react-bootstrap"
import mineCraftImage from "../asset/trending/minecraft.jpg"
import farCryImage from "../asset/trending/farCry6.jpg"
import lolImage from "../asset/trending/lol.jpg"
import olliwoorldImage from "../asset/trending/olliworld.jpg"
import valorantImage from "../asset/trending/valorant.jpg"
import wowImage from "../asset/trending/wow.jpg"


const Trending = () => {
    return(
        <div>
            <Container>
                <br/>
                <h1 className="text-white text-center" id="trending">Trending Games</h1>
                <br/>
                <Row>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={mineCraftImage} alt="Minecraft game" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Minecraft</Card.Title>
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
                            <Image src={farCryImage} alt="Far Cry game" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Far Cry 6</Card.Title>
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
                            <Image src={lolImage} alt="League Of Legends game" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">League Of Legends</Card.Title>
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
                            <Image src={olliwoorldImage} alt="Oli World game" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Oli World</Card.Title>
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
                            <Image src={valorantImage} alt="Valorant game" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Valorant</Card.Title>
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
                            <Image src={wowImage} alt="World Of Warcraft game" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">World Of Warcraft</Card.Title>
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

export default Trending;