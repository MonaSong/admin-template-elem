/**
 * 用户页面 - 用户信息接口
 *
 * @url user?uid=233
 *
 */

module.exports = function (req) {
  var uid = req.query.uid

  if (!uid) {
    return {
      code: -1,
      msg: 'no uid'
    }
  }

  return {
    code: 0,
    data: {
      'uid': +uid,
      'name': '@name',
      'age|20-30': 1,
      'email': '@email',
      'date': '@date'
    }
  }
}
