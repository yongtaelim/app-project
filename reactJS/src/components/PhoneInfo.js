import React, { Component } from "react"

class PhoneInfo extends Component {
    static defaultProps = {
        info : {
            name: '이름',
            phone: '010-0000-0000',
            id: 0
        }
    }

    state = {
        // 우리는 수정 버튼을 눌렀을 떄 editing 값을 true 로 설정해줄것입니다.
        // 이 값이 true 일 때에는, 기존에 텍스트 형태로 보여주던 값들을
        // input 형태로 보여주게 됩니다.
        editing: false,
        name: '',
        phone: '',
    }

    _handleRemove = () => {
        const { info, onRemove } = this.props;
        onRemove(info.id);
    }

    _handleToggleEdit = () => {
        const { editing } = this.state;
        this.setState({
            editing: !editing
        });
    }

    _handleUpdate = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        //editing 값이 바뀔때 처리할 로직
        //수정을 누르면 기존의 값이 input에 나타나고 
        //수정을 적용하면 input의 값들을 부모한테 전달한다.

        console.log(prevProps.editing);
        console.log(prevState.editing);

        const { info, onUpdate } = this.props;

        //editing 값이 false -> true
        if(!prevState.editing && this.state.editing) {            
            this.setState({
                name: info.name,
                phone: info.phone,
            });
        }

        //editing 값이 true -> false
        if (prevState.editing && !this.state.editing) {
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone,
            });
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(!this.state.editing && !nextState.editing 
            && nextProps.info === this.props.info) {
                return false;
        }
        return true;
    }

    render() {
        const style = {
           border: '1px solid black',
           padding: '8px',
           margin: '8px'
        };

        const { editing } = this.state;

        if (editing) {
            return (
                <div style={style}>
                    <div>
                        <input
                            value={this.state.name}
                            name="name"
                            placeholder="이름"
                            onChange={this._handleUpdate}
                        />
                    </div>
                    <div>
                        <input
                            value={this.state.phone}
                            name="phone"
                            placeholder="전화번호"
                            onChange={this._handleUpdate}
                        />
                    </div>
                    <button onClick={this._handleToggleEdit}>적용</button>
                    <button onClick={this._handleRemove}>삭제</button>
                </div>
            );
        }

        const {
            id, name, phone
        } = this.props.info;

        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <div>{id}</div>
                <button onClick={this._handleToggleEdit}>수정</button>
                <button onClick={this._handleRemove}>삭제</button>
            </div>
        )
    }
}

export default PhoneInfo;