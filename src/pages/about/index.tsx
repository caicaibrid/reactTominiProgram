/**
 * Created by Administrator on 2018/7/13 0013.
 */
import Taro,{Component} from "@tarojs/taro";
import {View} from "@tarojs/components";
import "./index.css";
import AAA from "../../components/aaa/index"
export default class About extends Component{
  config = {
    navigationBarTitleText: 'About'
  }
  render(){
    return (
      <View className="about">
        About page
        <AAA />
      </View>
    )
  }
}
