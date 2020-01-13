const URI = {
  MONGODB: {
    pro: '',
    test: 'mongodb://285471z3f6.qicp.vip:29731',
    dev: 'mongodb://192.168.8.196:27017'
  }
}

module.exports = URI.MONGODB[process.argv[2]] || 'mongodb://192.168.8.196:27017'