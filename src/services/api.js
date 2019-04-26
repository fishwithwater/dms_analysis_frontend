export default {
  queryRouteList: 'GET /routes true',

  queryUserInfo: '/user',
  logoutUser: '/user/logout',
  loginUser: 'POST /user/login',

  queryUser: '/user/:id',
  queryUserList: '/users',
  updateUser: 'Patch /user/:id',
  createUser: 'POST /user',
  removeUser: 'DELETE /user/:id',
  removeUserList: 'POST /users/delete',

  queryPostList: '/posts',

  queryDashboard: 'GET /dashboard/get true',

  queryFixDataList: 'GET /fixdata/query-like true', //最后一个true为开启联调模式
  deleteFixDataById: 'POST /fixdata/delete true',

  queryMapMarkers: 'GET /map/markers true',

  queryReportList: 'GET /report/query-pagination true',
}
