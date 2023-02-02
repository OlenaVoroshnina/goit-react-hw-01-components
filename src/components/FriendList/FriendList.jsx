import PropTypes from "prop-types";
import css from '../FriendList/FriendList.module.css';
import FriendListItem from "./FriendListItem";


export default function FriendList ({friends}) {
    return(
        <ul className= {css.friendList}>
            {friends.map(friend => {
                return(
                    <FriendListItem
                        key={friend.id}
                        avatar = {friend.avatar} 
                        name = {friend.name} 
                        isOnline = {friend.isOnline}
                    />
                )
            })}
        </ul>
    )
    
};

FriendList.propTypes ={
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    }))
};