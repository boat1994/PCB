import React from 'react';
import {FormGroup,form,ControlLabel,FormControl,HelpBlock,Button } from 'react-bootstrap'
import axios from 'axios'

  function FieldGroup({ id, label, help, ...props }) {
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl    {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
    );
  }

class FormSale extends React.Component{

  constructor(props, context) {
    super(props, context);
    this.state = {
      name: '',
      email: '',
      detail:'',
      file:{},
    };
  }

handleChange = (e) => {
  this.setState({[e.target.name]: e.target.value});
}

formSubmit = (e) => {
  e.preventDefault();

let formData = new FormData();
formData.append('name', this.state.name);
formData.append('email', this.state.email);
formData.append('detail', this.state.detail);
formData.append('file', this.state.file);

}

fileChange(e)
{
  if (e.target.files[0].type == 'application/zip' || e.target.files[0].type == 'application/rar'  ) {
      this.setState({file:e.target.files[0]})
  }else {
      alert('allow file only zip or rar ')
      return e.target.value = null;
  }

}

render(){

  const placeholder = 'Please note your inquiry requirements here.Such as PCB specifications, Quantity, or other special requirements;This can help us to give you correct offer directly.';

  return <form  onSubmit={this.formSubmit}>
            <FormGroup>
              <ControlLabel>Contact</ControlLabel>
              <FormControl  onChange={this.handleChange}  type="text" name='name'  required={true}  placeholder="Name"   id="formControlsText" />
            </FormGroup>

            <FormGroup >
              <ControlLabel>Email</ControlLabel>
              <FormControl  onChange={this.handleChange.bind(this)}  type="email" name='email' required={true}  placeholder="example@mail.com"   id="formControlsText" />
            </FormGroup>
            <FieldGroup
              id="formControlsFile"
              type="file"
              label="Upload File"
              required={true}
              onChange={ (e) => this.fileChange(e) }
              help="Please upload your Gerber Files(.zip,.rar) or Bom Files(.xls,.xlsx) within 10Mb"
            />
            <FormGroup>
              <ControlLabel>Design requirements</ControlLabel>
              <FormControl  onChange={this.handleChange.bind(this)} componentClass='textarea' row={4} required={true}  name='detail'  placeholder={placeholder}   id="formControlsText" />
            </FormGroup>

            <Button type="submit" >Submit</Button>

          </form>
  }
}

export default FormSale;
