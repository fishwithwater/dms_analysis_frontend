import modelExtend from 'dva-model-extend'
import { pageModel } from 'utils/model'
import { pathMatchRegexp } from 'utils'
import {message} from 'antd'
import api from 'api'

const { queryFixDataList, deleteFixDataById } = api

export default modelExtend(pageModel, {
    namespace: 'fixdatas',
    state: {
    },
    subscriptions: {
        setup({ dispatch, history }) {
            history.listen(location => {
                if (pathMatchRegexp('/fixdata', location.pathname)) {
                    const payload = location.query || { page: 1, pageSize: 10 }
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
            const res = yield call(queryFixDataList, payload)
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
        *delete({ payload = {} }, { call, put,select }) {
            const res = yield call(deleteFixDataById, payload)
            if (res && res.status === 0) {
                message.success('删除成功')
            }
        }
    },
    reducers: {
    }
})