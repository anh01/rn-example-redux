'use strict';
var store = require('react-native-simple-store');

var queryUserInfo = '';

store.save('USERINFO', '?uid=44248888&app_version=1.9.4.2&os_type=android&channel=share')
  .then(() => store.get('USERINFO'))
  .then(value => {
    queryUserInfo = value;
  })

export{
  queryUserInfo
};
