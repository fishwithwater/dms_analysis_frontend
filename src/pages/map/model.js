import { pathMatchRegexp } from 'utils'
import api from 'api'

const { queryMapMarkers } = api

export default {
  namespace: 'map',
  state: {},
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (pathMatchRegexp('/map', location.pathname)) {
          const payload = location.query
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
      const res = yield call(queryMapMarkers, payload)
      yield put({
        type: 'getMarkersSuccess',
        payload: {
          markers: res.data,
        },
      })
    },
  },
  reducers: {
    getMarkersSuccess(state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
  },
}
