import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import { Table, Tag } from 'antd'
import { Color } from 'utils'
import styles from './recentSales.less'

function RecentSales({ data }) {
  const columns = [
    {
      title: '地址',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '日期',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: '维修内容',
      dataIndex: 'fixContent',
      key: 'fixContent',
    },
    {
      title: '损坏原因',
      dataIndex: 'breakContent',
      key: 'breakContent',
    },
  ]
  return (
    <div className={styles.recentsales}>
      <div className={styles.title}>最新维修数据</div>
      <Table
        pagination={false}
        columns={columns}
        rowKey={(record, key) => key}
        dataSource={data.filter((item, key) => key < 5)}
      />
    </div>
  )
}

RecentSales.propTypes = {
  data: PropTypes.array,
}

export default RecentSales
