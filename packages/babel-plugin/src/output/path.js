NodePath {
  parent: Node {
    type: 'ImportSpecifier',
    start: 9,
    end: 13,
    loc: SourceLocation { start: [Position], end: [Position] },
    imported: Node {
      type: 'Identifier',
      start: 9,
      end: 13,
      loc: [SourceLocation],
      name: 'uniq'
    },
    local: Node {
      type: 'Identifier',
      start: 9,
      end: 13,
      loc: [SourceLocation],
      name: 'uniq',
      __clone: [Function: __clone]
    }
  },
  hub: Hub {
    file: File [Map] {
      _c: Map {},
      dynamicData: {},
      pipeline: Pipeline {},
      log: [Logger],
      opts: [Object],
      parserOpts: [Object],
      pluginVisitors: [Array],
      pluginPasses: [Array],
      metadata: [Object],
      dynamicImportTypes: {},
      dynamicImportIds: {},
      dynamicImports: [],
      declarations: {},
      usedHelpers: {},
      path: [NodePath],
      ast: [Node],
      code: "import { uniq, extend, flatten, cloneDeep } from 'lodash'",
      shebang: '',
      hub: [Circular],
      scope: [Scope]
    },
    options: undefined
  },
  contexts: [
    TraversalContext {
      queue: [Array],
      parentPath: [NodePath],
      scope: [Scope],
      state: undefined,
      opts: [Object],
      priorityQueue: []
    }
  ],
  data: {},
  shouldSkip: false,
  shouldStop: false,
  removed: false,
  state: undefined,
  opts: {
    Identifier: { enter: [Array] },
    _exploded: {},
    _verified: {},
    BlockStatement: { exit: [Array] },
    Program: { exit: [Array] },
    ThisExpression: { enter: [Array] },
    JSXIdentifier: { enter: [Array] }
  },
  skipKeys: {},
  parentPath: NodePath {
    parent: Node {
      type: 'ImportDeclaration',
      start: 0,
      end: 57,
      loc: [SourceLocation],
      specifiers: [Array],
      source: [Node]
    },
    hub: Hub { file: [File [Map]], options: undefined },
    contexts: [ [TraversalContext] ],
    data: {},
    shouldSkip: false,
    shouldStop: false,
    removed: false,
    state: undefined,
    opts: {
      Identifier: [Object],
      _exploded: {},
      _verified: {},
      BlockStatement: [Object],
      Program: [Object],
      ThisExpression: [Object],
      JSXIdentifier: [Object]
    },
    skipKeys: {},
    parentPath: NodePath {
      parent: [Node],
      hub: [Hub],
      contexts: [Array],
      data: {},
      shouldSkip: false,
      shouldStop: false,
      removed: false,
      state: undefined,
      opts: [Object],
      skipKeys: {},
      parentPath: [NodePath],
      context: [TraversalContext],
      container: [Array],
      listKey: 'body',
      inList: true,
      parentKey: 'body',
      key: 0,
      node: [Node],
      scope: [Scope],
      type: 'ImportDeclaration',
      typeAnnotation: null
    },
    context: TraversalContext {
      queue: [Array],
      parentPath: [NodePath],
      scope: [Scope],
      state: undefined,
      opts: [Object],
      priorityQueue: []
    },
    container: [ [Node], [Node], [Node], [Node] ],
    listKey: 'specifiers',
    inList: true,
    parentKey: 'specifiers',
    key: 0,
    node: Node {
      type: 'ImportSpecifier',
      start: 9,
      end: 13,
      loc: [SourceLocation],
      imported: [Node],
      local: [Node]
    },
    scope: Scope {
      uid: 0,
      parent: null,
      hub: [Hub],
      parentBlock: [Node],
      block: [Node],
      path: [NodePath],
      labels: [Map],
      references: [Object: null prototype],
      bindings: [Object: null prototype],
      globals: [Object: null prototype] {},
      uids: [Object: null prototype] {},
      data: [Object: null prototype] {},
      crawling: false
    },
    type: 'ImportSpecifier',
    typeAnnotation: null
  },
  context: TraversalContext {
    queue: [ [Circular] ],
    parentPath: NodePath {
      parent: [Node],
      hub: [Hub],
      contexts: [Array],
      data: {},
      shouldSkip: false,
      shouldStop: false,
      removed: false,
      state: undefined,
      opts: [Object],
      skipKeys: {},
      parentPath: [NodePath],
      context: [TraversalContext],
      container: [Array],
      listKey: 'specifiers',
      inList: true,
      parentKey: 'specifiers',
      key: 0,
      node: [Node],
      scope: [Scope],
      type: 'ImportSpecifier',
      typeAnnotation: null
    },
    scope: Scope {
      uid: 0,
      parent: null,
      hub: [Hub],
      parentBlock: [Node],
      block: [Node],
      path: [NodePath],
      labels: [Map],
      references: [Object: null prototype],
      bindings: [Object: null prototype],
      globals: [Object: null prototype] {},
      uids: [Object: null prototype] {},
      data: [Object: null prototype] {},
      crawling: false
    },
    state: undefined,
    opts: {
      Identifier: [Object],
      _exploded: {},
      _verified: {},
      BlockStatement: [Object],
      Program: [Object],
      ThisExpression: [Object],
      JSXIdentifier: [Object]
    },
    priorityQueue: []
  },
  container: Node {
    type: 'ImportSpecifier',
    start: 9,
    end: 13,
    loc: SourceLocation { start: [Position], end: [Position] },
    imported: Node {
      type: 'Identifier',
      start: 9,
      end: 13,
      loc: [SourceLocation],
      name: 'uniq'
    },
    local: Node {
      type: 'Identifier',
      start: 9,
      end: 13,
      loc: [SourceLocation],
      name: 'uniq',
      __clone: [Function: __clone]
    }
  },
  listKey: undefined,
  inList: false,
  parentKey: 'local',
  key: 'local',
  node: Node {
    type: 'Identifier',
    start: 9,
    end: 13,
    loc: SourceLocation {
      start: [Position],
      end: [Position],
      identifierName: 'uniq'
    },
    name: 'uniq',
    __clone: [Function: __clone]
  },
  scope: Scope {
    uid: 0,
    parent: null,
    hub: Hub { file: [File [Map]], options: undefined },
    parentBlock: Node {
      type: 'File',
      start: 0,
      end: 57,
      loc: [SourceLocation],
      program: [Node],
      comments: [],
      tokens: [Array]
    },
    block: Node {
      type: 'Program',
      start: 0,
      end: 57,
      loc: [SourceLocation],
      sourceType: 'module',
      body: [Array],
      directives: []
    },
    path: NodePath {
      parent: [Node],
      hub: [Hub],
      contexts: [Array],
      data: {},
      shouldSkip: false,
      shouldStop: false,
      removed: false,
      state: undefined,
      opts: [Object],
      skipKeys: {},
      parentPath: null,
      context: [TraversalContext],
      container: [Node],
      listKey: undefined,
      inList: false,
      parentKey: 'program',
      key: 'program',
      node: [Node],
      scope: [Circular],
      type: 'Program',
      typeAnnotation: null
    },
    labels: Map { _c: Map {} },
    references: [Object: null prototype] {
      uniq: true,
      extend: true,
      flatten: true,
      cloneDeep: true
    },
    bindings: [Object: null prototype] {
      uniq: [Binding],
      extend: [Binding],
      flatten: [Binding],
      cloneDeep: [Binding]
    },
    globals: [Object: null prototype] {},
    uids: [Object: null prototype] {},
    data: [Object: null prototype] {},
    crawling: false
  },
  type: 'Identifier',
  typeAnnotation: null
}
NodePath {
  parent: Node {
    type: 'ImportSpecifier',
    start: 9,
    end: 13,
    loc: SourceLocation { start: [Position], end: [Position] },
    imported: Node {
      type: 'Identifier',
      start: 9,
      end: 13,
      loc: [SourceLocation],
      name: 'uniq'
    },
    local: Node {
      type: 'Identifier',
      start: 9,
      end: 13,
      loc: [SourceLocation],
      name: 'uniq',
      __clone: [Function: __clone]
    }
  },
  hub: Hub {
    file: File [Map] {
      _c: Map {},
      dynamicData: {},
      pipeline: Pipeline {},
      log: [Logger],
      opts: [Object],
      parserOpts: [Object],
      pluginVisitors: [Array],
      pluginPasses: [Array],
      metadata: [Object],
      dynamicImportTypes: {},
      dynamicImportIds: {},
      dynamicImports: [],
      declarations: {},
      usedHelpers: {},
      path: [NodePath],
      ast: [Node],
      code: "import { uniq, extend, flatten, cloneDeep } from 'lodash'",
      shebang: '',
      hub: [Circular],
      scope: [Scope]
    },
    options: undefined
  },
  contexts: [
    TraversalContext {
      queue: [Array],
      parentPath: [NodePath],
      scope: [Scope],
      state: undefined,
      opts: [Object],
      priorityQueue: []
    }
  ],
  data: {},
  shouldSkip: false,
  shouldStop: false,
  removed: false,
  state: undefined,
  opts: {
    Identifier: { enter: [Array] },
    _exploded: {},
    _verified: {},
    BlockStatement: { exit: [Array] },
    Program: { exit: [Array] },
    ThisExpression: { enter: [Array] },
    JSXIdentifier: { enter: [Array] }
  },
  skipKeys: {},
  parentPath: NodePath {
    parent: Node {
      type: 'ImportDeclaration',
      start: 0,
      end: 57,
      loc: [SourceLocation],
      specifiers: [Array],
      source: [Node]
    },
    hub: Hub { file: [File [Map]], options: undefined },
    contexts: [ [TraversalContext] ],
    data: {},
    shouldSkip: false,
    shouldStop: false,
    removed: false,
    state: undefined,
    opts: {
      Identifier: [Object],
      _exploded: {},
      _verified: {},
      BlockStatement: [Object],
      Program: [Object],
      ThisExpression: [Object],
      JSXIdentifier: [Object]
    },
    skipKeys: {},
    parentPath: NodePath {
      parent: [Node],
      hub: [Hub],
      contexts: [Array],
      data: {},
      shouldSkip: false,
      shouldStop: false,
      removed: false,
      state: undefined,
      opts: [Object],
      skipKeys: {},
      parentPath: [NodePath],
      context: [TraversalContext],
      container: [Array],
      listKey: 'body',
      inList: true,
      parentKey: 'body',
      key: 0,
      node: [Node],
      scope: [Scope],
      type: 'ImportDeclaration',
      typeAnnotation: null
    },
    context: TraversalContext {
      queue: [Array],
      parentPath: [NodePath],
      scope: [Scope],
      state: undefined,
      opts: [Object],
      priorityQueue: []
    },
    container: [ [Node], [Node], [Node], [Node] ],
    listKey: 'specifiers',
    inList: true,
    parentKey: 'specifiers',
    key: 0,
    node: Node {
      type: 'ImportSpecifier',
      start: 9,
      end: 13,
      loc: [SourceLocation],
      imported: [Node],
      local: [Node]
    },
    scope: Scope {
      uid: 0,
      parent: null,
      hub: [Hub],
      parentBlock: [Node],
      block: [Node],
      path: [NodePath],
      labels: [Map],
      references: [Object: null prototype],
      bindings: [Object: null prototype],
      globals: [Object: null prototype] {},
      uids: [Object: null prototype] {},
      data: [Object: null prototype] {},
      crawling: false
    },
    type: 'ImportSpecifier',
    typeAnnotation: null
  },
  context: TraversalContext {
    queue: [ [Circular] ],
    parentPath: NodePath {
      parent: [Node],
      hub: [Hub],
      contexts: [Array],
      data: {},
      shouldSkip: false,
      shouldStop: false,
      removed: false,
      state: undefined,
      opts: [Object],
      skipKeys: {},
      parentPath: [NodePath],
      context: [TraversalContext],
      container: [Array],
      listKey: 'specifiers',
      inList: true,
      parentKey: 'specifiers',
      key: 0,
      node: [Node],
      scope: [Scope],
      type: 'ImportSpecifier',
      typeAnnotation: null
    },
    scope: Scope {
      uid: 0,
      parent: null,
      hub: [Hub],
      parentBlock: [Node],
      block: [Node],
      path: [NodePath],
      labels: [Map],
      references: [Object: null prototype],
      bindings: [Object: null prototype],
      globals: [Object: null prototype] {},
      uids: [Object: null prototype] {},
      data: [Object: null prototype] {},
      crawling: false
    },
    state: undefined,
    opts: {
      Identifier: [Object],
      _exploded: {},
      _verified: {},
      BlockStatement: [Object],
      Program: [Object],
      ThisExpression: [Object],
      JSXIdentifier: [Object]
    },
    priorityQueue: []
  },
  container: Node {
    type: 'ImportSpecifier',
    start: 9,
    end: 13,
    loc: SourceLocation { start: [Position], end: [Position] },
    imported: Node {
      type: 'Identifier',
      start: 9,
      end: 13,
      loc: [SourceLocation],
      name: 'uniq'
    },
    local: Node {
      type: 'Identifier',
      start: 9,
      end: 13,
      loc: [SourceLocation],
      name: 'uniq',
      __clone: [Function: __clone]
    }
  },
  listKey: undefined,
  inList: false,
  parentKey: 'imported',
  key: 'imported',
  node: Node {
    type: 'Identifier',
    start: 9,
    end: 13,
    loc: SourceLocation {
      start: [Position],
      end: [Position],
      identifierName: 'uniq'
    },
    name: 'uniq'
  },
  scope: Scope {
    uid: 0,
    parent: null,
    hub: Hub { file: [File [Map]], options: undefined },
    parentBlock: Node {
      type: 'File',
      start: 0,
      end: 57,
      loc: [SourceLocation],
      program: [Node],
      comments: [],
      tokens: [Array]
    },
    block: Node {
      type: 'Program',
      start: 0,
      end: 57,
      loc: [SourceLocation],
      sourceType: 'module',
      body: [Array],
      directives: []
    },
    path: NodePath {
      parent: [Node],
      hub: [Hub],
      contexts: [Array],
      data: {},
      shouldSkip: false,
      shouldStop: false,
      removed: false,
      state: undefined,
      opts: [Object],
      skipKeys: {},
      parentPath: null,
      context: [TraversalContext],
      container: [Node],
      listKey: undefined,
      inList: false,
      parentKey: 'program',
      key: 'program',
      node: [Node],
      scope: [Circular],
      type: 'Program',
      typeAnnotation: null
    },
    labels: Map { _c: Map {} },
    references: [Object: null prototype] {
      uniq: true,
      extend: true,
      flatten: true,
      cloneDeep: true
    },
    bindings: [Object: null prototype] {
      uniq: [Binding],
      extend: [Binding],
      flatten: [Binding],
      cloneDeep: [Binding]
    },
    globals: [Object: null prototype] {},
    uids: [Object: null prototype] {},
    data: [Object: null prototype] {},
    crawling: false
  },
  type: 'Identifier',
  typeAnnotation: null
}
NodePath {
  parent: Node {
    type: 'ImportSpecifier',
    start: 15,
    end: 21,
    loc: SourceLocation { start: [Position], end: [Position] },
    imported: Node {
      type: 'Identifier',
      start: 15,
      end: 21,
      loc: [SourceLocation],
      name: 'extend'
    },
    local: Node {
      type: 'Identifier',
      start: 15,
      end: 21,
      loc: [SourceLocation],
      name: 'extend',
      __clone: [Function: __clone]
    }
  },
  hub: Hub {
    file: File [Map] {
      _c: Map {},
      dynamicData: {},
      pipeline: Pipeline {},
      log: [Logger],
      opts: [Object],
      parserOpts: [Object],
      pluginVisitors: [Array],
      pluginPasses: [Array],
      metadata: [Object],
      dynamicImportTypes: {},
      dynamicImportIds: {},
      dynamicImports: [],
      declarations: {},
      usedHelpers: {},
      path: [NodePath],
      ast: [Node],
      code: "import { uniq, extend, flatten, cloneDeep } from 'lodash'",
      shebang: '',
      hub: [Circular],
      scope: [Scope]
    },
    options: undefined
  },
  contexts: [
    TraversalContext {
      queue: [Array],
      parentPath: [NodePath],
      scope: [Scope],
      state: undefined,
      opts: [Object],
      priorityQueue: []
    }
  ],
  data: {},
  shouldSkip: false,
  shouldStop: false,
  removed: false,
  state: undefined,
  opts: {
    Identifier: { enter: [Array] },
    _exploded: {},
    _verified: {},
    BlockStatement: { exit: [Array] },
    Program: { exit: [Array] },
    ThisExpression: { enter: [Array] },
    JSXIdentifier: { enter: [Array] }
  },
  skipKeys: {},
  parentPath: NodePath {
    parent: Node {
      type: 'ImportDeclaration',
      start: 0,
      end: 57,
      loc: [SourceLocation],
      specifiers: [Array],
      source: [Node]
    },
    hub: Hub { file: [File [Map]], options: undefined },
    contexts: [ [TraversalContext] ],
    data: {},
    shouldSkip: false,
    shouldStop: false,
    removed: false,
    state: undefined,
    opts: {
      Identifier: [Object],
      _exploded: {},
      _verified: {},
      BlockStatement: [Object],
      Program: [Object],
      ThisExpression: [Object],
      JSXIdentifier: [Object]
    },
    skipKeys: {},
    parentPath: NodePath {
      parent: [Node],
      hub: [Hub],
      contexts: [Array],
      data: {},
      shouldSkip: false,
      shouldStop: false,
      removed: false,
      state: undefined,
      opts: [Object],
      skipKeys: {},
      parentPath: [NodePath],
      context: [TraversalContext],
      container: [Array],
      listKey: 'body',
      inList: true,
      parentKey: 'body',
      key: 0,
      node: [Node],
      scope: [Scope],
      type: 'ImportDeclaration',
      typeAnnotation: null
    },
    context: TraversalContext {
      queue: [Array],
      parentPath: [NodePath],
      scope: [Scope],
      state: undefined,
      opts: [Object],
      priorityQueue: []
    },
    container: [ [Node], [Node], [Node], [Node] ],
    listKey: 'specifiers',
    inList: true,
    parentKey: 'specifiers',
    key: 1,
    node: Node {
      type: 'ImportSpecifier',
      start: 15,
      end: 21,
      loc: [SourceLocation],
      imported: [Node],
      local: [Node]
    },
    scope: Scope {
      uid: 0,
      parent: null,
      hub: [Hub],
      parentBlock: [Node],
      block: [Node],
      path: [NodePath],
      labels: [Map],
      references: [Object: null prototype],
      bindings: [Object: null prototype],
      globals: [Object: null prototype] {},
      uids: [Object: null prototype] {},
      data: [Object: null prototype] {},
      crawling: false
    },
    type: 'ImportSpecifier',
    typeAnnotation: null
  },
  context: TraversalContext {
    queue: [ [Circular] ],
    parentPath: NodePath {
      parent: [Node],
      hub: [Hub],
      contexts: [Array],
      data: {},
      shouldSkip: false,
      shouldStop: false,
      removed: false,
      state: undefined,
      opts: [Object],
      skipKeys: {},
      parentPath: [NodePath],
      context: [TraversalContext],
      container: [Array],
      listKey: 'specifiers',
      inList: true,
      parentKey: 'specifiers',
      key: 1,
      node: [Node],
      scope: [Scope],
      type: 'ImportSpecifier',
      typeAnnotation: null
    },
    scope: Scope {
      uid: 0,
      parent: null,
      hub: [Hub],
      parentBlock: [Node],
      block: [Node],
      path: [NodePath],
      labels: [Map],
      references: [Object: null prototype],
      bindings: [Object: null prototype],
      globals: [Object: null prototype] {},
      uids: [Object: null prototype] {},
      data: [Object: null prototype] {},
      crawling: false
    },
    state: undefined,
    opts: {
      Identifier: [Object],
      _exploded: {},
      _verified: {},
      BlockStatement: [Object],
      Program: [Object],
      ThisExpression: [Object],
      JSXIdentifier: [Object]
    },
    priorityQueue: []
  },
  container: Node {
    type: 'ImportSpecifier',
    start: 15,
    end: 21,
    loc: SourceLocation { start: [Position], end: [Position] },
    imported: Node {
      type: 'Identifier',
      start: 15,
      end: 21,
      loc: [SourceLocation],
      name: 'extend'
    },
    local: Node {
      type: 'Identifier',
      start: 15,
      end: 21,
      loc: [SourceLocation],
      name: 'extend',
      __clone: [Function: __clone]
    }
  },
  listKey: undefined,
  inList: false,
  parentKey: 'local',
  key: 'local',
  node: Node {
    type: 'Identifier',
    start: 15,
    end: 21,
    loc: SourceLocation {
      start: [Position],
      end: [Position],
      identifierName: 'extend'
    },
    name: 'extend',
    __clone: [Function: __clone]
  },
  scope: Scope {
    uid: 0,
    parent: null,
    hub: Hub { file: [File [Map]], options: undefined },
    parentBlock: Node {
      type: 'File',
      start: 0,
      end: 57,
      loc: [SourceLocation],
      program: [Node],
      comments: [],
      tokens: [Array]
    },
    block: Node {
      type: 'Program',
      start: 0,
      end: 57,
      loc: [SourceLocation],
      sourceType: 'module',
      body: [Array],
      directives: []
    },
    path: NodePath {
      parent: [Node],
      hub: [Hub],
      contexts: [Array],
      data: {},
      shouldSkip: false,
      shouldStop: false,
      removed: false,
      state: undefined,
      opts: [Object],
      skipKeys: {},
      parentPath: null,
      context: [TraversalContext],
      container: [Node],
      listKey: undefined,
      inList: false,
      parentKey: 'program',
      key: 'program',
      node: [Node],
      scope: [Circular],
      type: 'Program',
      typeAnnotation: null
    },
    labels: Map { _c: Map {} },
    references: [Object: null prototype] {
      uniq: true,
      extend: true,
      flatten: true,
      cloneDeep: true
    },
    bindings: [Object: null prototype] {
      uniq: [Binding],
      extend: [Binding],
      flatten: [Binding],
      cloneDeep: [Binding]
    },
    globals: [Object: null prototype] {},
    uids: [Object: null prototype] {},
    data: [Object: null prototype] {},
    crawling: false
  },
  type: 'Identifier',
  typeAnnotation: null
}
NodePath {
  parent: Node {
    type: 'ImportSpecifier',
    start: 15,
    end: 21,
    loc: SourceLocation { start: [Position], end: [Position] },
    imported: Node {
      type: 'Identifier',
      start: 15,
      end: 21,
      loc: [SourceLocation],
      name: 'extend'
    },
    local: Node {
      type: 'Identifier',
      start: 15,
      end: 21,
      loc: [SourceLocation],
      name: 'extend',
      __clone: [Function: __clone]
    }
  },
  hub: Hub {
    file: File [Map] {
      _c: Map {},
      dynamicData: {},
      pipeline: Pipeline {},
      log: [Logger],
      opts: [Object],
      parserOpts: [Object],
      pluginVisitors: [Array],
      pluginPasses: [Array],
      metadata: [Object],
      dynamicImportTypes: {},
      dynamicImportIds: {},
      dynamicImports: [],
      declarations: {},
      usedHelpers: {},
      path: [NodePath],
      ast: [Node],
      code: "import { uniq, extend, flatten, cloneDeep } from 'lodash'",
      shebang: '',
      hub: [Circular],
      scope: [Scope]
    },
    options: undefined
  },
  contexts: [
    TraversalContext {
      queue: [Array],
      parentPath: [NodePath],
      scope: [Scope],
      state: undefined,
      opts: [Object],
      priorityQueue: []
    }
  ],
  data: {},
  shouldSkip: false,
  shouldStop: false,
  removed: false,
  state: undefined,
  opts: {
    Identifier: { enter: [Array] },
    _exploded: {},
    _verified: {},
    BlockStatement: { exit: [Array] },
    Program: { exit: [Array] },
    ThisExpression: { enter: [Array] },
    JSXIdentifier: { enter: [Array] }
  },
  skipKeys: {},
  parentPath: NodePath {
    parent: Node {
      type: 'ImportDeclaration',
      start: 0,
      end: 57,
      loc: [SourceLocation],
      specifiers: [Array],
      source: [Node]
    },
    hub: Hub { file: [File [Map]], options: undefined },
    contexts: [ [TraversalContext] ],
    data: {},
    shouldSkip: false,
    shouldStop: false,
    removed: false,
    state: undefined,
    opts: {
      Identifier: [Object],
      _exploded: {},
      _verified: {},
      BlockStatement: [Object],
      Program: [Object],
      ThisExpression: [Object],
      JSXIdentifier: [Object]
    },
    skipKeys: {},
    parentPath: NodePath {
      parent: [Node],
      hub: [Hub],
      contexts: [Array],
      data: {},
      shouldSkip: false,
      shouldStop: false,
      removed: false,
      state: undefined,
      opts: [Object],
      skipKeys: {},
      parentPath: [NodePath],
      context: [TraversalContext],
      container: [Array],
      listKey: 'body',
      inList: true,
      parentKey: 'body',
      key: 0,
      node: [Node],
      scope: [Scope],
      type: 'ImportDeclaration',
      typeAnnotation: null
    },
    context: TraversalContext {
      queue: [Array],
      parentPath: [NodePath],
      scope: [Scope],
      state: undefined,
      opts: [Object],
      priorityQueue: []
    },
    container: [ [Node], [Node], [Node], [Node] ],
    listKey: 'specifiers',
    inList: true,
    parentKey: 'specifiers',
    key: 1,
    node: Node {
      type: 'ImportSpecifier',
      start: 15,
      end: 21,
      loc: [SourceLocation],
      imported: [Node],
      local: [Node]
    },
    scope: Scope {
      uid: 0,
      parent: null,
      hub: [Hub],
      parentBlock: [Node],
      block: [Node],
      path: [NodePath],
      labels: [Map],
      references: [Object: null prototype],
      bindings: [Object: null prototype],
      globals: [Object: null prototype] {},
      uids: [Object: null prototype] {},
      data: [Object: null prototype] {},
      crawling: false
    },
    type: 'ImportSpecifier',
    typeAnnotation: null
  },
  context: TraversalContext {
    queue: [ [Circular] ],
    parentPath: NodePath {
      parent: [Node],
      hub: [Hub],
      contexts: [Array],
      data: {},
      shouldSkip: false,
      shouldStop: false,
      removed: false,
      state: undefined,
      opts: [Object],
      skipKeys: {},
      parentPath: [NodePath],
      context: [TraversalContext],
      container: [Array],
      listKey: 'specifiers',
      inList: true,
      parentKey: 'specifiers',
      key: 1,
      node: [Node],
      scope: [Scope],
      type: 'ImportSpecifier',
      typeAnnotation: null
    },
    scope: Scope {
      uid: 0,
      parent: null,
      hub: [Hub],
      parentBlock: [Node],
      block: [Node],
      path: [NodePath],
      labels: [Map],
      references: [Object: null prototype],
      bindings: [Object: null prototype],
      globals: [Object: null prototype] {},
      uids: [Object: null prototype] {},
      data: [Object: null prototype] {},
      crawling: false
    },
    state: undefined,
    opts: {
      Identifier: [Object],
      _exploded: {},
      _verified: {},
      BlockStatement: [Object],
      Program: [Object],
      ThisExpression: [Object],
      JSXIdentifier: [Object]
    },
    priorityQueue: []
  },
  container: Node {
    type: 'ImportSpecifier',
    start: 15,
    end: 21,
    loc: SourceLocation { start: [Position], end: [Position] },
    imported: Node {
      type: 'Identifier',
      start: 15,
      end: 21,
      loc: [SourceLocation],
      name: 'extend'
    },
    local: Node {
      type: 'Identifier',
      start: 15,
      end: 21,
      loc: [SourceLocation],
      name: 'extend',
      __clone: [Function: __clone]
    }
  },
  listKey: undefined,
  inList: false,
  parentKey: 'imported',
  key: 'imported',
  node: Node {
    type: 'Identifier',
    start: 15,
    end: 21,
    loc: SourceLocation {
      start: [Position],
      end: [Position],
      identifierName: 'extend'
    },
    name: 'extend'
  },
  scope: Scope {
    uid: 0,
    parent: null,
    hub: Hub { file: [File [Map]], options: undefined },
    parentBlock: Node {
      type: 'File',
      start: 0,
      end: 57,
      loc: [SourceLocation],
      program: [Node],
      comments: [],
      tokens: [Array]
    },
    block: Node {
      type: 'Program',
      start: 0,
      end: 57,
      loc: [SourceLocation],
      sourceType: 'module',
      body: [Array],
      directives: []
    },
    path: NodePath {
      parent: [Node],
      hub: [Hub],
      contexts: [Array],
      data: {},
      shouldSkip: false,
      shouldStop: false,
      removed: false,
      state: undefined,
      opts: [Object],
      skipKeys: {},
      parentPath: null,
      context: [TraversalContext],
      container: [Node],
      listKey: undefined,
      inList: false,
      parentKey: 'program',
      key: 'program',
      node: [Node],
      scope: [Circular],
      type: 'Program',
      typeAnnotation: null
    },
    labels: Map { _c: Map {} },
    references: [Object: null prototype] {
      uniq: true,
      extend: true,
      flatten: true,
      cloneDeep: true
    },
    bindings: [Object: null prototype] {
      uniq: [Binding],
      extend: [Binding],
      flatten: [Binding],
      cloneDeep: [Binding]
    },
    globals: [Object: null prototype] {},
    uids: [Object: null prototype] {},
    data: [Object: null prototype] {},
    crawling: false
  },
  type: 'Identifier',
  typeAnnotation: null
}
NodePath {
  parent: Node {
    type: 'ImportSpecifier',
    start: 23,
    end: 30,
    loc: SourceLocation { start: [Position], end: [Position] },
    imported: Node {
      type: 'Identifier',
      start: 23,
      end: 30,
      loc: [SourceLocation],
      name: 'flatten'
    },
    local: Node {
      type: 'Identifier',
      start: 23,
      end: 30,
      loc: [SourceLocation],
      name: 'flatten',
      __clone: [Function: __clone]
    }
  },
  hub: Hub {
    file: File [Map] {
      _c: Map {},
      dynamicData: {},
      pipeline: Pipeline {},
      log: [Logger],
      opts: [Object],
      parserOpts: [Object],
      pluginVisitors: [Array],
      pluginPasses: [Array],
      metadata: [Object],
      dynamicImportTypes: {},
      dynamicImportIds: {},
      dynamicImports: [],
      declarations: {},
      usedHelpers: {},
      path: [NodePath],
      ast: [Node],
      code: "import { uniq, extend, flatten, cloneDeep } from 'lodash'",
      shebang: '',
      hub: [Circular],
      scope: [Scope]
    },
    options: undefined
  },
  contexts: [
    TraversalContext {
      queue: [Array],
      parentPath: [NodePath],
      scope: [Scope],
      state: undefined,
      opts: [Object],
      priorityQueue: []
    }
  ],
  data: {},
  shouldSkip: false,
  shouldStop: false,
  removed: false,
  state: undefined,
  opts: {
    Identifier: { enter: [Array] },
    _exploded: {},
    _verified: {},
    BlockStatement: { exit: [Array] },
    Program: { exit: [Array] },
    ThisExpression: { enter: [Array] },
    JSXIdentifier: { enter: [Array] }
  },
  skipKeys: {},
  parentPath: NodePath {
    parent: Node {
      type: 'ImportDeclaration',
      start: 0,
      end: 57,
      loc: [SourceLocation],
      specifiers: [Array],
      source: [Node]
    },
    hub: Hub { file: [File [Map]], options: undefined },
    contexts: [ [TraversalContext] ],
    data: {},
    shouldSkip: false,
    shouldStop: false,
    removed: false,
    state: undefined,
    opts: {
      Identifier: [Object],
      _exploded: {},
      _verified: {},
      BlockStatement: [Object],
      Program: [Object],
      ThisExpression: [Object],
      JSXIdentifier: [Object]
    },
    skipKeys: {},
    parentPath: NodePath {
      parent: [Node],
      hub: [Hub],
      contexts: [Array],
      data: {},
      shouldSkip: false,
      shouldStop: false,
      removed: false,
      state: undefined,
      opts: [Object],
      skipKeys: {},
      parentPath: [NodePath],
      context: [TraversalContext],
      container: [Array],
      listKey: 'body',
      inList: true,
      parentKey: 'body',
      key: 0,
      node: [Node],
      scope: [Scope],
      type: 'ImportDeclaration',
      typeAnnotation: null
    },
    context: TraversalContext {
      queue: [Array],
      parentPath: [NodePath],
      scope: [Scope],
      state: undefined,
      opts: [Object],
      priorityQueue: []
    },
    container: [ [Node], [Node], [Node], [Node] ],
    listKey: 'specifiers',
    inList: true,
    parentKey: 'specifiers',
    key: 2,
    node: Node {
      type: 'ImportSpecifier',
      start: 23,
      end: 30,
      loc: [SourceLocation],
      imported: [Node],
      local: [Node]
    },
    scope: Scope {
      uid: 0,
      parent: null,
      hub: [Hub],
      parentBlock: [Node],
      block: [Node],
      path: [NodePath],
      labels: [Map],
      references: [Object: null prototype],
      bindings: [Object: null prototype],
      globals: [Object: null prototype] {},
      uids: [Object: null prototype] {},
      data: [Object: null prototype] {},
      crawling: false
    },
    type: 'ImportSpecifier',
    typeAnnotation: null
  },
  context: TraversalContext {
    queue: [ [Circular] ],
    parentPath: NodePath {
      parent: [Node],
      hub: [Hub],
      contexts: [Array],
      data: {},
      shouldSkip: false,
      shouldStop: false,
      removed: false,
      state: undefined,
      opts: [Object],
      skipKeys: {},
      parentPath: [NodePath],
      context: [TraversalContext],
      container: [Array],
      listKey: 'specifiers',
      inList: true,
      parentKey: 'specifiers',
      key: 2,
      node: [Node],
      scope: [Scope],
      type: 'ImportSpecifier',
      typeAnnotation: null
    },
    scope: Scope {
      uid: 0,
      parent: null,
      hub: [Hub],
      parentBlock: [Node],
      block: [Node],
      path: [NodePath],
      labels: [Map],
      references: [Object: null prototype],
      bindings: [Object: null prototype],
      globals: [Object: null prototype] {},
      uids: [Object: null prototype] {},
      data: [Object: null prototype] {},
      crawling: false
    },
    state: undefined,
    opts: {
      Identifier: [Object],
      _exploded: {},
      _verified: {},
      BlockStatement: [Object],
      Program: [Object],
      ThisExpression: [Object],
      JSXIdentifier: [Object]
    },
    priorityQueue: []
  },
  container: Node {
    type: 'ImportSpecifier',
    start: 23,
    end: 30,
    loc: SourceLocation { start: [Position], end: [Position] },
    imported: Node {
      type: 'Identifier',
      start: 23,
      end: 30,
      loc: [SourceLocation],
      name: 'flatten'
    },
    local: Node {
      type: 'Identifier',
      start: 23,
      end: 30,
      loc: [SourceLocation],
      name: 'flatten',
      __clone: [Function: __clone]
    }
  },
  listKey: undefined,
  inList: false,
  parentKey: 'local',
  key: 'local',
  node: Node {
    type: 'Identifier',
    start: 23,
    end: 30,
    loc: SourceLocation {
      start: [Position],
      end: [Position],
      identifierName: 'flatten'
    },
    name: 'flatten',
    __clone: [Function: __clone]
  },
  scope: Scope {
    uid: 0,
    parent: null,
    hub: Hub { file: [File [Map]], options: undefined },
    parentBlock: Node {
      type: 'File',
      start: 0,
      end: 57,
      loc: [SourceLocation],
      program: [Node],
      comments: [],
      tokens: [Array]
    },
    block: Node {
      type: 'Program',
      start: 0,
      end: 57,
      loc: [SourceLocation],
      sourceType: 'module',
      body: [Array],
      directives: []
    },
    path: NodePath {
      parent: [Node],
      hub: [Hub],
      contexts: [Array],
      data: {},
      shouldSkip: false,
      shouldStop: false,
      removed: false,
      state: undefined,
      opts: [Object],
      skipKeys: {},
      parentPath: null,
      context: [TraversalContext],
      container: [Node],
      listKey: undefined,
      inList: false,
      parentKey: 'program',
      key: 'program',
      node: [Node],
      scope: [Circular],
      type: 'Program',
      typeAnnotation: null
    },
    labels: Map { _c: Map {} },
    references: [Object: null prototype] {
      uniq: true,
      extend: true,
      flatten: true,
      cloneDeep: true
    },
    bindings: [Object: null prototype] {
      uniq: [Binding],
      extend: [Binding],
      flatten: [Binding],
      cloneDeep: [Binding]
    },
    globals: [Object: null prototype] {},
    uids: [Object: null prototype] {},
    data: [Object: null prototype] {},
    crawling: false
  },
  type: 'Identifier',
  typeAnnotation: null
}
NodePath {
  parent: Node {
    type: 'ImportSpecifier',
    start: 23,
    end: 30,
    loc: SourceLocation { start: [Position], end: [Position] },
    imported: Node {
      type: 'Identifier',
      start: 23,
      end: 30,
      loc: [SourceLocation],
      name: 'flatten'
    },
    local: Node {
      type: 'Identifier',
      start: 23,
      end: 30,
      loc: [SourceLocation],
      name: 'flatten',
      __clone: [Function: __clone]
    }
  },
  hub: Hub {
    file: File [Map] {
      _c: Map {},
      dynamicData: {},
      pipeline: Pipeline {},
      log: [Logger],
      opts: [Object],
      parserOpts: [Object],
      pluginVisitors: [Array],
      pluginPasses: [Array],
      metadata: [Object],
      dynamicImportTypes: {},
      dynamicImportIds: {},
      dynamicImports: [],
      declarations: {},
      usedHelpers: {},
      path: [NodePath],
      ast: [Node],
      code: "import { uniq, extend, flatten, cloneDeep } from 'lodash'",
      shebang: '',
      hub: [Circular],
      scope: [Scope]
    },
    options: undefined
  },
  contexts: [
    TraversalContext {
      queue: [Array],
      parentPath: [NodePath],
      scope: [Scope],
      state: undefined,
      opts: [Object],
      priorityQueue: []
    }
  ],
  data: {},
  shouldSkip: false,
  shouldStop: false,
  removed: false,
  state: undefined,
  opts: {
    Identifier: { enter: [Array] },
    _exploded: {},
    _verified: {},
    BlockStatement: { exit: [Array] },
    Program: { exit: [Array] },
    ThisExpression: { enter: [Array] },
    JSXIdentifier: { enter: [Array] }
  },
  skipKeys: {},
  parentPath: NodePath {
    parent: Node {
      type: 'ImportDeclaration',
      start: 0,
      end: 57,
      loc: [SourceLocation],
      specifiers: [Array],
      source: [Node]
    },
    hub: Hub { file: [File [Map]], options: undefined },
    contexts: [ [TraversalContext] ],
    data: {},
    shouldSkip: false,
    shouldStop: false,
    removed: false,
    state: undefined,
    opts: {
      Identifier: [Object],
      _exploded: {},
      _verified: {},
      BlockStatement: [Object],
      Program: [Object],
      ThisExpression: [Object],
      JSXIdentifier: [Object]
    },
    skipKeys: {},
    parentPath: NodePath {
      parent: [Node],
      hub: [Hub],
      contexts: [Array],
      data: {},
      shouldSkip: false,
      shouldStop: false,
      removed: false,
      state: undefined,
      opts: [Object],
      skipKeys: {},
      parentPath: [NodePath],
      context: [TraversalContext],
      container: [Array],
      listKey: 'body',
      inList: true,
      parentKey: 'body',
      key: 0,
      node: [Node],
      scope: [Scope],
      type: 'ImportDeclaration',
      typeAnnotation: null
    },
    context: TraversalContext {
      queue: [Array],
      parentPath: [NodePath],
      scope: [Scope],
      state: undefined,
      opts: [Object],
      priorityQueue: []
    },
    container: [ [Node], [Node], [Node], [Node] ],
    listKey: 'specifiers',
    inList: true,
    parentKey: 'specifiers',
    key: 2,
    node: Node {
      type: 'ImportSpecifier',
      start: 23,
      end: 30,
      loc: [SourceLocation],
      imported: [Node],
      local: [Node]
    },
    scope: Scope {
      uid: 0,
      parent: null,
      hub: [Hub],
      parentBlock: [Node],
      block: [Node],
      path: [NodePath],
      labels: [Map],
      references: [Object: null prototype],
      bindings: [Object: null prototype],
      globals: [Object: null prototype] {},
      uids: [Object: null prototype] {},
      data: [Object: null prototype] {},
      crawling: false
    },
    type: 'ImportSpecifier',
    typeAnnotation: null
  },
  context: TraversalContext {
    queue: [ [Circular] ],
    parentPath: NodePath {
      parent: [Node],
      hub: [Hub],
      contexts: [Array],
      data: {},
      shouldSkip: false,
      shouldStop: false,
      removed: false,
      state: undefined,
      opts: [Object],
      skipKeys: {},
      parentPath: [NodePath],
      context: [TraversalContext],
      container: [Array],
      listKey: 'specifiers',
      inList: true,
      parentKey: 'specifiers',
      key: 2,
      node: [Node],
      scope: [Scope],
      type: 'ImportSpecifier',
      typeAnnotation: null
    },
    scope: Scope {
      uid: 0,
      parent: null,
      hub: [Hub],
      parentBlock: [Node],
      block: [Node],
      path: [NodePath],
      labels: [Map],
      references: [Object: null prototype],
      bindings: [Object: null prototype],
      globals: [Object: null prototype] {},
      uids: [Object: null prototype] {},
      data: [Object: null prototype] {},
      crawling: false
    },
    state: undefined,
    opts: {
      Identifier: [Object],
      _exploded: {},
      _verified: {},
      BlockStatement: [Object],
      Program: [Object],
      ThisExpression: [Object],
      JSXIdentifier: [Object]
    },
    priorityQueue: []
  },
  container: Node {
    type: 'ImportSpecifier',
    start: 23,
    end: 30,
    loc: SourceLocation { start: [Position], end: [Position] },
    imported: Node {
      type: 'Identifier',
      start: 23,
      end: 30,
      loc: [SourceLocation],
      name: 'flatten'
    },
    local: Node {
      type: 'Identifier',
      start: 23,
      end: 30,
      loc: [SourceLocation],
      name: 'flatten',
      __clone: [Function: __clone]
    }
  },
  listKey: undefined,
  inList: false,
  parentKey: 'imported',
  key: 'imported',
  node: Node {
    type: 'Identifier',
    start: 23,
    end: 30,
    loc: SourceLocation {
      start: [Position],
      end: [Position],
      identifierName: 'flatten'
    },
    name: 'flatten'
  },
  scope: Scope {
    uid: 0,
    parent: null,
    hub: Hub { file: [File [Map]], options: undefined },
    parentBlock: Node {
      type: 'File',
      start: 0,
      end: 57,
      loc: [SourceLocation],
      program: [Node],
      comments: [],
      tokens: [Array]
    },
    block: Node {
      type: 'Program',
      start: 0,
      end: 57,
      loc: [SourceLocation],
      sourceType: 'module',
      body: [Array],
      directives: []
    },
    path: NodePath {
      parent: [Node],
      hub: [Hub],
      contexts: [Array],
      data: {},
      shouldSkip: false,
      shouldStop: false,
      removed: false,
      state: undefined,
      opts: [Object],
      skipKeys: {},
      parentPath: null,
      context: [TraversalContext],
      container: [Node],
      listKey: undefined,
      inList: false,
      parentKey: 'program',
      key: 'program',
      node: [Node],
      scope: [Circular],
      type: 'Program',
      typeAnnotation: null
    },
    labels: Map { _c: Map {} },
    references: [Object: null prototype] {
      uniq: true,
      extend: true,
      flatten: true,
      cloneDeep: true
    },
    bindings: [Object: null prototype] {
      uniq: [Binding],
      extend: [Binding],
      flatten: [Binding],
      cloneDeep: [Binding]
    },
    globals: [Object: null prototype] {},
    uids: [Object: null prototype] {},
    data: [Object: null prototype] {},
    crawling: false
  },
  type: 'Identifier',
  typeAnnotation: null
}
NodePath {
  parent: Node {
    type: 'ImportSpecifier',
    start: 32,
    end: 41,
    loc: SourceLocation { start: [Position], end: [Position] },
    imported: Node {
      type: 'Identifier',
      start: 32,
      end: 41,
      loc: [SourceLocation],
      name: 'cloneDeep'
    },
    local: Node {
      type: 'Identifier',
      start: 32,
      end: 41,
      loc: [SourceLocation],
      name: 'cloneDeep',
      __clone: [Function: __clone]
    }
  },
  hub: Hub {
    file: File [Map] {
      _c: Map {},
      dynamicData: {},
      pipeline: Pipeline {},
      log: [Logger],
      opts: [Object],
      parserOpts: [Object],
      pluginVisitors: [Array],
      pluginPasses: [Array],
      metadata: [Object],
      dynamicImportTypes: {},
      dynamicImportIds: {},
      dynamicImports: [],
      declarations: {},
      usedHelpers: {},
      path: [NodePath],
      ast: [Node],
      code: "import { uniq, extend, flatten, cloneDeep } from 'lodash'",
      shebang: '',
      hub: [Circular],
      scope: [Scope]
    },
    options: undefined
  },
  contexts: [
    TraversalContext {
      queue: [Array],
      parentPath: [NodePath],
      scope: [Scope],
      state: undefined,
      opts: [Object],
      priorityQueue: []
    }
  ],
  data: {},
  shouldSkip: false,
  shouldStop: false,
  removed: false,
  state: undefined,
  opts: {
    Identifier: { enter: [Array] },
    _exploded: {},
    _verified: {},
    BlockStatement: { exit: [Array] },
    Program: { exit: [Array] },
    ThisExpression: { enter: [Array] },
    JSXIdentifier: { enter: [Array] }
  },
  skipKeys: {},
  parentPath: NodePath {
    parent: Node {
      type: 'ImportDeclaration',
      start: 0,
      end: 57,
      loc: [SourceLocation],
      specifiers: [Array],
      source: [Node]
    },
    hub: Hub { file: [File [Map]], options: undefined },
    contexts: [ [TraversalContext] ],
    data: {},
    shouldSkip: false,
    shouldStop: false,
    removed: false,
    state: undefined,
    opts: {
      Identifier: [Object],
      _exploded: {},
      _verified: {},
      BlockStatement: [Object],
      Program: [Object],
      ThisExpression: [Object],
      JSXIdentifier: [Object]
    },
    skipKeys: {},
    parentPath: NodePath {
      parent: [Node],
      hub: [Hub],
      contexts: [Array],
      data: {},
      shouldSkip: false,
      shouldStop: false,
      removed: false,
      state: undefined,
      opts: [Object],
      skipKeys: {},
      parentPath: [NodePath],
      context: [TraversalContext],
      container: [Array],
      listKey: 'body',
      inList: true,
      parentKey: 'body',
      key: 0,
      node: [Node],
      scope: [Scope],
      type: 'ImportDeclaration',
      typeAnnotation: null
    },
    context: TraversalContext {
      queue: [Array],
      parentPath: [NodePath],
      scope: [Scope],
      state: undefined,
      opts: [Object],
      priorityQueue: []
    },
    container: [ [Node], [Node], [Node], [Node] ],
    listKey: 'specifiers',
    inList: true,
    parentKey: 'specifiers',
    key: 3,
    node: Node {
      type: 'ImportSpecifier',
      start: 32,
      end: 41,
      loc: [SourceLocation],
      imported: [Node],
      local: [Node]
    },
    scope: Scope {
      uid: 0,
      parent: null,
      hub: [Hub],
      parentBlock: [Node],
      block: [Node],
      path: [NodePath],
      labels: [Map],
      references: [Object: null prototype],
      bindings: [Object: null prototype],
      globals: [Object: null prototype] {},
      uids: [Object: null prototype] {},
      data: [Object: null prototype] {},
      crawling: false
    },
    type: 'ImportSpecifier',
    typeAnnotation: null
  },
  context: TraversalContext {
    queue: [ [Circular] ],
    parentPath: NodePath {
      parent: [Node],
      hub: [Hub],
      contexts: [Array],
      data: {},
      shouldSkip: false,
      shouldStop: false,
      removed: false,
      state: undefined,
      opts: [Object],
      skipKeys: {},
      parentPath: [NodePath],
      context: [TraversalContext],
      container: [Array],
      listKey: 'specifiers',
      inList: true,
      parentKey: 'specifiers',
      key: 3,
      node: [Node],
      scope: [Scope],
      type: 'ImportSpecifier',
      typeAnnotation: null
    },
    scope: Scope {
      uid: 0,
      parent: null,
      hub: [Hub],
      parentBlock: [Node],
      block: [Node],
      path: [NodePath],
      labels: [Map],
      references: [Object: null prototype],
      bindings: [Object: null prototype],
      globals: [Object: null prototype] {},
      uids: [Object: null prototype] {},
      data: [Object: null prototype] {},
      crawling: false
    },
    state: undefined,
    opts: {
      Identifier: [Object],
      _exploded: {},
      _verified: {},
      BlockStatement: [Object],
      Program: [Object],
      ThisExpression: [Object],
      JSXIdentifier: [Object]
    },
    priorityQueue: []
  },
  container: Node {
    type: 'ImportSpecifier',
    start: 32,
    end: 41,
    loc: SourceLocation { start: [Position], end: [Position] },
    imported: Node {
      type: 'Identifier',
      start: 32,
      end: 41,
      loc: [SourceLocation],
      name: 'cloneDeep'
    },
    local: Node {
      type: 'Identifier',
      start: 32,
      end: 41,
      loc: [SourceLocation],
      name: 'cloneDeep',
      __clone: [Function: __clone]
    }
  },
  listKey: undefined,
  inList: false,
  parentKey: 'local',
  key: 'local',
  node: Node {
    type: 'Identifier',
    start: 32,
    end: 41,
    loc: SourceLocation {
      start: [Position],
      end: [Position],
      identifierName: 'cloneDeep'
    },
    name: 'cloneDeep',
    __clone: [Function: __clone]
  },
  scope: Scope {
    uid: 0,
    parent: null,
    hub: Hub { file: [File [Map]], options: undefined },
    parentBlock: Node {
      type: 'File',
      start: 0,
      end: 57,
      loc: [SourceLocation],
      program: [Node],
      comments: [],
      tokens: [Array]
    },
    block: Node {
      type: 'Program',
      start: 0,
      end: 57,
      loc: [SourceLocation],
      sourceType: 'module',
      body: [Array],
      directives: []
    },
    path: NodePath {
      parent: [Node],
      hub: [Hub],
      contexts: [Array],
      data: {},
      shouldSkip: false,
      shouldStop: false,
      removed: false,
      state: undefined,
      opts: [Object],
      skipKeys: {},
      parentPath: null,
      context: [TraversalContext],
      container: [Node],
      listKey: undefined,
      inList: false,
      parentKey: 'program',
      key: 'program',
      node: [Node],
      scope: [Circular],
      type: 'Program',
      typeAnnotation: null
    },
    labels: Map { _c: Map {} },
    references: [Object: null prototype] {
      uniq: true,
      extend: true,
      flatten: true,
      cloneDeep: true
    },
    bindings: [Object: null prototype] {
      uniq: [Binding],
      extend: [Binding],
      flatten: [Binding],
      cloneDeep: [Binding]
    },
    globals: [Object: null prototype] {},
    uids: [Object: null prototype] {},
    data: [Object: null prototype] {},
    crawling: false
  },
  type: 'Identifier',
  typeAnnotation: null
}
NodePath {
  parent: Node {
    type: 'ImportSpecifier',
    start: 32,
    end: 41,
    loc: SourceLocation { start: [Position], end: [Position] },
    imported: Node {
      type: 'Identifier',
      start: 32,
      end: 41,
      loc: [SourceLocation],
      name: 'cloneDeep'
    },
    local: Node {
      type: 'Identifier',
      start: 32,
      end: 41,
      loc: [SourceLocation],
      name: 'cloneDeep',
      __clone: [Function: __clone]
    }
  },
  hub: Hub {
    file: File [Map] {
      _c: Map {},
      dynamicData: {},
      pipeline: Pipeline {},
      log: [Logger],
      opts: [Object],
      parserOpts: [Object],
      pluginVisitors: [Array],
      pluginPasses: [Array],
      metadata: [Object],
      dynamicImportTypes: {},
      dynamicImportIds: {},
      dynamicImports: [],
      declarations: {},
      usedHelpers: {},
      path: [NodePath],
      ast: [Node],
      code: "import { uniq, extend, flatten, cloneDeep } from 'lodash'",
      shebang: '',
      hub: [Circular],
      scope: [Scope]
    },
    options: undefined
  },
  contexts: [
    TraversalContext {
      queue: [Array],
      parentPath: [NodePath],
      scope: [Scope],
      state: undefined,
      opts: [Object],
      priorityQueue: []
    }
  ],
  data: {},
  shouldSkip: false,
  shouldStop: false,
  removed: false,
  state: undefined,
  opts: {
    Identifier: { enter: [Array] },
    _exploded: {},
    _verified: {},
    BlockStatement: { exit: [Array] },
    Program: { exit: [Array] },
    ThisExpression: { enter: [Array] },
    JSXIdentifier: { enter: [Array] }
  },
  skipKeys: {},
  parentPath: NodePath {
    parent: Node {
      type: 'ImportDeclaration',
      start: 0,
      end: 57,
      loc: [SourceLocation],
      specifiers: [Array],
      source: [Node]
    },
    hub: Hub { file: [File [Map]], options: undefined },
    contexts: [ [TraversalContext] ],
    data: {},
    shouldSkip: false,
    shouldStop: false,
    removed: false,
    state: undefined,
    opts: {
      Identifier: [Object],
      _exploded: {},
      _verified: {},
      BlockStatement: [Object],
      Program: [Object],
      ThisExpression: [Object],
      JSXIdentifier: [Object]
    },
    skipKeys: {},
    parentPath: NodePath {
      parent: [Node],
      hub: [Hub],
      contexts: [Array],
      data: {},
      shouldSkip: false,
      shouldStop: false,
      removed: false,
      state: undefined,
      opts: [Object],
      skipKeys: {},
      parentPath: [NodePath],
      context: [TraversalContext],
      container: [Array],
      listKey: 'body',
      inList: true,
      parentKey: 'body',
      key: 0,
      node: [Node],
      scope: [Scope],
      type: 'ImportDeclaration',
      typeAnnotation: null
    },
    context: TraversalContext {
      queue: [Array],
      parentPath: [NodePath],
      scope: [Scope],
      state: undefined,
      opts: [Object],
      priorityQueue: []
    },
    container: [ [Node], [Node], [Node], [Node] ],
    listKey: 'specifiers',
    inList: true,
    parentKey: 'specifiers',
    key: 3,
    node: Node {
      type: 'ImportSpecifier',
      start: 32,
      end: 41,
      loc: [SourceLocation],
      imported: [Node],
      local: [Node]
    },
    scope: Scope {
      uid: 0,
      parent: null,
      hub: [Hub],
      parentBlock: [Node],
      block: [Node],
      path: [NodePath],
      labels: [Map],
      references: [Object: null prototype],
      bindings: [Object: null prototype],
      globals: [Object: null prototype] {},
      uids: [Object: null prototype] {},
      data: [Object: null prototype] {},
      crawling: false
    },
    type: 'ImportSpecifier',
    typeAnnotation: null
  },
  context: TraversalContext {
    queue: [ [Circular] ],
    parentPath: NodePath {
      parent: [Node],
      hub: [Hub],
      contexts: [Array],
      data: {},
      shouldSkip: false,
      shouldStop: false,
      removed: false,
      state: undefined,
      opts: [Object],
      skipKeys: {},
      parentPath: [NodePath],
      context: [TraversalContext],
      container: [Array],
      listKey: 'specifiers',
      inList: true,
      parentKey: 'specifiers',
      key: 3,
      node: [Node],
      scope: [Scope],
      type: 'ImportSpecifier',
      typeAnnotation: null
    },
    scope: Scope {
      uid: 0,
      parent: null,
      hub: [Hub],
      parentBlock: [Node],
      block: [Node],
      path: [NodePath],
      labels: [Map],
      references: [Object: null prototype],
      bindings: [Object: null prototype],
      globals: [Object: null prototype] {},
      uids: [Object: null prototype] {},
      data: [Object: null prototype] {},
      crawling: false
    },
    state: undefined,
    opts: {
      Identifier: [Object],
      _exploded: {},
      _verified: {},
      BlockStatement: [Object],
      Program: [Object],
      ThisExpression: [Object],
      JSXIdentifier: [Object]
    },
    priorityQueue: []
  },
  container: Node {
    type: 'ImportSpecifier',
    start: 32,
    end: 41,
    loc: SourceLocation { start: [Position], end: [Position] },
    imported: Node {
      type: 'Identifier',
      start: 32,
      end: 41,
      loc: [SourceLocation],
      name: 'cloneDeep'
    },
    local: Node {
      type: 'Identifier',
      start: 32,
      end: 41,
      loc: [SourceLocation],
      name: 'cloneDeep',
      __clone: [Function: __clone]
    }
  },
  listKey: undefined,
  inList: false,
  parentKey: 'imported',
  key: 'imported',
  node: Node {
    type: 'Identifier',
    start: 32,
    end: 41,
    loc: SourceLocation {
      start: [Position],
      end: [Position],
      identifierName: 'cloneDeep'
    },
    name: 'cloneDeep'
  },
  scope: Scope {
    uid: 0,
    parent: null,
    hub: Hub { file: [File [Map]], options: undefined },
    parentBlock: Node {
      type: 'File',
      start: 0,
      end: 57,
      loc: [SourceLocation],
      program: [Node],
      comments: [],
      tokens: [Array]
    },
    block: Node {
      type: 'Program',
      start: 0,
      end: 57,
      loc: [SourceLocation],
      sourceType: 'module',
      body: [Array],
      directives: []
    },
    path: NodePath {
      parent: [Node],
      hub: [Hub],
      contexts: [Array],
      data: {},
      shouldSkip: false,
      shouldStop: false,
      removed: false,
      state: undefined,
      opts: [Object],
      skipKeys: {},
      parentPath: null,
      context: [TraversalContext],
      container: [Node],
      listKey: undefined,
      inList: false,
      parentKey: 'program',
      key: 'program',
      node: [Node],
      scope: [Circular],
      type: 'Program',
      typeAnnotation: null
    },
    labels: Map { _c: Map {} },
    references: [Object: null prototype] {
      uniq: true,
      extend: true,
      flatten: true,
      cloneDeep: true
    },
    bindings: [Object: null prototype] {
      uniq: [Binding],
      extend: [Binding],
      flatten: [Binding],
      cloneDeep: [Binding]
    },
    globals: [Object: null prototype] {},
    uids: [Object: null prototype] {},
    data: [Object: null prototype] {},
    crawling: false
  },
  type: 'Identifier',
  typeAnnotation: null
}
