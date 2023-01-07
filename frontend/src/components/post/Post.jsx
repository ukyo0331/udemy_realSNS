import './post.css'
import { MoreVert } from "@mui/icons-material";
import {useState, useEffect, useContext} from "react";
import axios from "axios";
import { format } from 'timeago.js';
import {Link} from "react-router-dom";
import {AuthContext} from "../../state/AuthContext";

const Post = ({post}) => {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
    const {id, desc, img, createdAt, userId, likes, comment } = post;
    const [ likeCount, setLikeCount ] = useState(likes.length);
    const [ isLiked, setIsLiked ] = useState(false);
    const [ user, setUser ] = useState({});
    const {user: currentUser} = useContext(AuthContext);

    useEffect(() => {
        const fetchUser = async () => {
            const response = await axios.get(
                `/users?userId=${post.userId}`
            );
            setUser(response.data);
        };
        fetchUser();
    }, [post.userId]);

    const handleLike = async () => {
        try {
            //いいねのAPIを叩いていく
            await axios.put(`/posts/${post._id}/like`, {userId: currentUser._id})
        } catch (err) {
            console.log(err)
        }
        setLikeCount(isLiked ? likeCount -1 : likeCount +1);
        setIsLiked(!isLiked)
    };
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`/profile/${user.username}`}>
                            <img src={
                                user.profilePicture ?
                                    PUBLIC_FOLDER + user.profilePicture :
                                    PUBLIC_FOLDER + "/person/noAvatar.png"}
                                alt=""
                                 className='postProfileImg
                            '/>
                        </Link>
                        <span className="postUsername">
                            {user.username}
                        </span>
                        <span className="postDate">{format(createdAt)}</span>
                    </div>
                <div className="postTopRight">
                </div>
                    <MoreVert />
                </div>
                <div className="postCenter">
                    <span className="postText">{desc}</span>
                    <img src={PUBLIC_FOLDER + img} alt=""
                         className='postImg'/>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src={PUBLIC_FOLDER + "/heart.png"} alt=""
                             className='likeIcon'
                             onClick={() => {handleLike()}}
                        />
                        <span className="postLikeCounter">{likeCount}人がいいねしました。</span>
                    </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{comment}:コメント</span>
                </div>
                </div>
            </div>
        </div>
    )
};

export default Post;