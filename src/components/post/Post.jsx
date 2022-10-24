import React from 'react'
import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Users} from '../../dummyData'

const Post = ({post}) => {
  return (
    <div>
      <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src= {Users.filter((u) => u.id === post?.userId)[0].profilePicture} alt="" />
                    <span className="postUserName">
                      {Users.filter((u) => u.id === post?.userId)[0].username}
                    </span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                     <MoreVertIcon />
                </div>
                <div className="postTopLeft"></div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img src="/assets/images/post/1.jpg" alt="" className="postImg" />
            </div>
            <div className="potBottom">
                <div className="postBottomLeft">
                    <img src="assets/like.png" alt="" className="likeIcon" />
                    <img src="assets/love.png" alt="" className="likeIcon" />
                    <span className="postLikeCounter">{post.like} people liked it</span>
                </div>
                <div className="postBottomRight"> 
                    <span className="postCommentText">{post.comment} comments</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Post
