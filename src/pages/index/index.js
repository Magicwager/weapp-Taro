import Taro, { Component } from "@tarojs/taro"
import { View, Text, Button } from "@tarojs/components"
import "./index.scss"

export default class Index extends Component {

  config = {
    navigationBarTitleText: "首页"
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  toQuickLogin=()=>{
    Taro.redirectTo({
      url:`/pages/quick-login/index`
    })
  }
  render () {
    return (
      <View className="index">
        <Text>Hello world!</Text>
        <Button onClick={this.toQuickLogin}>快捷登陆</Button>
      </View>
    )
  }
}

