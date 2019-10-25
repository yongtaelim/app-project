import React, { Component } from "react";
import PhoneInfo from "./PhoneInfo";

class PhoneInfoList extends Component {
    static defaultProps = {
        data: [],
        onRemove: () => console.warn('onRemove not defined'),
        onUpdate: () => console.warn('onUpdate not defined'),
    }

    //resource 아낄려고..
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.data !== this.props.data;
    }
    
    render() {
        //data 배열을 가져와서 map을 통해 JSX로 변환한다.
        //key는 반드시 필요!
        const { data, onRemove, onUpdate } = this.props;
        const list = data.map(
            info => (
                <PhoneInfo 
                    key={info.id} 
                    info={info}
                    onRemove={onRemove} 
                    onUpdate={onUpdate}
                />)
        );

        return (
            <div>
                {list}
            </div>
        )
    }
}

export default PhoneInfoList;