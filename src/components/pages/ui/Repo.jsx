import React from "react";

const Repo = ({repo}) => {
    const {name, html_url, descripion, language} = repo;
    return (
        <div className="repo">
            <h3>
                <a href={html_url}> {name} </a>
            </h3>

            <p> {descripion} </p>
            
        </div>
    )
};

export default Repo;