import React, { PureComponent } from 'react'
import { Row, Col } from 'antd'
import { Page } from 'components'
import { Map, Markers } from 'react-amap'
import styles from './index.less'
import { connect } from 'dva'

@connect(({ map, loading }) => ({ map, loading }))
class MapContent extends PureComponent {
  render() {
    const { loading, map, dispatch } = this.props
    const { markers } = map
    const mapOption = {
      loading: loading.effects['map/query'],
      center: [117.2074699402, 34.2642392777],
      plugins: ['ToolBar', 'OverView', 'MapType'],
    }
    const markersOption = {
      useCluster: true,
      markers: markers,
    }
    return (
      <Page inner>
        <Row>
          <Col span={24} style={{ height: '700px' }}>
            <Map
              className={styles.map}
              amapkey={'af4809cb527ed45c25b8ccb6d251193e'}
              {...mapOption}
            >
              <Markers {...markersOption} />
            </Map>
          </Col>
        </Row>
      </Page>
    )
  }
}

export default MapContent
