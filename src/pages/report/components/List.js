import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Table } from 'antd'
import { withI18n } from '@lingui/react'
import styles from './List.less'

@withI18n()
class List extends PureComponent {
  render() {
    const { i18n, ...tableProps } = this.props
    const columns = [
      {
        title: '编号',
        dataIndex: 'id',
        key: 'id',
        width: 72,
        fixed: 'left',
      },
      {
        title: '地址',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: '维修内容',
        dataIndex: 'fixContent',
        key: 'fixContent',
      },
      {
        title: '维修人员',
        dataIndex: 'fixPeople',
        key: 'fixPeople',
      },
      {
        title: '日期',
        dataIndex: 'date',
        key: 'date',
      },
      {
        title: '开始时间',
        dataIndex: 'startTime',
        key: 'startTime',
      },
      {
        title: '损坏情况',
        dataIndex: 'breakContent',
        key: 'breakContent',
      },
      {
        title: '维修方案/备注',
        dataIndex: 'fixOther',
        key: 'fixOther',
      },
      {
        title: '损坏原因',
        dataIndex: 'reasonContent',
        key: 'reasonContent',
      },
      {
        title: '材料',
        dataIndex: 'materialContent',
        key: 'materialContent',
      },
      {
        title: '管径',
        dataIndex: 'caliber',
        key: 'caliber',
      },
      {
        title: '埋深',
        dataIndex: 'depth',
        key: 'depth',
      },
      {
        title: '结束时间',
        dataIndex: 'endTime',
        key: 'endTime',
      },
    ]

    return (
      <Table
        {...tableProps}
        pagination={{
          ...tableProps.pagination,
          showTotal: total => i18n.t`Total ${total} Items`,
        }}
        className={styles.table}
        bordered
        scroll={{ x: 1200 }}
        columns={columns}
        simple
        rowKey={record => record.id}
      />
    )
  }
}

List.propTypes = {
  onDeleteItem: PropTypes.func,
  location: PropTypes.object,
}

export default List
