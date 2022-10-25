// 自定义loader
const reg = /<script>([\s\S]+)<\/script>/
module.exports = function(source) {
  const __source = source.match(reg)
  const result = __source && __source[1] ? __source[1] : __source
  return result
}

if (require.main === module) {
  const str = `
    <script>
      const a = 1
      const b = 2
      console.log('a + b = ' + (a + b))
    </script>
  `
  const __source = str.match(reg)
  const result = __source && __source[1] ? __source[1] : __source
  console.log(result)
}