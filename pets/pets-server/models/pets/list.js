const listModel = {
  cid: {
    type: String,
    index: true
  },
  pid: String,
  name: String,
  img_url: String,
  shape: String,
  purpose: String,
  hair_length: String,
  depilation: String,
  friendliness: String,
  feed_difficulty: String,
  price_range: String,
  tag: Array
}
const ListDb = PetsDb.model('lists', new Schema(listModel))
module.exports = ListDb