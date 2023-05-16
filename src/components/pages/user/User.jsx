import React from "react";
import "./User.css"
import user from "../../../assets/user.png"
import location from "../../../assets/location.png"
import information from "../../../assets/information.png"
import github from "../../../assets/github.png"
import { Link } from "react-router-dom";

const User = () => {
    return(
        <div className="container">
                <Link to="/" className="back"> 
                    <button>RESET</button>
                </Link>
            <div className="user-information">

                <div className="image">
                    <img src="https://avatars.githubusercontent.com/u/128634248?s=400&u=fb0f876c380d28ba792c7b92d967f42b77939487&v=4" />
                </div>

                <div className="user-content">

                    <h3>Name of the user:</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo reprehenderit unde tempora illo, dicta similique placeat nobis laborum voluptatibus nostrum molestias ab est sit expedita accusantium cum deserunt facere non?</p>
                    <div className="more-data">

                        <p> 
                            <img src={user} alt="user icon"/> 
                            User name: 
                        </p>

                        <p> 
                            <img src={location} alt="location icon"/> 
                            Location: 
                        </p>

                        <p> 
                            <img src={information} alt="info icon"/> 
                            User info: 
                        </p>

                        <p> 
                            <img src={github} alt="github icon"/> 
                            <a href="#"> View github profile: </a>
                        </p>

                    </div>
                </div>
            </div>

            <div className="user-repos">
                <div className="repo">
                    <h3>
                        <a href="#"> Name of the repository: </a>
                    </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quis at totam et. Laborum ullam quo repellat doloribus. Nulla maiores ipsam autem sequi consectetur, vitae possimus? Eos vel nemo deserunt!</p>
                    <br />
                    <small>Written in JavaScript</small>
                </div>
            </div>
        </div>
    )
}

export default User;