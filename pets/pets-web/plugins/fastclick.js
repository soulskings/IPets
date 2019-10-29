import '../assets/lib/fastclick'

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', () => {
    window.FastClick.attach(document.body)
  }, false)
}
