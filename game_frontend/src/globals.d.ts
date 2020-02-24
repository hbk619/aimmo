interface Module {
  body: FunctionDef[]
  __proto__: ASTProto
}

interface FunctionDef {
  name: string
  args: arguments_
  body: (Expr | Return | Call | Assign)[]
  __proto__: ASTProto
}

interface Assign {
    targets: Name[]
    value: Name | Expr | Num
    lineno: number
    col_offset: number
    __proto__: ASTProto
}

interface ASTProto {
    _astname: string
}

interface TypeProto {
    tp$name: string
}

interface Num {
    value: int_
    lineno: number
    col_offset: number
    __proto__: ASTProto
}

interface int_ {
    v: number
}

interface Expr {
    value: Name | Attribute
    __proto__: ASTProto
}

interface Return {
    value: Call | Name
    lineno: number
    col_offset: number
    __proto__: ASTProto
}

interface Name {
    id: str
    lineno: number
    col_offset: number
    __proto__: ASTProto
}

interface str {
    v: string
    __proto__: TypeProto
}

interface Call {
    func: Name
    args: Attribute[]
    lineno: number
    col_offset: number
}

interface Attribute {
    value: Name
    attr: str
    lineno: number
    col_offset: number
    __proto__: ASTProto
}

interface arguments_ {
  args: string[]
}

interface Skulpt {
  parse(filename: string, code: string): any
  astFromParse(cst: any, filename: string, flags: any): Module
  configure(options: any)
}

declare var Sk: Skulpt
