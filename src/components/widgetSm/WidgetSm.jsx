import './widgetSm.css';
import { Visibility } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get('/users?new=true', {
          headers: {
            token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTlhOTkxODYxZTMxYjllNjc2ZDU0YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzMyMDU3NiwiZXhwIjoxNjMzNzUyNTc2fQ.ezOMV5IS0l9ZgCm98y3ttSiVa3rvsKjwC_BmzozZ6YU',
          },
        });
        setNewUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers();
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user, i) => (
          <li className="widgetSmListItem" key={i}>
            <img src={user.profilePic || 'https://avatars.githubusercontent.com/u/90621155?v=4'} alt="Profile" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
              <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
