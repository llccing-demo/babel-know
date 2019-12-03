var babel = require('babel-core')
var t = require('babel-types')
const code = `import { uniq, extend, flatten, cloneDeep } from 'lodash'`
const visitor = {
  // Identifier(path) {
  //   // 打印两次，因为向下遍历进入，向上遍历退出。
  //   console.log(path.node.name)
  // }
  // 输出结果，见 src/output/double.js

  // Identifier: {
  //   enter(path){
  //     console.log('进入 ', path.node.name)
  //   },
  //   exit(path){
  //     console.log('退出 ', path.node.name)
  //   },
  // }
  // 输出结果，见 src/output/double.js

  // Identifier(path){
  //   if(path.node.name == 'uniq'){
  //     path.replaceWith(t.identifier('_uniq'))
  //   }
  // }
  // 输出结果，见 src/output/replaceWith.js

  ImportDeclaration(path, _ref = {opts: {}}){
    const specifiers = path.node.specifiers
    const source = path.node.source
    if(!t.isImportDefaultSpecifier(specifiers[0])){
      var declarations = specifiers.map((specifier, i) => {
        return t.ImportDeclaration(
          [t.importDefaultSpecifier(specifier.local)],
          t.stringLiteral(`${source.value}/${specifier.local.name}`)
        )
      })
      console.log(declarations)
      path.replaceWithMultiple(declarations)
    }
  }
  // 输出结果，见 src/output/replaceWithMultiple.js
}

const result = babel.transform(code, {
  plugins: [{
    visitor
  }]
})

console.log(result.code)