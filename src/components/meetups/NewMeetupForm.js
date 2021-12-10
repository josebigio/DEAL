import Card from '../ui/Card'
import { useRef } from 'react';

import classes from './NewMeetupForm.module.css'

export default function NewMeetupForm(props) {

    const titleRef = useRef();
    const imageRef = useRef();
    const addressRef = useRef();
    const descriptionRef = useRef();

    function onSubmitHandler(event) {
        event.preventDefault();

        const formData = {
            title: titleRef.current.value,
            image: imageRef.current.value,
            address: addressRef.current.value,
            description: descriptionRef.current.value,
        }
        props.onSubmitForm(formData)
        
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={onSubmitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type='text' required id='title' ref={titleRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='img'>Meetup image</label>
                    <input type='url' required id='img' ref={imageRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Meetup address</label>
                    <input type='text' required id='address' ref={addressRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Meetup description</label>
                    <textarea type='text' required id='description' rows='5' ref={descriptionRef}/>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    )
}