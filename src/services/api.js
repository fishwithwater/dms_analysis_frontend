export default {
  queryRouteList: 'GET /routes true',

  queryUserInfo: 'GET /user/user true',
  logoutUser: 'GET /user/logout true',
  loginUser: 'POST /user/login true',

  queryDashboard: 'GET /dashboard/get true',

  queryFixDataList: 'GET /fixdata/query-like true', //最后一个true为开启联调模式
  deleteFixDataById: 'POST /fixdata/delete true',

  queryMapMarkers: 'GET /map/markers true',

  queryReportList: 'GET /report/query-pagination true',
}
