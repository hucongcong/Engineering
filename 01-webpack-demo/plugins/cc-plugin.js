const { ConcatSource } = require('webpack-sources')
class CCPlugin {
  constructor(options) {
    this.options = options || {}
  }

  apply(compiler) {
    console.log('cc plugin running...')
    compiler.hooks.compilation.tap('CCPlugin', (compilation) => {
      compilation.hooks.processAssets.tap('CCPlugin', () => {
        // 打包后的chunks信息
        const chunks = compilation.chunks
        console.log(chunks)
        for (const chunk of chunks) {
          for(const file of chunk.files) {
            const { header = '默认头部', footer = '默认底部' } = this.options

            const headerComment = `/* ${header} */`
            const footerComment = `/* ${footer} */`
            compilation.updateAsset(file, old => {
              return new ConcatSource(headerComment, '\n', old, '\n', footerComment)
            })
          }
        }
      })
    })
  }
}

module.exports = CCPlugin