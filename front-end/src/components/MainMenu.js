import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const MainMenu = () => {
    const Button = styled.li`
        list-style-type: none;
        border: 0.5vh solid;
        border-radius: 25px;
        border-color: neongreen;
        font-size: 50px;
    `
    
    

    return (
        <nav>
            <ul>
                <Button>
                    <li>
                        {/* //make a path for Story mode setup */}
                        <Link
                            to=""
                            style={{
                                textDecoration: "none",
                                color: "#39FF14"
                            }}>
                            Story
                        </Link>
                    </li>
                </Button>
                <br />
                <Button>
                    <li>
                        {/* //path for Practice mode without story visuals */}
                        <Link
                            to=""
                            style={{
                                textDecoration: "none",
                                color: "#39FF14"
                            }}>
                            Practice
                        </Link>
                    </li>
                </Button>
                <br />
                <Button>
                    <li>
                        {/* //path to page of user career stats */}
                        <Link
                            to=""
                            style={{
                                color: "#39FF14",
                                textDecoration: "none",
                            }}>
                            Career
                        </Link>
                    </li>
                </Button>
                <br />
                <Button>
                    <li>
                        {/* //path to new user form page
                        //should also be conditionally rendered so that if the user is logged in "Log Out" appears || "Log In" if they are not */}
                        <Link
                            to=""
                            style={{
                                textDecoration: "none",
                                color: "#39FF14"
                            }}>
                            Login/Logout
                        </Link>
                    </li>
                </Button>
            </ul>
        </nav>
    )
};

export default MainMenu;
