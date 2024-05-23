/* eslint-disable no-mixed-spaces-and-tabs */

import userData from "./Profile/userData.json";
import Profile from './Profile/Profile';
 
import friends from "./FriendList/friends.json";
import FriendList from "./FriendList/FriendList";

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
       <FriendList friends={friends} />
    </>
  );
}
