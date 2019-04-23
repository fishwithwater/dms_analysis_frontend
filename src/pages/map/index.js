import React, { PureComponent } from 'react'
import { Row, Col } from 'antd'
import { Page } from 'components'
import { Map } from 'react-amap'
import styles from './index.less'

class MapContent extends PureComponent {
  render() {
    return (
      <Page inner>
        <Row>
          <Col span={24} style={{ height: '700px' }}>
            <Map
              className={styles.map}
              amapkey={'af4809cb527ed45c25b8ccb6d251193e'}
            />
          </Col>
        </Row>
      </Page>
    )
  }
}

export default MapContent
