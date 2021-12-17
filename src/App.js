import './App.css';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from './components/layout/Layout';
import { incrementCounter } from './redux/counter/counter'
import ReelsPage from './pages/Reels';
import Upload from './pages/Upload'
import Profile from './pages/Profile'



function App(props) {
  console.log("APP", props);
  return (
    <div className="App">
     <Layout>
        <Routes>
          <Route path="/" element={<ReelsPage />} />
          <Route path="/upload" element={<Upload/>} />
          <Route path="/user" element={<Profile />} />
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
