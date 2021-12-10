import { useState, useEffect } from 'react';
import MeetupList from "../components/meetups/MeetupList";
import {ALL_MEETUPS} from "../constants"

const DUMMY_DATA = [
    {
      id: 'm1',
      title: 'This is a first meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
      id: 'm2',
      title: 'This is a second meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
  ];

function AllMeetups() {
  console.log("ALLMEETUPS INIT")
  const [isLoading, setIsLoading] = useState(true)
  const [meetups, setMeetups] = useState([])

  useEffect(()=>{
    fetch(
      ALL_MEETUPS,
          {  
              method:'GET'
          }
      ).then((response) => {
          return response.json()
        })
        .catch((error) => {
          console.error('Error:', error);
          setIsLoading(false)
          setMeetups([])
        })
        .then(data => {
          console.log("data: ", data)
          setIsLoading(false)
          setMeetups(data ? data : [])
        })
  },[])
 

    console.log(meetups)
    return <section>
        <h1>All Meetups</h1>
       <MeetupList meetup={meetups}/>
        </section>
}

export default AllMeetups;