import './App.css';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import Favorites from './pages/Favorites';
import NewMeetups from './pages/NewMeetups';
import Layout from './components/layout/Layout';
import { incrementCounter } from './redux/counter/counter'
import ReelsPage from './pages/Reels';

function App(props) {
  return (
    <div className="App">
     <Layout>
        <Routes>
          <Route path="/" element={<ReelsPage />} />
          <Route path="/new-meetups" element={<NewMeetups />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Layout>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count
  }
}

const mapDispatchToProps = {
    incrementCounter: incrementCounter
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
