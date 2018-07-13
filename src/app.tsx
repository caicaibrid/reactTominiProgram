import Taro, { Component } from '@tarojs/taro'
import '@tarojs/async-await'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './app.styl'

const store = configStore()

class App extends Component {
  config = {
    pages: [
      'pages/index/index',
      'pages/about/index',
      'pages/list/index',
      'pages/contact/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar:{
      color:"#ff0000",
      selectedColor:"#fff000",
      backgroundColor:"#999",
      borderStyle:"white",
      list:[
          {
            pagePath:"pages/index/index",
            text:"index",
            iconPath:"static/images/1.png", // 81*81
            selectedIconPath:"static/images/active.png"
          },{
            pagePath:"pages/about/index",
            text:"about",
            iconPath:"static/images/2.png",
            selectedIconPath:"static/images/active.png"
          },{
            pagePath:"pages/list/index",
            text:"list",
            iconPath:"static/images/3.png",
            selectedIconPath:"static/images/active.png"
          },{
            pagePath:"pages/contact/index",
            text:"contact",
            iconPath:"static/images/4.png",
            selectedIconPath:"static/images/active.png"
          }
        ],
      position:"bottom"
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
