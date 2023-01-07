import './sidebar.css'
import {Bookmark, Home, MessageRounded, Notifications, Person, Search, Settings} from '@mui/icons-material'
import { Users } from "../../dummydata";
import SidebarFriend from "../SidebarFriend/SidebarFriend";
import {Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
                            <Home className='sidebarIcon'/>
                            <span className="sidebarListItemText">ホーム</span>
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Search className='sidebarIcon'/>
                        <span className="sidebarListItemText">検索</span>
                    </li>
                    <li className="sidebarListItem">
                        <Notifications className='sidebarIcon'/>
                        <span className="sidebarListItemText">通知</span>
                    </li>
                    <li className="sidebarListItem">
                        <MessageRounded className='sidebarIcon'/>
                        <span className="sidebarListItemText">メッセージ</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className='sidebarIcon'/>
                        <span className="sidebarListItemText">お気に入り</span>
                    </li>
                    <li className="sidebarListItem">
                        <Link to='/profile/shincode'  style={{ textDecoration: 'none', color: 'black' }}>
                            <Person className='sidebarIcon'/>
                            <span className="sidebarListItemText">プロフィール</span>
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Settings className='sidebarIcon'/>
                        <span className="sidebarListItemText">設定</span>
                    </li>
                </ul>
                <hr className="sidebarHr"/>
                <ul className='sidebarFriendList'>
                    {Users.map((user) => (
                        <SidebarFriend user={user} key={user.id}/>
                    ))}
                </ul>
            </div>

        </div>
    )
};

export default Sidebar;