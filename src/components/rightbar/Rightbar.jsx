import "./rightbar.css"
import {Users} from '../../dummyData'
import Online from "../../components/online/online"
const Rightbar = () => {
  return (
    <div className="rightBar">
      <div className="rightbar">
        <div className="rightbarWrapper">
          <div className="birthdayContainer">
            <img src="/assets/gift.png" alt="" className="birthdayImg" />
            <span className="birthdayText"><b>Pola Foster</b> and <b>3 other friends </b> have a birthday today</span> 
          </div>
          <img src="https://th.bing.com/th/id/OIP.V4moGpmB_0aLvKiikGdm8gHaEE?pid=ImgDet&rs=1" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightBarFriendList">
            {Users.map((u)=>(
              <Online key={u.id} user={u} />
            ))}
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Rightbar
