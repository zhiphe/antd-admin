import React from 'react'
import Container from '../chart/Container'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
import PropTypes from 'prop-types'

const SimpleBarChart = ({data}) => (
  <Container>
    <BarChart data={data} margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    }}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" name="普通基金" fill="#8884d8" />
      <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>
  </Container>
)

SimpleBarChart.propTypes = {
  data: PropTypes.array,
}

export default SimpleBarChart