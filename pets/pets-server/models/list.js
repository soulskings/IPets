const listModel = {
    pid: {
      type: [String],
      index: true
    },
    cid: String,
    name: String,
    shape: String,
    img_url: String
}
const List = PetsDb.model('list', new Schema(listModel))
module.exports = List