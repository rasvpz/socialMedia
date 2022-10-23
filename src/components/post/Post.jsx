import React from 'react'
import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
const Post = () => {
  return (
    <div>
      <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src="/assets/person/1.jpg" alt="" />
                    <span className="postUserName">AbduRashid</span>
                    <span className="postDate">5 mins ago</span>
                </div>
                <div className="postTopRight">
                     <MoreVertIcon />
                </div>
                <div className="postTopLeft"></div>
            </div>
            <div className="postCenter">
                <span className="postText">Hey its my first post  :)</span>
                <img src="/assets/images/post/1.jpg" alt="" className="postImg" />
            </div>
            <div className="potBottom">
                <div className="postBottomLeft">
                    <img src="assets/like.png" alt="" className="likeIcon" />
                    <img src="assets/love.png" alt="" className="likeIcon" />
                    <span className="postLikeCounter">32 people liked it</span>
                </div>
                <div className="postBottomRight"> 
                    <span className="postCommentText">9 comments</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Post
