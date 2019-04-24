import React, { PureComponent } from 'react'
import { Row, Col, message } from 'antd'
import { Page } from 'components'
import { Map, Markers } from 'react-amap'
import styles from './index.less'

import axios from 'axios'
import $script from 'scriptjs'
import { connect } from 'dva'

const amapSDK =
  'https://webapi.amap.com/maps?v=1.4.14&key=af4809cb527ed45c25b8ccb6d251193e'

let amapObj = null
let zoomLevel = 15
let cluster = null
let markers = []

@connect(({ map, loading }) => ({ map, loading }))
class MapContent extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      status: 0,
    }
  }
  componentWillMount() {
    if (!window.AMap) {
      axios
        .get(amapSDK, { timeout: 1000 })
        .then(res => {
          $script([amapSDK], function(a, b) {})
        })
        .catch(function(error) {
          message.error('高德地图插件加载失败')
          console.error(error)
          $script([amapSDK], function(a, b) {})
        })
    }
  }

  componentDidMount() {
    let _this = this

    function listenerStorage() {
      if (window.AMap) {
        let AMap = window.AMap
        const latlngxy = [117.2074699402, 34.2642392777] //默认北京天安门
        amapObj = new AMap.Map('amap', {
          resizeEnable: true,
          center: latlngxy,
          zoom: zoomLevel,
        })
        if (amapObj.markers) {
          markers = []
          amapObj.markers.forEach(element => {
            let marker = new AMap.Marker({
              position: new AMap.LngLat(
                element.position.longitude,
                element.position.longitude
              ),
              map: amapObj,
              extData: element.id,
            })
            markers.push(marker)
          })
        }

        //高德设置语言    ['en', 'zh_en', 'zh_cn']
        let mapLang = 'zh_cn'
        amapObj.setLang(mapLang)
        AMap.plugin(
          [
            'AMap.ToolBar',
            'AMap.OverView',
            'AMap.Scale',
            'AMap.MapType',
            'AMap.MarkerClusterer',
          ],
          function() {
            //异步同时加载多个插件
            amapObj.addControl(new AMap.ToolBar())

            // 在图面添加比例尺控件，展示地图在当前层级和纬度下的比例尺
            amapObj.addControl(new AMap.Scale())

            // 在图面添加鹰眼控件，在地图右下角显示地图的缩略图
            amapObj.addControl(new AMap.OverView({ isOpen: true }))

            // 在图面添加类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
            amapObj.addControl(new AMap.MapType())

            cluster = new AMap.MarkerClusterer(amapObj, markers)
          }
        )
        _this.setState({
          status: 1,
        })
      } else {
        setTimeout(function() {
          listenerStorage()
        }, 800)
      }
    }
    listenerStorage()
  }
  componentWillReceiveProps(nextProps) {
    const { map } = this.props
    let AMap = window.AMap
    if (map.markers) {
      markers = []
      map.markers.forEach(element => {
        let marker = new AMap.Marker({
          position: new AMap.LngLat(
            element.position.longitude,
            element.position.longitude
          ),
          map: map,
          extData: element.id,
        })
        markers.push(marker)
      })
    }
  }

  render() {
    // const { loading, map, dispatch } = this.props
    // const { markers } = map
    // const mapOption = {
    //   loading: loading.effects['map/query'],
    //   center: [117.2074699402, 34.2642392777],
    //   plugins: ['ToolBar', 'OverView', 'MapType'],
    // }
    // const markersOption = {
    //   useCluster: true,
    //   markers: markers,
    // }

    return (
      <Page inner>
        <Row>
          <Col span={24} style={{ height: '700px' }}>
            <div id="amap" style={{ height: '700px' }} />
          </Col>
        </Row>
      </Page>
    )
  }
}

export default MapContent
