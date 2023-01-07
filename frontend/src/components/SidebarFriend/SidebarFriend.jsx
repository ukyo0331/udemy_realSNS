import {Users} from "../../dummydata";

const SidebarFriend = ({user}) => {
    const {profilePicture, username} = user;
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <li className="sidebarFriend">
            <img
                src={`${PUBLIC_FOLDER}${profilePicture}`}
                alt=""
                className='sidebarFriendImg'
            />
            <span className="sidebarFriendName">{username}</span>
        </li>
    )
};

export default SidebarFriend;