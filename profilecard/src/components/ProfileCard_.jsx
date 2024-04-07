import React from 'react';
import PropTypes from "prop-types";
import '../App.css';

const UserData = [
    {
        name: "SivaGanesz",
        city: "Tuticorin",
        role: "Frontend Developer",
        online: true,
        image: "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-user-circle-icon.png",
        skill: ["UI / UX","HTML", "Tailwind css", "Javascript", "React js"]
    },
    {
        name: "Mahadevan",
        city: "Varanasi",
        role: "Fullstack Developer",
        online: true,
        image: "https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg",
        skill: ["HTML", "Tailwind css", "Javascript", "React js", "Node js", "MySQL"]
    },
    {
        name: "Veerabhadra",
        city: "Kolkata",
        role: "Backend Developer",
        online: false,
        image: "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
        skill: ["Java", "Django", "Node js", "MySQL", "Mongo DB"]
    }
];

function UserCard(props) {
    return (
        <div className="container">
            <span className={props.online ? "pro online" : "pro offline"}>{props.online ? "Online" : "Offline"}</span>
            <img src={props.image} className='img' width={"100"} alt={props.name} />
            <h3>{props.name}</h3>
            <h5>{props.city}</h5>
            <p>{props.role}</p>
            <div className='button'>
                <button className='primary'>Following</button>
                <button className='primary outline'>Message</button>
            </div>
            <div className="skill">
                <h5>Skill</h5>
                <ul>
                    {props.skill.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

const ProfileCard_ = () => {
    return (
        <div id="root">
            <h1 className="heading">Profile Card Project in React JS</h1>
            <div className="profile-cards">
                {UserData.map((user, index) => (
                    <UserCard
                        key={index}
                        name={user.name}
                        city={user.city}
                        role={user.role}
                        image={user.image}
                        online={user.online}
                        skill={user.skill}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProfileCard_;

UserCard.propTypes = {
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    skill: PropTypes.arrayOf(PropTypes.string).isRequired,
    online: PropTypes.bool.isRequired
};