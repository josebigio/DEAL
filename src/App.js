import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo'
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import AllMeetups from './pages/AllMeetups';
import Favorites from './pages/Favorites';
import NewMeetups from './pages/NewMeetups';
import Layout from './components/layout/Layout';
import { incrementCounter } from './redux/counter/counter'

function App(props) {
  return (
    <div className="App">
      <button onClick={()=>props.incrementCounter()}>{props.count}</button>
     <Layout>
        <Routes>
          <Route path="/" element={<AllMeetups />} />
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
