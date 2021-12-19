import { useState, useEffect } from 'react';
import MeetupList from "../components/meetups/MeetupList";
import {ALL_MEETUPS} from "../constants"
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

function ReelsPage() {
  console.log("ALLMEETUPS INIT")
  const [isLoading, setIsLoading] = useState(true)
  const [meetups, setMeetups] = useState([])

  const { getAccessTokenSilently } = useAuth0();

  const getAllReels = async ()=> {
    console.log("getAllReels2")
    try {
      const token = await getAccessTokenSilently();
      console.log("token: ", token)
      const response = await fetch(
        ALL_MEETUPS,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const data = await response.json();
      setIsLoading(false)
      setMeetups(data ? data : [])
    }catch(error) {
      console.error("error getting user token", error)
      setIsLoading(false)
      setMeetups([])
    }
  
  }

  useEffect(()=>{
    getAllReels();
  },[])
 

    console.log(meetups)
    return <section>
        <h1>All Meetups</h1>
       <MeetupList meetup={meetups}/>
        </section>
}

export default withAuthenticationRequired(ReelsPage);