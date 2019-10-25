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
    ],
    keyword: ''    
  }

  _handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
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
    const { information, keyword } = this.state;
    const filteredList = information.filter(
      info => info.name.indexOf(keyword) !== -1
    );

    return (
      <div>
        <PhoneForm 
          onCreate={this._handleCreate}
        />
        <p>
          <input
            placeholder="검색 할 이름 입력..."
            onChange={this._handleChange}
            value={keyword}
          />
        </p>
        <hr/>
        <PhoneInfoList 
          data={filteredList} 
          onRemove={this._handleRemove}
          onUpdate={this._handleUpdate}          
        />
      </div>
    )
  }
}


export default App;
