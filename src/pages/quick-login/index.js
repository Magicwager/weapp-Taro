import Taro, { Component } from "@tarojs/taro"
import { View, Text, Input, Button, Navigator, Checkbox } from "@tarojs/components"
import "./index.scss"

export default class Index extends Component {

    config = {
        navigationBarTitleText: "闪送"
    }
    constructor(props) {
        super(props);
        this.state = {
            inputValue: " ",
            btnDisabled: true,
            checked: true
        }
    }
    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    inputChange = (e) => {
        let inputVal = e.detail.value;
        if (inputVal.length == 11) {
            this.setState({
                inputValue: inputVal,
                btnDisabled: false
            })
        } else {
            this.setState({
                inputValue: inputVal,
                btnDisabled: true
            })
        }
    }
    /* 
   * 验证手机号
   */
    checkPhoneNum = (e) => {
        console.log(e)
    }
    /* 
        * checkbox监听
    */
    checkChange = () => {
        this.setState({
            checked: !this.state.checked
        })
    }
    /* 
    * 发送验证码
    */
    submitCode = () => {
        /* 验证手机号 */
        let inputVal = this.state.inputValue;
        let myreg = /^1[0-9]\d{9}$/;
        if (!myreg.test(inputVal)) {
            console.log('请输入正确的手机号！');
            return false;
        }
        if (!this.state.checked) {
            console.log("请阅读并同意《闪送服务协议》");
            return false;
        }
       /*  wx.redirectTo({
            url: `/pages/quick-login/img-captcha?phoneNum=${this.data.inputValue}`,
            function() {

            }
        }) */

    }
    render() {
        return (
            <View className="quick-login-outer">
                <View className="login-title">手机号快捷登陆</View>
                <View className="login-title-tips">为了方便进行联系，请输入您的常用手机号码</View>
                <Input className="input" value={this.state.inputValue} type="number" placeholder-className="input-text" placeholder="请输入手机号码" focus="true" maxlength="11" onBlur={this.checkPhoneNum} onInput={this.inputChange} />
                <View className="cpa-checkbox-outer">
                    <Checkbox checked={this.state.checked}  />
                    <Text>我已阅读并同意</Text>
                    <Navigator className="iss-cpa" url="">《闪送服务协议》</Navigator>
                </View>
                <Button onClick={this.submitCode} disabled="{{btnDisabled}}" className={this.state.btnDisabled == true ? 'btn-disable' : 'btn-activity'}>发送验证码</Button>
            </View>
        )
    }
}

