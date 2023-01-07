import './timeline.css';
import Share from '../share/Share';
import Post from "../post/Post";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../state/AuthContext";

const Timeline = (props) => {
    const { username } = props;
    const [ posts, setPosts ] = useState([]);
    const { user } = useContext(AuthContext)
    useEffect(() => {
        const fetchPosts = async () => {
            const response = username
                ? await axios.get(
                    `/posts/profile/${username}`
                )
                : await axios.get(
                `/posts/timeline/${user._id}`
            );
            setPosts(response.data.sort((post1, post2) => {
                return new Date(post2.createdAt) - new  Date(post1.createdAt)
            }));
        };
        fetchPosts();
    }, [username, user._id]);
    return (
        <div className='timeline'>
            <div className="timelineWrapper">
                <Share />
                {posts.map((post) => {
                    return (
                        <Post post={post} key={post._id}
                        />
                    )
                })}
            </div>
        </div>
    )
};

export default Timeline;