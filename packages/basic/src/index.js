// import _ from 'lodash'
import 'core-js/stable'
import 'regenerator-runtime/runtime'

function component() {
  const element = document.createElement('div')

  element.innerHTML = ['Hello', 'webpack'].join(',')

  return element
}

document.body.appendChild(component())