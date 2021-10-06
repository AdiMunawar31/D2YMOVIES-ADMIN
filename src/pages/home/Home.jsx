import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import './home.css';

export default function Home() {
  const MONTHS = useMemo(() => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Agu', 'Sep', 'Oct', 'Nov', 'Dec'], []);

  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get('users/stats', {
          headers: {
            token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTlhOTkxODYxZTMxYjllNjc2ZDU0YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzMyMDU3NiwiZXhwIjoxNjMzNzUyNTc2fQ.ezOMV5IS0l9ZgCm98y3ttSiVa3rvsKjwC_BmzozZ6YU',
          },
        });
        const statsList = res.data.sort((a, b) => {
          return a._id - b._id;
        });
        statsList.map((item) => {
          return setUserStats((prev) => [...prev, { name: MONTHS[item._id - 1], 'New User': item.total }]);
        });
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);

  return (
    <div className="home-pages">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New User" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
