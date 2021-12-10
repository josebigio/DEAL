import GoogleLoginComponent from "../components/auth/GoogleLoginComponent"
import { useState } from 'react'
import { getAllReels, uploadReel } from '../redux/reels'
import { connect } from 'react-redux'

function Favorites(props) {
    console.log("FAVORITES PROPS: ", props)
    const [file, setFile] = useState()

    function uploadFile(event) {
        event.preventDefault()
        console.log(event)
        props.uploadReel(file)
        
    }

    function renderReels() {
        if (props.isLoading) {
            console.log("isLoading block")
            return <div>LOADING...</div>
        } else if (!props.reels) {
            console.log("gettingAllReels")
            props.getAllReels()
            return <div>initialState</div>
        }
        else {
            console.log("render block")
            return (<div>
                {props.reels.map((reel, index) => {
                    return <video width="750" height="500" controls key={index} >
                        <source src={reel} type="video/mp4" />
                    </video>
                })}
            </div>
            )
        }
    }

    function renderForm() {
        if(props.isUploading) {
            return <div>UPLOADING...</div>
        }
        return (
                <div>
                    <form onSubmit={uploadFile}>
                        <label>Upload file</label>
                        <input type="file" accept="video/*" onChange={event => setFile(event.target.files)} />
                        <button type="submit">Send</button>
                    </form>
                </div>
        )
    }

    return (
        <div>
            {/* <GoogleLoginComponent /> */}
            {renderForm()}
            {renderReels()}
        </div>
    )

}



const mapStateToProps = (state) => {
    console.log("mapStateToProps...", state)
    return {
        reels: state.reels.reels,
        isLoading: state.reels.isLoading,
        error: state.reels.error,
        isUploading: state.reels.isUploading
    }
}

const mapDispatchToProps = {
    getAllReels: getAllReels,
    uploadReel: uploadReel
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
