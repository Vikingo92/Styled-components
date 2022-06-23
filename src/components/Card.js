import React, { Component } from 'react'
import { CardStyles, Section1, UlStyle, UlStyle2, ListItem, DivStyle, Section2, ListStyle, ListStyle2, ListDetail, NavStyle, ListClear } from './styles/Card.Styles'
import  { AiFillCloseSquare } from 'react-icons/ai';

export default class Card extends Component {
    render() {


        return (
            <DivStyle>
                <NavStyle>
                    <ul>
                        <li>Frontend <AiFillCloseSquare size='2em'/> </li>
                        <li>CSS <AiFillCloseSquare size='2em'/></li>
                        <li>JavaScript <AiFillCloseSquare size='2em'/></li>
                        <ListClear>Clear </ListClear>
                    </ul>
                </NavStyle>
                <CardStyles>
                    <div>

                        <img src='./images/photosnap.svg' />
                        <Section1>
                            <ul>
                                <li>Photosnap</li>
                                <ListStyle>New!</ListStyle>
                                <ListStyle2>Featured</ListStyle2>
                            </ul>
                            <UlStyle2>
                                <ListItem>Senior Frontend Developer</ListItem>                           
                                <ListDetail>Frontend</ListDetail>
                                <ListDetail>Senior</ListDetail>
                                <ListDetail>HTML</ListDetail>
                                <ListDetail>CSS</ListDetail>
                                <ListDetail>JavaScript</ListDetail>
                           
                            </UlStyle2>

                            <UlStyle>
                                <li>1d ago</li>
                                <li>Full Time</li>
                                <li>USA only</li>
                            </UlStyle>
                        </Section1>

                       <Section2>
                       </Section2>
                    </div>
                </CardStyles>
                <CardStyles>
                    <div>

                        <img src='./images/manage.svg' />
                        <Section1>
                            <ul>
                                <li>Manage</li>
                                <ListStyle>New!</ListStyle>
                                <ListStyle2>Featured</ListStyle2>
                            </ul>
                            <UlStyle2>
                                <ListItem>Fullstack Developer</ListItem>                           
                                <li>Fullstack</li>
                                <li>Midweight</li>
                                <li>Python</li>
                                <li>React</li>
                            </UlStyle2>

                            <UlStyle>
                                <li>1d ago</li>
                                <li>Part Time</li>
                                <li>Remote</li>
                            </UlStyle>
                        </Section1>

                       <Section2>
                           
                       </Section2>
                    </div>
                </CardStyles>

                <CardStyles>
                    <div>

                        <img src='./images/account.svg' />
                        <Section1>
                            <ul>
                                <li>Account</li>
                                <ListStyle>New!</ListStyle>
                            </ul>
                            <UlStyle2>
                                <ListItem>Junior Frontend Developer</ListItem>                           
                                <li>Frontend</li>
                                <li>Junior</li>
                                <li>React</li>
                                <li>Sass</li>
                                <li>JavaScript</li>
                            </UlStyle2>

                            <UlStyle>
                                <li>2d ago</li>
                                <li>Partime</li>
                                <li>USA only</li>
                            </UlStyle>
                        </Section1>

                       <Section2>
                           
                       </Section2>
                    </div>
                </CardStyles>

                <CardStyles>
                    <div>

                        <img src='./images/myhome.svg' />
                        <Section1>
                            <ul>
                                <li>MyHome</li>
                            </ul>
                            <UlStyle2>
                                <ListItem>Junior Frontend Developer</ListItem>                           
                                <li>Frontend</li>
                                <li>Junior</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                            </UlStyle2>

                            <UlStyle>
                                <li>5d ago</li>
                                <li>Contract</li>
                                <li>USA only</li>
                            </UlStyle>
                        </Section1>

                       <Section2>
                           
                       </Section2>
                    </div>
                </CardStyles>

                <CardStyles>
                    <div>

                        <img src='./images/loop-studios.svg' />
                        <Section1>
                            <ul>
                                <li>Loop Studios</li>
                            </ul>
                            <UlStyle2>
                                <ListItem>Software Engieneer</ListItem> 
                                <li>Fullstack</li>
                                <li>Midweight</li>
                                <li>JavaScript</li>
                                <li>Sass</li>
                                <li>Ruby</li>
                            </UlStyle2>

                            <UlStyle>
                                <li>1w ago</li>
                                <li>Full Time</li>
                                <li>Worldwide</li>
                            </UlStyle>
                        </Section1>

                       <Section2>
                           
                       </Section2>
                    </div>
                </CardStyles>

                <CardStyles>
                    <div>

                        <img src='./images/faceit.svg' />
                        <Section1>
                            <ul>
                                <li>Faceit</li>
                            </ul>
                            <UlStyle2>
                                <ListItem>Junior Backend Developer</ListItem> 
                                <li>Backend</li>
                                <li>Junior</li>
                                <li>Ruby</li>
                                <li>RoR</li>
                            </UlStyle2>

                            <UlStyle>
                                <li>2w ago</li>
                                <li>Full Time</li>
                                <li>UK only</li>
                            </UlStyle>
                        </Section1>

                       <Section2>
                           
                       </Section2>
                    </div>
                </CardStyles>

                <CardStyles>
                    <div>

                        <img src='./images/shortly.svg' />
                        <Section1>
                            <ul>
                                <li>Shortly</li>
                            </ul>
                            <UlStyle2>
                                <ListItem>Junior Developer</ListItem> 
                                <li>Frontend</li>
                                <li>Junior</li>
                                <li>HTML</li>
                                <li>Sass</li>
                                <li>JavaScript</li>
                            </UlStyle2>

                            <UlStyle>
                                <li>2w ago</li>
                                <li>Full Time</li>
                                <li>Worldwide</li>
                            </UlStyle>
                        </Section1>

                       <Section2>
                           
                       </Section2>
                    </div>
                </CardStyles>

                <CardStyles>
                    <div>

                        <img src='./images/insure.svg' />
                        <Section1>
                            <ul>
                                <li>Insure</li>
                            </ul>
                            <UlStyle2>
                                <ListItem>Junior Frontend Developer</ListItem> 
                                <li>Frontend</li>
                                <li>Junior</li>
                                <li>Vue</li>
                                <li>JavaScript</li>
                                <li>Sass</li>
                            </UlStyle2>

                            <UlStyle>
                                <li>2w ago</li>
                                <li>Full Time</li>
                                <li>Worldwide</li>
                            </UlStyle>
                        </Section1>

                       <Section2>
                           
                       </Section2>
                    </div>
                </CardStyles>
                <CardStyles>
                    <div>

                        <img src='./images/eyecam-co.svg' />
                        <Section1>
                            <ul>
                                <li>Eyecam Co.</li>
                            </ul>
                            <UlStyle2>
                                <ListItem>Full Stack Engieneer</ListItem> 
                                <li>Fullstack</li>
                                <li>Midweight</li>
                                <li>JavaScript</li>
                                <li>Django</li>
                                <li>Python</li>
                            </UlStyle2>

                            <UlStyle>
                                <li>3w ago</li>
                                <li>Full Time</li>
                                <li>Worldwide</li>
                            </UlStyle>
                        </Section1>

                       <Section2>
                           
                       </Section2>
                    </div>
                </CardStyles>
                <CardStyles>
                    <div>

                        <img src='./images/the-air-filter-company.svg' />
                        <Section1>
                            <ul>
                                <li>The Air Filter Company</li>
                            </ul>
                            <UlStyle2>
                                <ListItem>Front-end Dev</ListItem> 
                                <li>Frontend</li>
                                <li>Junior</li>
                                <li>React</li>
                                <li>Sass</li>
                                <li>JavaScript</li>
                            </UlStyle2>

                            <UlStyle>
                                <li>1mo ago</li>
                                <li>Part Time</li>
                                <li>Worldwide</li>
                            </UlStyle>
                        </Section1>

                       <Section2>
                           
                       </Section2>
                    </div>
                </CardStyles>                
                

                  
            </DivStyle>
            
        )
    }
}
