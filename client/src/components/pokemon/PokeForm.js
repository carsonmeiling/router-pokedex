import React, { Components } from 'react';
import { Form } from 'semantic-ui-react';

class PokeForm extends Components {
  state = { name: '', level: 0, location: '', move: '', type: ''}

  componentDidMount(){
    if (this.props.id) {
      const { name, level, location, move, type } = this.props
      this.setState({ name, level, location, move, type })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id){
      this.props.updatePokemon(this.props.id, this.state)
      this.props.toggleForm();
    } else {
      // this.props.addPokemon(this.state)
    }
  this.setState = { name: '', level: 0, location: '', move: '', type: ''}

  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value})
  }


  render() {
    const { name, level, location, move, type } = this.state

    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label='Name'
          required

          name='name'
          value={name}
          onChange={this.handleChange}
          />
        <Form.Input
          label='Level'
          required

          name='level'
          value={level}
          onChange={this.handleChange}
          />
        <Form.Input
          label='Location'
          required

          name='location'
          value={location}
          onChange={this.handleChange}
          />
        <Form.Input
          label='Move'
          required

          name='move'
          value={move}
          onChange={this.handleChange}
          />
        <Form.Input
          label='Type'
          required

          name='type'
          value={type}
          onChange={this.handleChange}
          />
          <Form.Button>
            Submit
          </Form.Button>
      </Form>
    )
  }
}

export default PokeForm;