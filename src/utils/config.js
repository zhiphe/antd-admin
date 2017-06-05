module.exports = {
  name: '公募后台系统',
  prefix: 'antdAdmin',
  footerText: '金斧子投资咨询有限公司  ©2017 JFZ',
  logo: '/jfz.jpeg',
  iconFontCSS: '/iconfont.css',
  iconFontJS: '/iconfont.js',
  baseURL: 'http://localhost:8000/api/v1',
  YQL: ['http://www.zuimeitianqi.com'],
  CORS: ['http://localhost:7000'],
  openPages: ['/login'],
  apiPrefix: '/api/v1',
  api: {
    userLogin: '/user/login',
    userLogout: '/user/logout',
    userInfo: '/userInfo',
    users: '/users',
    user: '/user/:id',
    dashboard: '/dashboard',
    productlist: '/query/products',
    productdetail: '/query/product/:fundCode'
  },
}
