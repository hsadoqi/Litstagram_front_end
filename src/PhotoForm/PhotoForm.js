import React from 'react'
import {withRouter } from 'react-router-dom'
import UploadPhoto from '../UploadPhoto/UploadPhoto.js'

class PhotoForm extends React.Component {
  state = {
    caption:"",
    img:null
  }
  handleFormChange = (event)=>{
    console.log("handleFormChange",event.target.value);
    this.setState({
      [event.target.name]: event.target.value

    })
  }
  handleSubmit = (event) => {
    console.log("Whats going on");
    event.preventDefault()
    console.log("What this b",this.state);
    let token = localStorage.getItem('token')
   // console.log("This my token",token);
   fetch('http://localhost:3000/images', {
     method: 'POST',
     headers: {
       "Content-type": 'application/json',
     },
     body: JSON.stringify({
       image: {
         caption: this.state.caption,
         img: this.state.img,
         poster_id: `${Number(token)}`
       }
     })
   }).then(r => r.json())
   .then(data => this.props.history.push(`/users/${data.data.attributes.poster.id}/profile`))
  
   }



postPhoto =(img)=>{
  // console.log(img);
  this.setState({img})
}
  render() {
    console.log("this is my state",this.state.img);
    return (
      <div>
      <UploadPhoto post={this.postPhoto}/>
        <form onSubmit={this.handleSubmit}>

          <label>
          <input type="text" name="caption" value={this.state.caption} onChange={this.handleFormChange} placeholder="Whats on your mind?"/>
          </label>
          <input type="submit" value="submit"/>
        </form>
      </div>
    )
  }
}
export default withRouter(PhotoForm)
