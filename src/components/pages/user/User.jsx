import React, {useState, useEffect } from "react";
import "./User.css"
import user from "../../../assets/user.png"
import location from "../../../assets/location.png"
import information from "../../../assets/information.png"
import github from "../../../assets/github.png"
import { Link, useParams } from "react-router-dom";
import axios from "../../../axios";
import Repo from "../ui/Repo";

const User = () => {

    const{login} = useParams();

    //USER INFORMATION
    const [userInfo, setUserInfo] = useState({});
    //USER REPOSITORIES
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const fetchUserInformation = async () => {
            //   const responseUser = await axios.get("/userinfo");
            //   const responseRepos = await axios.get("/repos");
            try {
                const response = await Promise.all([
                    axios.get(`/users/${login}`),
                    axios.get(`/users/${login}/repos`)
                ]);
                setUserInfo(response[0].data)
                setRepos(response[1].data)
            } catch (error) {
                console.error(error);
            }
        };
        fetchUserInformation()
    });


    return(
        <div className="container">
                <Link to="/" className="back"> 
                    <button>RESET</button>
                </Link>
            <div className="user-information">

                <div className="image">
                    <img src={userInfo?.avatar_url} />
                </div>

                <div className="user-content">

                    <h3>{userInfo?.name}</h3>

                    <p>
                        {userInfo?.bio}
                    </p>

                    <div className="more-data">

                        <p> 
                            <img src={user} alt="user icon"/> 
                            {userInfo?.followers} Followers. Following {userInfo?.following}
                        </p>

                        {userInfo?.location && <p>
                            <img src={location} 
                                 alt="location icon" 
                            />
                            {userInfo?.location}
                        </p>}
                            
                        {userInfo?.blog && <p>
                            <img src={information} 
                                 alt=""
                            />
                            {userInfo?.blog}
                        </p>}

                        <p> 
                            <img src={github} alt="github icon"/> 
                            <a href={userInfo?.html_url}> View github profile: </a>
                        </p>

                    </div>
                </div>
            </div>

            <div className="user-repos">
                {
                    repos ? repos.map(repo => {
                        return <Repo repo={repo} key={repo.id} />
                    }) : <h2>No repositories from this user.</h2>
                }
            </div>
        </div>
    )
}

export default User;