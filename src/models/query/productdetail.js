import pathToRegexp from 'path-to-regexp'
import * as productsService from '../../services/productlist'

const { queryDetail } = productsService

export default {
  namespace: 'productDetail',
  state: {
    list: [],
    currentItem: {},
    selectedRowKeys: [],
    pagination: {
      showSizeChanger: true,
      showQuickJumper: true,
      shwoTotal: total => '共 ${total} 款',
      current: 1,
      total: null,
    },
  },
  reducers: {
    querySuccess (state, action) {
      const { list, pagination } = action.payload
      return {
        ...state,
        list,
        pagination: {
          ...state.pagination,
          ...pagination,
        },
      }
    },
  },
  effects: {
    *query ({payload}, {call, put}) {
      const data = yield call(queryDetail, payload)
      console.log(data)
      if (data) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.data,
            pagination: {
              current: Number(payload.page) || 1,
              pageSize: Number(payload.pageSize) || 10,
              total: data.total,
            },
          },
        })
      }
    },
  },
  subscriptions: {
    setup ({dispatch, history}) {
      history.listen(() => {
        const match = pathToRegexp('/query/product/:fundCode').exec(location.pathname)
        if (match) {
          dispatch({ type: 'query', payload: { fundCode: match[1] } })
        }
      })
    },
  },
};
