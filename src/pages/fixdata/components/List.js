import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Table, Modal, Popconfirm, Button } from 'antd'
import { DropOption } from 'components'
import { Trans, withI18n } from '@lingui/react'
import Link from 'umi/link'
import styles from './List.less'

const { confirm } = Modal

@withI18n()
class List extends PureComponent {
  handleMenuClick = record => {
    const { onDeleteItem } = this.props
    onDeleteItem(record.id)
  }

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
      {
        title: '经度',
        dataIndex: 'longitude',
        key: 'longitude',
      },
      {
        title: '纬度',
        dataIndex: 'latitude',
        key: 'latitude',
      },
      {
        title: <Trans>Operation</Trans>,
        key: 'operation',
        fixed: 'right',
        render: (text, record) => {
          return (
            <Popconfirm
              title="确认删除这条记录吗？"
              onConfirm={this.handleMenuClick.bind(this, record)}
              okText="是"
              cancelText="否"
            >
              <Button type="danger" shape="circle" icon="delete" />
            </Popconfirm>
          )
        },
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
