// import App from "../App.jsx"
import css from "./Profile.module.css"

const Profile = ({name, tag, location, image, stats}) => {
    return (
        <div className={css.profileCard}>
            <div className={css.contacts}>
                <img
                    src={image}
                    alt="User avatar"
                    className={css.thumb}
                />
                <p className={css.name}>{name}</p>
                <p className={css.tag}>@{tag}</p>
                <p className={css.location}>{location}</p>
            </div>

            <ul className={css.stats}>
                <li>
                    <span>Followers</span>
                    <span>{stats.followers}</span>
                </li>
                <li
                    style={{
                        borderLeft: "5px solid gray",
                        borderRight: "5px solid gray"
                    }}>
                    <span>Views</span>
                    <span>{stats.views}</span>
                </li>
                <li>
                    <span>Likes</span>
                    <span>{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}
 
// console.log(App.stats);

export default Profile;