import React, { PureComponent } from 'react'
import { Row, Col } from 'antd'
import { Page } from 'components'
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
  }

  render() {
    return (
      <Page inner>
        <Row>
          <Col span={24} style={{ height: '700px' }}>
            <iframe
              src="http://localhost/staticmap/index.html"
              style={{ border: 0, width: '100%', height: 700 }}
            />
          </Col>
        </Row>
      </Page>
    )
  }
}

export default MapContent
