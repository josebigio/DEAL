import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {}
})



export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([])
    
    function addFavoriteHandler(favoriteMeetup) {
        console.log("addFavoriteHandler", favoriteMeetup)
        setUserFavorites((previousUserFavorites) => {
            console.log("setUserFavorites", previousUserFavorites)
            return previousUserFavorites.concat(favoriteMeetup)
        })
    }   

    function removeFavoriteHandler(meetupId) {
        console.log("removeFavoriteHandler", meetupId)
        setUserFavorites((previousUserFavorites) => {
            return previousUserFavorites.filter(meetup => meetup.id != meetupId)
        })
    }

    function itemIsFavoriteHandler(meetupId) {
        console.log("itemIsFavoriteHandler", meetupId)
        return userFavorites.some(meetup => meetupId == meetup.id)
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    }
    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContext;