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
import {Users} from '../../dummyData'
import CloseFriend from "../closeFriend/CloseFriend";

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
            {Users.map((u) => (
              <CloseFriend key={u.id} user={u} />
            ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
