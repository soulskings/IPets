const URI = {
  MONGODB: {
    pro: 'mongodb://182.92.86.190:27017',
    test: 'mongodb://285471z3f6.qicp.vip:29731',
    dev: 'mongodb://127.0.0.1:27017'
  }
}

module.exports = URI.MONGODB[process.argv[2]] || 'mongodb://192.168.8.196:27017'