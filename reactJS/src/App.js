import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
  id = 2
  state = {
    information: [
      {
        id: 0,
        name: '홍길동',
        phone: '010-8888-8888'
      },
      {
        id: 1,
        name: '장만월',
        phone: '010-7777-4444'
      },
    ]
    
  }

  _handleCreate = (data) => {
    console.log(data);
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  }

  _handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }

  _handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => id === info.id 
        ? { ...info, ...data}
        : info
      )
    })
  }

  render() {
    return (
      <div>
        <PhoneForm 
          onCreate={this._handleCreate}
        />
        <PhoneInfoList 
          data={this.state.information} 
          onRemove={this._handleRemove}
          onUpdate={this._handleUpdate}
        />
      </div>
    )
  }
}


export default App;
