import React, { PureComponent } from 'react'
import { connect } from 'dva'
import { router } from 'utils'
import { stringify } from 'qs'
import { Page, ScrollBar } from 'components'
import List from './components/List'

import styles from './index.less'

const bodyStyle = {
  bodyStyle: {
    height: 432,
    background: '#fff',
  },
}

@connect(({ reports, loading }) => ({ reports, loading }))
class Report extends PureComponent {
  render() {
    const { location, loading, reports } = this.props
    const { query, pathname } = location
    const { list, pagination } = reports
    const listProps = {
      dataSource: list,
      loading: loading.effects['reports/query'],
      pagination,
      onChange(page) {
        handleRefresh({
          page: page.current,
          pageSize: page.pageSize,
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
        <List {...listProps} />
      </Page>
    )
  }
}

Report.propTypes = {}

export default Report
