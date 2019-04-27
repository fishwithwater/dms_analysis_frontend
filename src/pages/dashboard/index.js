import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Row, Col, Card } from 'antd'
import { Page } from 'components'
import { NumberCard, Sales, RecentSales } from './components'
import styles from './index.less'

const bodyStyle = {
  bodyStyle: {
    height: 432,
    background: '#fff',
  },
}

@connect(({ app, dashboard, loading }) => ({
  avatar: app.user.avatar,
  username: app.user.username,
  dashboard,
  loading,
}))
class Dashboard extends PureComponent {
  render() {
    const { dashboard } = this.props
    const { sales, numbers, recentSales } = dashboard

    const numberCards = numbers.map((item, key) => (
      <Col key={key} lg={6} md={12}>
        <NumberCard {...item} />
      </Col>
    ))

    return (
      <Page className={styles.dashboard}>
        <Row gutter={24}>
          {numberCards}
          <Col lg={24} md={24}>
            <Card
              bordered={false}
              bodyStyle={{
                padding: '24px 36px 24px 0',
              }}
            >
              <Sales data={sales} />
            </Card>
          </Col>
          <Col lg={12} md={24}>
            <Card bordered={false} {...bodyStyle}>
              <RecentSales data={recentSales} />
            </Card>
          </Col>
          <Col lg={12} md={24}>
            <Card bordered={false} {...bodyStyle}>
              <div className={styles.title}>月份与损坏</div>
              <iframe
                title="bmonthc"
                src="http://localhost/staticmap/echarts-bmonthc.html"
                style={{ border: 0, width: '100%', height: 400 }}
              />
            </Card>
          </Col>
          <Col lg={24} md={24}>
            <Card bordered={false} {...bodyStyle}>
              <div className={styles.title}>损坏与材料</div>
              <iframe
                title="bmc"
                src="http://localhost/staticmap/echarts-bmc.html"
                style={{ border: 0, width: '100%', height: 400 }}
              />
            </Card>
          </Col>
        </Row>
      </Page>
    )
  }
}

Dashboard.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  dashboard: PropTypes.object,
  loading: PropTypes.object,
}

export default Dashboard
