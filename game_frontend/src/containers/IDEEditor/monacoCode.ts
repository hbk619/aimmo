import { monaco } from '@monaco-editor/react'
import { Position, languages } from 'monaco-editor'

const LANGUAGE_ID = 'python'

const CURSOR_MARKER = '__CURSOR__'

const directions = [
  {
    label: 'NORTH',
    kind: languages.CompletionItemKind.EnumMember,
    insertText: 'NORTH',
    detail: 'Go north'
  },
  {
    label: 'SOUTH',
    kind: languages.CompletionItemKind.EnumMember,
    insertText: 'SOUTH',
    detail: 'Go south'
  },
  {
    label: 'WEST',
    kind: languages.CompletionItemKind.EnumMember,
    insertText: 'WEST',
    detail: 'Go west'
  },
  {
    label: 'EAST',
    kind: languages.CompletionItemKind.EnumMember,
    insertText: 'EAST',
    detail: 'Go east'
  }
]

function generateDirectionsWithRange(range: Monaco): languages.CompletionItem[] {
  return directions.map(direction => ({
    ...direction,
    range
  }))
}

function insertCursorMarkerAtPosition(
  lines: string[],
  position: Position
) {
  position
  lines[position.lineNumber - 1] =
    lines[position.lineNumber - 1].slice(0, position.column - 1) +
    CURSOR_MARKER +
    lines[position.lineNumber - 1].slice(
      position.column - 1,
      lines[position.lineNumber - 1].length - 1
    )
}

function instanceOfReturn(object: any): object is Return {
  return (
    '__proto__' in object &&
    '_astname' in object.__proto__ &&
    object.__proto__._astname === 'Return'
  )
}

function instanceOfAttribute(object: any): object is Attribute {
  return (
    '__proto__' in object &&
    '_astname' in object.__proto__ &&
    object.__proto__._astname === 'Attribute'
  )
}

function instanceOfName(object: any): object is Name {
  return (
    '__proto__' in object &&
    '_astname' in object.__proto__ &&
    object.__proto__._astname === 'Name'
  )
}

function instanceOfExpr(object: any): object is Expr {
  return (
    '__proto__' in object &&
    '_astname' in object.__proto__ &&
    object.__proto__._astname === 'Expr'
  )
}

function instanceOfCall(object: any): object is Call {
  return (
    '__proto__' in object &&
    '_astname' in object.__proto__ &&
    object.__proto__._astname === 'Call'
  )
}

function findNodeWithCursorfromExpr(expr: Expr, completionItems: languages.CompletionItemKind[]): boolean {
  if (instanceOfAttribute(expr.value)) {
    if (expr.value.attr.v.includes(CURSOR_MARKER)) {
      console.log('found in attr attr')
      console.log(expr.value)
      return true
    }
  } else if (instanceOfName(expr.value)) {
    if (expr.value.id.v.includes(CURSOR_MARKER)) {
      console.log('found in name from expr')
      return true
    } 
  }
  return false
}

function findNodeWithCursorFromAST(ast: Module) {
  const mainFunctionBody = ast.body[0].body
  for (const line of mainFunctionBody) {
    if (instanceOfReturn(line)) {
      console.log('return')
      if (instanceOfCall(line.value)) {
        console.log("call")
      }
    } else if (instanceOfAttribute(line)) {
      console.log('attribute')
    } else if (instanceOfExpr(line)) {
      console.log('expr')
      findNodeWithCursorfromExpr(line)
    } else {
      console.log(line)
    }
  }
}

export default function doEditorStuff() {
  monaco
    .init()
    .then(monaco => {
      monaco.languages.register({
        id: LANGUAGE_ID,
        extensions: ['.py'],
        aliases: ['py', 'PY', 'python', 'PYTHON'],
        mimetypes: ['application/python']
      })

      Sk.configure({ output: console.log })

      monaco.languages.registerCompletionItemProvider(LANGUAGE_ID, {
        triggerCharacters: ['.'],
        provideCompletionItems(
          model,
          position,
          context,
          token
        ): languages.CompletionList {
          let lines = model.getLinesContent()
          insertCursorMarkerAtPosition(lines, position)
          const filename = '__main__'
          let parse = Sk.parse(filename, lines.join('\n'))
          let ast = Sk.astFromParse(parse.cst, filename, parse.flags)
          findNodeWithCursorFromAST(ast)
          return {
            suggestions: [
              {
                label: 'direction',
                kind: monaco.languages.CompletionItemKind.Enum,
                insertText: 'direction',
                range: {
                  startLineNumber: position.lineNumber,
                  endLineNumber: position.lineNumber,
                  startColumn: position.column - 1,
                  endColumn: position.column
                },
                detail: 'You can use direction.<YOUR_DIRECTION> to specify a direction'
              },
              {
                label: 'MoveAction',
                kind: monaco.languages.CompletionItemKind.Class,
                insertText: 'MoveAction',
                range: {
                  startLineNumber: position.lineNumber,
                  endLineNumber: position.lineNumber,
                  startColumn: position.column - 1,
                  endColumn: position.column
                },
                detail: 'Move the avatar'
              },
              {
                label: 'PickupAction',
                kind: monaco.languages.CompletionItemKind.Class,
                insertText: 'PickupAction',
                range: {
                  startLineNumber: position.lineNumber,
                  endLineNumber: position.lineNumber,
                  startColumn: position.column - 1,
                  endColumn: position.column
                },
                detail: 'Pickup an artefact',
                documentation: {
                  value: `
If you are on a cell with an artefact, you can use a PickupAction to pick it up! It will be in your inventory in the next turn

### Example

\`return PickupAction()\`
                `
                }
              }
            ]
          }
        }
      })
    })
    .catch(error =>
      console.error('An error ocurred during initialization of Monaco: ', error)
    )
}
