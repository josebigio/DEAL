import MeetupItem from './MeetupItem'

import classes from './MeetupList.module.css'

export default function MeetupList(props) {
    return (
        <ul className={classes.list}>
            {props.meetup.map(meetup => 
            <MeetupItem 
                key={meetup.id}
                id={meetup.id}
                image={meetup.image}
                description={meetup.description}
                address={meetup.address}
                title={meetup.title}
              />)}
        </ul>
    )
}