import React, { PureComponent } from 'react'
import { Row, Col } from 'antd'
import { Page } from 'components'

class MapContent extends PureComponent {
  render() {
    return (
      <Page inner>
        <Row>
          <Col span={24} style={{ height: '700px' }}>
            <iframe
              title="heatmap"
              src="http://114.116.30.153/staticmap/amap-heat.html"
              style={{ border: 0, width: '100%', height: 700 }}
            />
          </Col>
        </Row>
      </Page>
    )
  }
}

export default MapContent
