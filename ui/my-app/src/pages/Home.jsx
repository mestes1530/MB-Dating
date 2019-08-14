import React, { useState, useEffect, useGlobal } from 'reactn';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from "axios";

import { Button, Card, CardDeck } from 'react-bootstrap';

const Home = () => {

    return (
        <div className="CardField">
            <CardDeck className="FlexBox">
                <Card className="Card FlexItem">
                    <a href="https://en.wikipedia.org/wiki/George_Washington">
                        <Card.Img variant="top" src="https://i.pinimg.com/originals/ff/f8/f0/fff8f0cd65afb59ff05656f6e69faf84.png" />
                    </a>
                    <Card.Body>
                        <a href="https://www.truity.com/personality-type/ISTJ">
                            <Card.Title>ISTJ</Card.Title>
                        </a>
                        <Card.Text>
                        ISTJs are responsible organizers, driven to create and enforce order within systems and institutions. 
                        They are neat and orderly, inside and out, and tend to have a procedure for everything they do. Reliable 
                        and dutiful, ISTJs want to uphold tradition and follow regulations.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="info" className="Button" href="https://www.reddit.com/r/ISTJ/">
                            <img src="https://findicons.com/files/icons/2779/simple_icons/2048/reddit.png" width="20" alt="Reddit"/>r/ISTJ
                        </Button>
                        <Button variant="info" className="Button" href="https://www.16personalities.com/istj-personality">
                            <img src="https://www.seamester.com/wp-content/uploads/2016/11/info.png" width="20" alt="16 Personalities"/>  info.
                        </Button>
                    </Card.Footer>
                </Card>
                <Card className="Card FlexItem">
                    <a href="https://en.wikipedia.org/wiki/Beyonc%C3%A9">
                        <Card.Img variant="top" src="https://i.pinimg.com/originals/88/e2/40/88e240267bfabd4a82dc184c1bb63963.png" />
                    </a>
                    <Card.Body>
                        <a href="https://www.truity.com/personality-type/ISFJ">
                            <Card.Title>ISFJ</Card.Title>
                        </a>
                        <Card.Text>
                        ISFJs are industrious caretakers, loyal to traditions and organizations. They are practical, compassionate, and 
                        caring, and are motivated to provide for others and protect them from the perils of life. ISFJs are conventional 
                        and grounded, and enjoy contributing to established structures of society.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="info" className="Button" href="https://www.reddit.com/r/ISFJ/">
                            <img src="https://findicons.com/files/icons/2779/simple_icons/2048/reddit.png" width="20" alt="Reddit"/>r/ISFJ
                        </Button>
                        <Button variant="info" className="Button" href="https://www.16personalities.com/isfj-personality">
                            <img src="https://www.seamester.com/wp-content/uploads/2016/11/info.png" width="20" alt="16 Personalities"/>  info.
                        </Button>
                    </Card.Footer>
                </Card>
                <Card className="Card FlexItem">
                    <a href="https://en.wikipedia.org/wiki/Sonia_Sotomayor">
                        <Card.Img variant="top" src="https://i.pinimg.com/originals/b8/8d/7d/b88d7d6cd23ed2b2554970c347b613e5.png" />
                    </a>
                    <Card.Body>
                        <a href="https://www.truity.com/personality-type/ESTJ">
                            <Card.Title>ESTJ</Card.Title>
                        </a>
                        <Card.Text>
                        ESTJs are hardworking traditionalists, eager to take charge in organizing projects and people. Orderly, rule-abiding, 
                        and conscientious, ESTJs like to get things done, and tend to go about projects in a systematic, methodical way.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="info" className="Button" href="https://www.reddit.com/r/ESTJ/">
                            <img src="https://findicons.com/files/icons/2779/simple_icons/2048/reddit.png" width="20" alt="Reddit"/>r/ESTJ
                        </Button>
                        <Button variant="info" className="Button" href="https://www.16personalities.com/estj-personality">
                            <img src="https://www.seamester.com/wp-content/uploads/2016/11/info.png" width="20" alt="16 Personalities"/>  info.
                        </Button>
                    </Card.Footer>
                </Card>
                <Card className="Card FlexItem">
                    <a href="https://en.wikipedia.org/wiki/Taylor_Swift">
                        <Card.Img variant="top" src="https://i.pinimg.com/originals/b7/a1/b3/b7a1b3e5602059f62af4706c99171dbc.png" />
                    </a>
                    <Card.Body>
                        <a href="https://www.truity.com/personality-type/ESFJ">
                            <Card.Title>ESFJ</Card.Title>
                        </a>
                        <Card.Text>
                        ESFJs are conscientious helpers, sensitive to the needs of others and energetically dedicated to their responsibilities. 
                        They are highly attuned to their emotional environment and attentive to both the feelings of others and the perception 
                        others have of them. ESFJs like a sense of harmony and cooperation around them, and are eager to please and provide.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="info" className="Button" href="https://www.reddit.com/r/EFJ/">
                            <img src="https://findicons.com/files/icons/2779/simple_icons/2048/reddit.png" width="20" alt="Reddit"/>r/ESFJ
                        </Button>
                        <Button variant="info" className="Button" href="https://www.16personalities.com/esfj-personality">
                            <img src="https://www.seamester.com/wp-content/uploads/2016/11/info.png" width="20" alt="16 Personalities"/>  info.
                        </Button>
                    </Card.Footer>
                </Card>
                <Card className="Card FlexItem">
                    <a href="https://en.wikipedia.org/wiki/Clint_Eastwood">
                        <Card.Img variant="top" src="https://www.16personalities.com/images/types/famous/explorers_ISTP_clint_eastwood.png" />
                    </a>
                    <Card.Body>
                        <a href="https://www.truity.com/personality-type/ISTP">
                            <Card.Title>ISTP</Card.Title>
                        </a>
                        <Card.Text>
                        ISTPs are observant artisans with an understanding of mechanics and an interest in troubleshooting. They approach their 
                        environments with a flexible logic, looking for practical solutions to the problems at hand. They are independent and 
                        adaptable, and typically interact with the world around them in a self-directed, spontaneous manner.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="info" className="Button" href="https://www.reddit.com/r/ISTP/">
                            <img src="https://findicons.com/files/icons/2779/simple_icons/2048/reddit.png" width="20" alt="Reddit"/>r/ISTP
                        </Button>
                        <Button variant="info" className="Button" href="https://www.16personalities.com/istp-personality">
                            <img src="https://www.seamester.com/wp-content/uploads/2016/11/info.png" width="20" alt="16 Personalities"/>  info.
                        </Button>
                    </Card.Footer>
                </Card>
                <Card className="Card FlexItem">
                    <a href="https://en.wikipedia.org/wiki/Michael_Jackson">
                        <Card.Img variant="top" src="https://www.16personalities.com/images/types/famous/explorers_ISFP_michael_jackson.png" />
                    </a>
                    <Card.Body>
                        <a href="https://www.truity.com/personality-type/ISFP">
                            <Card.Title>ISFP</Card.Title>
                        </a>
                        <Card.Text>
                        ISFPs are gentle caretakers who live in the present moment and enjoy their surroundings with cheerful, low-key enthusiasm. 
                        They are flexible and spontaneous, and like to go with the flow to enjoy what life has to offer. ISFPs are quiet and 
                        unassuming, and may be hard to get to know. However, to those who know them well, the ISFP is warm and friendly, eager to 
                        share in life's many experiences.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="info" className="Button" href="https://www.reddit.com/r/ISFP/">
                            <img src="https://findicons.com/files/icons/2779/simple_icons/2048/reddit.png" width="20" alt="Reddit"/>r/ISFP
                        </Button>
                        <Button variant="info" className="Button" href="https://www.16personalities.com/isfp-personality">
                            <img src="https://www.seamester.com/wp-content/uploads/2016/11/info.png" width="20" alt="16 Personalities"/>  info.
                        </Button>
                    </Card.Footer>
                </Card>
                <Card className="Card FlexItem">
                    <a href="https://en.wikipedia.org/wiki/Eddie_Murphy">
                        <Card.Img variant="top" src="https://i.pinimg.com/originals/99/56/dd/9956dd9540704c85d763e9d12204563d.png" />
                    </a>
                    <Card.Body>
                        <a href="https://www.truity.com/personality-type/ESTP">
                            <Card.Title>ESTP</Card.Title>
                        </a>
                        <Card.Text>
                        ESTPs are energetic thrillseekers who are at their best when putting out fires, whether literal or metaphorical. 
                        They bring a sense of dynamic energy to their interactions with others and the world around them. They assess 
                        situations quickly and move adeptly to respond to immediate problems with practical solutions.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="info" className="Button" href="https://www.reddit.com/r/ESTP/">
                            <img src="https://findicons.com/files/icons/2779/simple_icons/2048/reddit.png" width="20" alt="Reddit"/>r/ESTP
                        </Button>
                        <Button variant="info" className="Button" href="https://www.16personalities.com/estp-personality">
                            <img src="https://www.seamester.com/wp-content/uploads/2016/11/info.png" width="20" alt="16 Personalities"/>  info.
                        </Button>
                    </Card.Footer>
                </Card>
                <Card className="Card FlexItem">
                    <a href="https://en.wikipedia.org/wiki/Marilyn_Monroe">
                        <Card.Img variant="top" src="https://i.pinimg.com/originals/6d/76/c8/6d76c86f05c23e565977d2dacd08af5a.png" />
                    </a>
                    <Card.Body>
                        <a href="https://www.truity.com/personality-type/ESFP">
                            <Card.Title>ESFP</Card.Title>
                        </a>
                        <Card.Text>
                        ESFPs are vivacious entertainers who charm and engage those around them. They are spontaneous, energetic, and 
                        fun-loving, and take pleasure in the things around them: food, clothes, nature, animals, and especially people.
                        ESFPs are typically warm and talkative and have a contagious enthusiasm for life. 
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="info" className="Button" href="https://www.reddit.com/r/ESFP/">
                            <img src="https://findicons.com/files/icons/2779/simple_icons/2048/reddit.png" width="20" alt="Reddit"/>r/ESFP
                        </Button>
                        <Button variant="info" className="Button" href="https://www.16personalities.com/esfp-personality">
                            <img src="https://www.seamester.com/wp-content/uploads/2016/11/info.png" width="20" alt="16 Personalities"/>  info.
                        </Button>
                    </Card.Footer>
                </Card>
                <Card className="Card FlexItem">
                    <a href="https://en.wikipedia.org/wiki/Friedrich_Nietzsche">
                        <Card.Img variant="top" src="https://i.pinimg.com/originals/77/93/92/779392d273addd3e08f6ab7b3aac45d7.png" />
                    </a>
                    <Card.Body>
                        <a href="https://www.truity.com/personality-type/INTJ">
                            <Card.Title>INTJ</Card.Title>
                        </a>
                        <Card.Text>
                        INTJs are analytical problem-solvers, eager to improve systems and processes with their innovative ideas. They have 
                        a talent for seeing possibilities for improvement, whether at work, at home, or in themselves. Often intellectual, 
                        INTJs enjoy logical reasoning and complex problem-solving. 
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="info" className="Button" href="https://www.reddit.com/r/INTJ/">
                            <img src="https://findicons.com/files/icons/2779/simple_icons/2048/reddit.png" width="20" alt="Reddit"/>r/INTJ
                        </Button>
                        <Button variant="info" className="Button" href="https://www.16personalities.com/intj-personality">
                            <img src="https://www.seamester.com/wp-content/uploads/2016/11/info.png" width="20" alt="16 Personalities"/>  info.
                        </Button>
                    </Card.Footer>
                </Card>
                <Card className="Card FlexItem">
                    <a href="https://en.wikipedia.org/wiki/Albert_Einstein">
                        <Card.Img variant="top" src="https://i.pinimg.com/originals/ba/25/55/ba255564cdbc7252d02cf38545c74b85.png" />
                    </a>
                    <Card.Body>
                        <a href="https://www.truity.com/personality-type/INTP">
                            <Card.Title>INTP</Card.Title>
                        </a>
                        <Card.Text>
                        INTPs are philosophical innovators, fascinated by logical analysis, systems, and design. They are preoccupied with theory, 
                        and search for the universal law behind everything they see. They want to understand the unifying themes of life, in all 
                        their complexity.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="info" className="Button" href="https://www.reddit.com/r/INTP/">
                            <img src="https://findicons.com/files/icons/2779/simple_icons/2048/reddit.png" width="20" alt="Reddit"/>r/INTP
                        </Button>
                        <Button variant="info" className="Button" href="https://www.16personalities.com/intp-personality">
                            <img src="https://www.seamester.com/wp-content/uploads/2016/11/info.png" width="20" alt="16 Personalities"/>  info.
                        </Button>
                    </Card.Footer>
                </Card>
                <Card className="Card FlexItem">
                    <a href="https://en.wikipedia.org/wiki/Steve_Jobs">
                        <Card.Img variant="top" src="https://i.pinimg.com/originals/a3/ec/cd/a3eccd07c9884ac64003bd68dbed655b.png" />
                    </a>
                    <Card.Body>
                        <a href="https://www.truity.com/personality-type/ENTJ">
                            <Card.Title>ENTJ</Card.Title>
                        </a>
                        <Card.Text>
                        ENTJs are strategic leaders, motivated to organize change. They are quick to see inefficiency and conceptualize new 
                        solutions, and enjoy developing long-range plans to accomplish their vision. They excel at logical reasoning and are 
                        usually articulate and quick-witted.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="info" className="Button" href="https://www.reddit.com/r/ENTJ/">
                            <img src="https://findicons.com/files/icons/2779/simple_icons/2048/reddit.png" width="20" alt="Reddit"/>r/ENTJ
                        </Button>
                        <Button variant="info" className="Button" href="https://www.16personalities.com/entj-personality">
                            <img src="https://www.seamester.com/wp-content/uploads/2016/11/info.png" width="20" alt="16 Personalities"/>  info.
                        </Button>
                    </Card.Footer>
                </Card>
                <Card className="Card FlexItem">
                    <a href="https://en.wikipedia.org/wiki/Sarah_Silverman">
                        <Card.Img variant="top" src="https://storage.googleapis.com/neris/public/images/types/famous/analysts_ENTP_sarah_silverman.png" />
                    </a>
                    <Card.Body>
                        <a href="https://www.truity.com/personality-type/ENTP">
                            <Card.Title>ENTP</Card.Title>
                        </a>
                        <Card.Text>
                        ENTPs are inspired innovators, motivated to find new solutions to intellectually challenging problems. They are curious and 
                        clever, and seek to comprehend the people, systems, and principles that surround them. Open-minded and unconventional, 
                        Visionaries want to analyze, understand, and influence other people.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="info" className="Button" href="https://www.reddit.com/r/ENTP/">
                            <img src="https://findicons.com/files/icons/2779/simple_icons/2048/reddit.png" width="20" alt="Reddit"/>r/ENTP
                        </Button>
                        <Button variant="info" className="Button" href="https://www.16personalities.com/entp-personality">
                            <img src="https://www.seamester.com/wp-content/uploads/2016/11/info.png" width="20" alt="16 Personalities"/>  info.
                        </Button>
                    </Card.Footer>
                </Card>


                <Card className="Card FlexItem">
                    <a href="https://en.wikipedia.org/wiki/Martin_Luther_King_Jr.">
                        <Card.Img variant="top" src="https://i.pinimg.com/originals/43/cb/53/43cb53b0f5864820aa795a386046b75b.png" />
                    </a>
                    <Card.Body>
                        <a href="https://www.truity.com/personality-type/INFJ">
                            <Card.Title>INFJ</Card.Title>
                        </a>
                        <Card.Text>
                        INFJs are creative nurturers with a strong sense of personal integrity and a drive to help others realize their 
                        potential. Creative and dedicated, they have a talent for helping others with original solutions to their 
                        personal challenges. They trust their insights about others and have strong faith in their ability to read people.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="info" className="Button" href="https://www.reddit.com/r/INFJ/">
                            <img src="https://findicons.com/files/icons/2779/simple_icons/2048/reddit.png" width="20" alt="Reddit"/>r/INFJ
                        </Button>
                        <Button variant="info" className="Button" href="https://www.16personalities.com/infj-personality">
                            <img src="https://www.seamester.com/wp-content/uploads/2016/11/info.png" width="20" alt="16 Personalities"/>  info.
                        </Button>
                    </Card.Footer>
                </Card>
                <Card className="Card FlexItem">
                    <a href="https://en.wikipedia.org/wiki/J._R._R._Tolkien">
                        <Card.Img variant="top" src="https://www.16personalities.com/images/types/famous/diplomats_INFP_j_r_r_tolkien.png" />
                    </a>
                    <Card.Body>
                        <a href="https://www.truity.com/personality-type/INFP">
                            <Card.Title>INFP</Card.Title>
                        </a>
                        <Card.Text>
                        INFPs are imaginative idealists, guided by their own core values and beliefs. To a Healer, possibilities are paramount; 
                        the realism of the moment is only of passing concern. They see potential for a better future, and pursue truth and 
                        meaning with their own individual flair.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="info" className="Button" href="https://www.reddit.com/r/INFP/">
                            <img src="https://findicons.com/files/icons/2779/simple_icons/2048/reddit.png" width="20" alt="Reddit"/>r/INFP
                        </Button>
                        <Button variant="info" className="Button" href="https://www.16personalities.com/infp-personality">
                            <img src="https://www.seamester.com/wp-content/uploads/2016/11/info.png" width="20" alt="16 Personalities"/>  info.
                        </Button>
                    </Card.Footer>
                </Card>
                <Card className="Card FlexItem">
                    <a href="https://en.wikipedia.org/wiki/Oprah_Winfrey">
                        <Card.Img variant="top" src="https://ameliagracesawyerstone.files.wordpress.com/2018/03/diplomats_enfj_oprah_winfrey.png" />
                    </a>
                    <Card.Body>
                        <a href="https://www.truity.com/personality-type/ENFJ">
                            <Card.Title>ENFJ</Card.Title>
                        </a>
                        <Card.Text>
                        ENFJs are idealist organizers, driven to implement their vision of what is best for humanity. They often act as catalysts 
                        for human growth because of their ability to see potential in other people and their charisma in persuading others to 
                        their ideas. They are focused on values and vision, and are passionate about the possibilities for people.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="info" className="Button" href="https://www.reddit.com/r/ENFJ/">
                            <img src="https://findicons.com/files/icons/2779/simple_icons/2048/reddit.png" width="20" alt="Reddit"/>r/ENFJ
                        </Button>
                        <Button variant="info" className="Button" href="https://www.16personalities.com/enfj-personality">
                            <img src="https://www.seamester.com/wp-content/uploads/2016/11/info.png" width="20" alt="16 Personalities"/>  info.
                        </Button>
                    </Card.Footer>
                </Card>
                <Card className="Card FlexItem">
                    <a href="https://en.wikipedia.org/wiki/Robert_Downey_Jr.">
                        <Card.Img variant="top" src="https://i.pinimg.com/originals/b7/29/4f/b7294fec0cf9f7d60021ebd0b8d33ac3.png" />
                    </a>
                    <Card.Body>
                        <a href="https://www.truity.com/personality-type/ENFP">
                            <Card.Title>ENFP</Card.Title>
                        </a>
                        <Card.Text>
                        ENFPs are people-centered creators with a focus on possibilities and a contagious enthusiasm for new ideas, people and activities. 
                        Energetic, warm, and passionate, ENFPs love to help other people explore their creative potential. Imaginative and original, ENFPs 
                        often have a strong artistic side.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="info" className="Button" href="https://www.reddit.com/r/ENFP/">
                            <img src="https://findicons.com/files/icons/2779/simple_icons/2048/reddit.png" width="20" alt="Reddit"/>r/ENFP
                        </Button>
                        <Button variant="info" className="Button" href="https://www.16personalities.com/enfp-personality">
                            <img src="https://www.seamester.com/wp-content/uploads/2016/11/info.png" width="20" alt="16 Personalities"/>  info.
                        </Button>
                    </Card.Footer>
                </Card>
            </CardDeck>
            <br></br>
            <br></br>
        </div>
    )
}

export default Home;