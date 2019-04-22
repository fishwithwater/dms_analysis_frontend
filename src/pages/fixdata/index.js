import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Row, Col, Card } from 'antd'
import { router } from 'utils'
import { Color } from 'utils'
import { stringify } from 'qs'
import { Page, ScrollBar } from 'components'
import Filter from './components/Filter'
import List from './components/List'

import styles from './index.less'

const bodyStyle = {
  bodyStyle: {
    height: 432,
    background: '#fff',
  },
}

@connect(({ fixdatas, loading }) => ({ fixdatas, loading }))
class FixData extends PureComponent {
  render() {
    const { location, loading, fixdatas, dispatch } = this.props
    const { query, pathname } = location
    const {
      list,
      pagination,
      currentItem,
      modalVisible,
      modalType,
      selectedRowKeys,
    } = fixdatas
    const filterProps = {
      filter: {
        ...query,
      },
      onFilterChange(value) {
        handleRefresh({
          ...value,
          page: 1,
        })
      }
    }
    const listProps = {
      dataSource: list,
      loading: loading.effects['fixdatas/query'],
      pagination,
      onChange(page) {
        handleRefresh({
          page: page.current,
          pageSize: page.pageSize,
        })
      },
      onDeleteItem(id) {
        dispatch({
          type: 'fixdatas/delete',
          payload: {id},
        }).then(() => {
          handleRefresh({
            page:
              list.length === 1 && pagination.current > 1
                ? pagination.current - 1
                : pagination.current,
          })
        })
      },
    }

    const handleRefresh = newQuery => {
      router.push({
        pathname,
        search: stringify(
          {
            ...query,
            ...newQuery,
          },
          { arrayFormat: 'repeat' }
        ),
      })
    }
    return (
      <Page inner>
        <Filter {...filterProps} />
        <List {...listProps} />
      </Page>
    )
  }
}

FixData.propTypes = {
}

export default FixData
