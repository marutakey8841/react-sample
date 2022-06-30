import React,{ Component } from 'react';
import AnswerBoard from './AnswerBoard';

class ColorControl extends Component {
    constructor(props) {
        super(props);
        // reactではデータの保存にstateを使います。
        // App.jsで設定したtitleをこのように取得できます。(this.props.title)
        this.state = {
            title: this.props.title,
            color: [0,0,0]
        }
        // イベントハンドラーでthisを使いたい場合はBindする必要があるのでConstructorに定義する
        this.handleClickButton = this.handleClickButton.bind(this);
    }

    handleClickButton() {
        const new_color = [
            Math.floor((Math.random()*55) + 200),
            Math.floor((Math.random()*55) + 200),
            Math.floor((Math.random()*55) + 200)
        ];
        //stateを変更するときは必ずsetStateで変更、stateが変更されるとViewはレンダリングされる
        this.setState(
            {
                color: new_color
            }
        );
    }

    render() {
        const title = this.state.title; 
        const color = this.state.color;
        const style = {
            background: `rgb(${color[0]},${color[1]},${color[2]}`
        };

        return (
           <AnswerBoard
        )
    }
}

export default ColorControl;