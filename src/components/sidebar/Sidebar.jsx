import "./sidebar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import SmsIcon from '@mui/icons-material/Sms';
import VideocamIcon from '@mui/icons-material/Videocam';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import WorkIcon from '@mui/icons-material/Work';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import SchoolIcon from '@mui/icons-material/School';

const Sidebar = () => {
  return (
    <div className="sideBar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">

          <li className="sidebarListItem">
              <RssFeedIcon className="sidebarIcon" />
              <span className="sidebarListItemText">Feed</span>
          </li>

          <li className="sidebarListItem">
              <SmsIcon className="sidebarIcon" />
              <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
              <VideocamIcon className="sidebarIcon" />
              <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
              <Diversity3Icon className="sidebarIcon" />
              <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
              <BookmarksIcon className="sidebarIcon" />
              <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
              <LiveHelpIcon className="sidebarIcon" />
              <span className="sidebarListItemText">Question</span>
          </li>
          <li className="sidebarListItem">
              <WorkIcon className="sidebarIcon" />
              <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
              <EventSeatIcon className="sidebarIcon" />
              <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
              <SchoolIcon className="sidebarIcon" />
              <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr"/>
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img src="/assets/person/2.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/3.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Mark William</span>
          </li>          <li className="sidebarFriend">
            <img src="/assets/person/4.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Sona Nora</span>
          </li>          <li className="sidebarFriend">
            <img src="/assets/person/5.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>          <li className="sidebarFriend">
            <img src="/assets/person/6.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Mishal Rowl</span>
          </li>          <li className="sidebarFriend">
            <img src="/assets/person/7.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Dihon Listy</span>
          </li>          <li className="sidebarFriend">
            <img src="/assets/person/8.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>          <li className="sidebarFriend">
            <img src="/assets/person/2.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
