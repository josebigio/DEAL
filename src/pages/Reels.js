import { useState, useEffect } from 'react';
import MeetupList from "../components/meetups/MeetupList";
import {ALL_MEETUPS} from "../constants"

function ReelsPage() {
  console.log("ALLMEETUPS INIT")
  const [isLoading, setIsLoading] = useState(true)
  const [meetups, setMeetups] = useState([])

  console.log(ALL_MEETUPS)
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

export default ReelsPage;