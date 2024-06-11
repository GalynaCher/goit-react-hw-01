import FriendListItem from "../FriendListItem/FriendListItem.jsx";
import css from "./FriendList.module.css";

const FriendList = ({ friends }) => { 
    return (
        <ul className={css.listUl}>
            {friends.map(friend => { 
                return <li key={friend.id} className={css.listLi}>
                            <FriendListItem friend={friend} />
                        </li>
             })}
        </ul>
        )
    };

export default FriendList;