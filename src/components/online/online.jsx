
import './online.css'

export default function online(user) {
  return (
    <div>
        <li className="rightBarFriend">
            <div className="rightbarProfileImgContainer">
              <img src={user.user.profilePicture} alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightBarUsername"><b>{user.user.username}</b></span>
        </li>
    </div>
  )
}

