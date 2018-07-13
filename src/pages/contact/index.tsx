/**
 * Created by Administrator on 2018/7/13 0013.
 */
import Taro,{Component} from "@tarojs/taro";
import {View} from "@tarojs/components";
import "./index.css";


export default class Contact extends Component{
  config = {
    navigationBarTitleText: 'Contact'
  }
  state = {
    location:{}
  }
  mapCtx=1;
  getCenterLocation = ()=> {
    this.mapCtx.getCenterLocation({
      success: function(res){
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  }
  moveToLocation = ()=>{
    this.mapCtx.moveToLocation()
  }
  translateMarker = ()=> {
    this.mapCtx.translateMarker({
      markerId: 0,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude:23.10229,
        longitude:113.3345211,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  }
  includePoints = ()=>{
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude:23.10229,
        longitude:113.3345211,
      }, {
        latitude:23.00229,
        longitude:113.3345211,
      }]
    })
  }
  componentDidMount(){
    console.log(this.refs)
    //this.mapCtx = Taro.createMapContext(this.refs.myMap)
    Taro.getLocation({
      type: 'wgs84',
      success: (res)=>{
        let latitude = res.latitude
        let longitude = res.longitude
        let speed = res.speed
        let accuracy = res.accuracy
        Taro.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28
        })
        this.setState({
          location:{
            latitude,
            longitude,
            speed,
            accuracy
          }
        })
      }
    })
  }
  render(){
    const {location} = this.state;
    return (
      <View className="Contact">
        Contact page
        <div>{JSON.stringify(location)}</div>
        <View id="myMap" show-location ref={(()=>"myMap")()} style={{width:"100%",height:"200px"}}> </View>

        <button  onTap={this.getCenterLocation.bind(this)}>获取位置</button>
        <button  onTap={this.moveToLocation.bind(this)}>移动位置</button>
        <button  onTap={this.translateMarker.bind(this)}>移动标注</button>
        <button  onTap={this.includePoints.bind(this)}>缩放视野展示所有经纬度</button>
      </View>
    )
  }
}
