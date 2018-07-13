/**
 * Created by Administrator on 2018/7/13 0013.
 */
import Taro,{Component} from "@tarojs/taro";
import {View,Text} from "@tarojs/components";
import "./index.styl";


export default class List extends Component{
  config = {
    navigationBarTitleText: 'list',
    navigationBarBackgroundColor	:"#ff0000",
    navigationBarTextStyle:"black",

  }
  render(){
    return (
      <View className="list">
        list page
        <View onTap={()=>Taro.switchTab({
          url: '/pages/index/index'
        })}><Text className="text">to Index</Text></View>
        <p>html标签p</p>
      </View>
    )
  }
}
