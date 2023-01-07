import {Chat, Notifications, Search} from "@mui/icons-material";
import "./topbar.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../state/AuthContext";

const Topbar = () => {
    const { user } = useContext(AuthContext);
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;


    return (
        <>
            <div className="topbarContainer">
                <div className="topbarLeft">
                    <Link style={{textDecoration: 'none'}} to='/'>
                        <span className='logo'>Real SNS</span>
                    </Link>
                </div>
                <div className="topbarCenter">
                    <div className="searchbar">
                        <Search className='searchIcon'/>
                        <input
                            type="text"
                            className="searchInput"
                            placeholder='探し物はなんですか？'
                        />
                    </div>
                </div>
                <div className="topbarRight">
                    <div className="topbarIconItems">
                        <div className="topbarIconItem">
                            <Chat />
                            <span className="topbarIconBadge">2</span>
                        </div>
                        <div className="topbarIconItem">
                            <Notifications />
                            <span className="topbarIconBadge">1</span>
                        </div>
                        <Link to={`/profile/${user.username}`}>
                            <img
                                src={
                                user.profilePicture
                                ? PUBLIC_FOLDER + user.profilePicture
                                : PUBLIC_FOLDER + '/person/noAvatar.png'
                            }
                                 alt="" className='topbarImg'/>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Topbar;