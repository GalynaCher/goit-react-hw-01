import css from "./FriendListItem.module.css";

const getColor = variant => {
    switch (variant) { 
        case true: return "green";
        case false: return "red";
    } 
};

const FriendListItem = ({ friend }) => {
    console.log(getColor(friend.isOnline) );
    return (
        <div>
            <img src={friend.avatar} alt="Avatar" width="48px" className={css.listLiImg} />
            <p className={css.listLiName}>{friend.name}</p>
            <p className={css.listLiOnl}
                style={{ color: getColor(friend.isOnline) }}
            >
                    {friend.isOnline ? "Online" : "Offline"}
            </p>
        </div>
    )
};

export default FriendListItem;