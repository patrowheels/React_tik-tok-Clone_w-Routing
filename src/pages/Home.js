import React  from 'react'
import FollowersColumn from '../components/FollowersColumn'

const Home = () => {
  return (
    <div className="Home">
      <h1>Home</h1>
      <FollowersColumn/>
      <div className="feed"></div>
      <div className="suggestBox">wow</div>

    </div>
  );
}

export default Home;