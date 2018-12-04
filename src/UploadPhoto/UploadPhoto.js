import React, { Component } from 'react'
import './UploadPhoto.css'

let image
export default class UploadPhoto extends Component {
    state = {
        photo: null
    }



    showWidget = (widget) =>{
        widget.open()
      }

    checkUploadResult = (resultEvent) => {
    // console.log("Steven holla",resultEvent);
    if (resultEvent.event === 'success'){
        // Call helper function to post photo in the backend
        // example below
        this.setState({ photo: resultEvent.info.secure_url})
        // this.postPhoto({caption:'yass bitch', img: resultEvent.info.secure_url})
      // route them to the necesary place
        // .then(this.props.history.push(`/profile`))
        }
    }

    postPhoto = (userObj) =>{
    let token = localStorage.getItem('token')
    fetch('http://localhost:3000/images', {
      method: 'POST',
      headers: {
        "Content-type": 'application/json',
      },
      body: JSON.stringify({
        image: {
          caption: userObj.caption,
          img: userObj.img,
          poster_id: `${Number(token)}`
        }
      })
    })
    .then(r => r.json())
    }


  // CloudName:"df3knd9zd",
  // uploadPreset:"rfk3xygs"
    render(){
        console.log(this.state)
        let widget = window.cloudinary.createUploadWidget({cloudName: "df3knd9zd", uploadPreset: "rfk3xygs" }, (error, result) => {this.checkUploadResult(result) });

        if(this.state.photo){
            image = <img src={this.state.photo} alt=""/>
            widget.close({ quiet:true })
        }

        return (
            <div className='upload-photo'>
                {image}
                <button onClick={()=> this.showWidget(widget)}>UploadPhoto </button>
            </div>
        )
    }
}