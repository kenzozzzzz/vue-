'use strict'
module.exports = {
  NODE_ENV: '"production"',
  devServer :{
    proxy :{
        '/api2' :{
            target :'http://localhost:3000', //反向代理
            // target :'http://47.106.15.129/', //代理服务器的数据库
            changeOrigin : true
        },
        // '/api' :{
        //     target :'http://http://8.130.48.6/',
        //     changeOrigin : true
        // }
    }
}
}
