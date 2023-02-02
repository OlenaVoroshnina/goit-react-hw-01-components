import PropTypes from "prop-types";
import css from '../FriendList/FriendList.module.css';

export default function FriendListItem ({avatar, name, isOnline, id }) {
    return(
        <li className={css.item} key={id}>
            {isOnline ? <span className={css.statusTrue}></span> : <span className={css.statusFalse}></span>}
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    )   
};

FriendListItem.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,  
  };


 