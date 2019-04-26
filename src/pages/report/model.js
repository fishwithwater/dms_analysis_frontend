import modelExtend from 'dva-model-extend'
import { pageModel } from 'utils/model'
import { pathMatchRegexp } from 'utils'
import { message } from 'antd'
import api from 'api'

const { queryReportList } = api

export default modelExtend(pageModel, {
  namespace: 'reports',
  state: {},
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (pathMatchRegexp('/report', location.pathname)) {
          const payload = { page: 1, pageSize: 10 }
          dispatch({
            type: 'query',
            payload,
          })
        }
      })
    },
  },
  effects: {
    *query({ payload = {} }, { call, put }) {
      const res = yield call(queryReportList, payload)
      if (res) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: res.data.rows,
            pagination: {
              current: Number(payload.page) || 1,
              pageSize: Number(payload.pageSize) || 10,
              total: res.data.total,
            },
          },
        })
      }
    },
  },
  reducers: {},
})
