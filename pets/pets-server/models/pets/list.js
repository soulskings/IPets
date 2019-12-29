const listModel = {
    cid: {
      type: String,
      index: true
    },
    pid: String,
    name: String,
    shape: String,
    img_url: String
}
const List = PetsDb.model('list', new Schema(listModel))
module.exports = List