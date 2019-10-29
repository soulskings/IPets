import request from './axios'
export default ({ app }, inject) => {
  inject('request', request)
}
