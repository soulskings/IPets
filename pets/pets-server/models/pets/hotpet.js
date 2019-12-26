const hotModel = {
    cid: String,
    pid: String,
    name: String,
    popularity: Number
}
const Hot = PetsDb.model('hotpets', new Schema(hotModel))
module.exports = Hot