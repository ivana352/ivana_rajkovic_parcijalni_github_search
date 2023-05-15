import React from "react";
import "./Home.css";

const Home = () => {
    return (
        <div className="container">
            <div className="search-form">
                <h2>GitHub search user</h2>
                <form>
                    <input type="text" />
                    <button>Search</button> 
                </form>
            </div>

            <div className="search-results">
                <div className="user">
                    <div className="image">
                        <img src="https://avatars.githubusercontent.com/u/128634248?s=400&u=fb0f876c380d28ba792c7b92d967f42b77939487&v=4" />
                    </div>

                    <div className="user-info">
                        <h3>User name:</h3>
                        <small>ID34fj</small>
                        <a href="">View profile</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;