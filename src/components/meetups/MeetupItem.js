import { useContext } from 'react'
import Card from '../ui/Card'
import FavoritesContext from '../../store/favorites-context'

import classes from './MeetupItem.module.css'

export default function MeetupItem(props) {

    const favoritesContext = useContext(FavoritesContext)
    const itemIsFavorite = favoritesContext.itemIsFavorite(props.id)

    function toggleFavoriteStatusHandler() {
        console.log("toggleFavoriteStatusHandler")
        if(itemIsFavorite) {
            favoritesContext.removeFavorite(props.id)
        }else {
            favoritesContext.addFavorite({
                id: props.id,
                title: props.title,
                descripion: props.description,
                image: props.image,
                address: props.address
            })
        }
    }

    return (
        <Card>
            <li className={classes.item}>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title}/>
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.action} onClick={toggleFavoriteStatusHandler}>
                    <button>{itemIsFavorite ? 'Remove from favorites' : "Add to favorite!"} </button>
                </div>
            </li>
    </Card>)
}