import React from 'react'
import { Form } from 'semantic-ui-react'
// import UploadPhoto from './UploadPhoto/UploadPhoto'

export default class PhotoForm extends React.Component {

  render() {
    return (
      <div>

        <form onSubmit={this.props.handleSubmit}>
          <label>
          <input type="text" name="caption" value={this.props.value} onChange={this.props.handleFormChange}/>
          </label>
          <input type="submit" value="submit"/>

        </form>

      </div>
    )
  }
}
