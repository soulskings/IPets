const listModel = {
  cid: String,
  pid: String,
  img_url: String,
  shape: String,
  purpose: String,
  hair_length: String,
  depilation: String,
  friendliness: String,
  feed_difficulty: String,
  tag: Array
}
const List = PetsDb.model('lists', new Schema(listModel))
module.exports = List