import { useNavigate } from 'react-router-dom'
import { ADD_MEETUP } from "../constants"
import NewMeetupForm from '../components/meetups/NewMeetupForm'


function NewMeetupsPage() {
    
    const navigate = useNavigate()

    function handleFormSubmission(input) {
        console.log(input)
        fetch(
            ADD_MEETUP,
                {  
                    method:'POST',
                    body: JSON.stringify(input),
                    headers: {
                        'Content-Type':'application/json'
                    }
                }
            ).then((response) => {
                console.log(response.json())
                navigate("/")
                
            }).catch(error =>{
                console.log(error)
            })
    }

    return (
    <section>
        <h1>Add new meetup</h1>
        <NewMeetupForm onSubmitForm={handleFormSubmission}/>
    </section>)
}

export default NewMeetupsPage;