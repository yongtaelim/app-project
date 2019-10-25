import React, { Component } from 'react'

class PhoneForm extends Component {
    state = {
        name: '',
        phone: ''
    }

    _handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    _handleSubmit = (e) => {
        // page reloading 방지
        e.preventDefault();

        // 상태값을 onCreate를 통하여 부모에게 전달
        this.props.onCreate(this.state);

        // 상태 초기화
        this.setState({
            name:'',
            phone:''
        })
    }

    render() {
        return (
            <form onSubmit={this._handleSubmit}>
                <input
                    placeholder="이름"
                    value={this.state.name}
                    onChange={this._handleChange}
                    name="name"
                />
                <input
                    placeholder="전화번호"
                    value={this.state.phone}
                    onChange={this._handleChange}
                    name="phone"
                />
                <div>{this.state.name} {this.state.phone}</div>
                <button type="submit">등록</button>
            </form>
        );
    }
}

export default PhoneForm