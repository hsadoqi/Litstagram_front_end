import React, { Component } from 'react'
import './UploadPhoto.css'


let image
export default class UploadPhoto extends Component {
    state = {
        img: null,
    }

<<<<<<< HEAD
    handleFormChange = (event)=>{
      // console.log(event.target.value);
      this.setState({
        [event.target.name]: event.target.value

      })
    }
    
      handleSubmit = (event) =>{
        event.preventDefault()
        console.log("hitting handleSubmit");
        this.postPhoto(this.state)
      }

=======
>>>>>>> c1a414a99298ad61ea0d7f6af3e6ecbb9f94e197
    showWidget = (widget) =>{
        widget.open()
      }

    checkUploadResult = (resultEvent, widget) => {
    // console.log("Steven holla",resultEvent);
    // console.log(widget);
    if (resultEvent.event === 'success'){
          widget.close()
          this.setState({ img: resultEvent.info.secure_url}
        )
        this.props.post(this.state.img)
        // .then(this.props.history.push(`/profile`))
        }
    }

    // postPhoto = (userObj) =>{
    //   // console.log("userObj",userObj);
    // let token = localStorage.getItem('token')
    // // console.log("This my token",token);
    // fetch('http://localhost:3000/images', {
    //   method: 'POST',
    //   headers: {
    //     "Content-type": 'application/json',
    //   },
    //   body: JSON.stringify({
    //     image: {
    //       img: userObj.img,
    //       poster_id: `${Number(token)}`
    //     }
    //   })
    // })
    // .then(r => r.json()).then("Whats going on in my fetch",console.log)
    // }




    render(){
        // console.log("this is your photo",this.state.photo)
        let widget = window.cloudinary.createUploadWidget({cloudName: "df3knd9zd", uploadPreset: "rfk3xygs" }
        , (error, result) => {this.checkUploadResult(result, widget)}
      );

        if(this.state.img){
            image = <img src={this.state.img} alt=""/>
            // widget.close({ quiet:true })
        }

        return (
            <div className='upload-photo'>
             {this.state.img ? null : <button onClick={()=> this.showWidget(widget)}>Click to upload photo! </button> }


             {image}

            </div>
        )
    }
}
