import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { routerRedux } from 'dva/router'
import { connect } from 'dva'
import { Table, Button } from 'antd'
import { Link } from 'dva/router'
import styles from './index.less'

const ProductDetail = function({location, dispatch, productDetail, loading}) {
    return (
        <div className="content-inner">
            Hello World
        </div>
    )
}

ProductDetail.propTypes = {
    productDetail: PropTypes.object,
    location: PropTypes.object,
    dispatch: PropTypes.func,
    loading: PropTypes.object
}

export default connect(({productDetail, loading}) => ({productDetail, loading}))(ProductDetail)