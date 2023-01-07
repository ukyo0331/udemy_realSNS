const Online = ({user}) => {
    const { username, profilePicture } = user;
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <>
            <li className='rightbarFriend'>
                <div className="rightbarProfileImgCntainer">
                    <img src={PUBLIC_FOLDER + profilePicture} alt=""
                         className='rightbarProfileImg'
                    />
                    <span className="rightbarOnline"></span>
                </div>
                <span className='rightUsername'>{username}</span>
            </li>
        </>
    )
};

export default Online;