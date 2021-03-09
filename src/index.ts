import { Module } from "lavats-wasm";
import { Ast } from "lavats/dist/Ast";
import { Token } from "lavats/dist/Lex";
import { parser } from "./parser";

declare module "lavats-wasm" {
    namespace Module {
        function fromWat(wat: string): Module;
    }
}

/**
 * wat语法异常
 */
export class WatSyntaxError {
    /**
     * @param errorAst 不符合语法的```Ast```的数组
     * @param errorToken 不符合词法的```Token```的数组
     */
    constructor(
        public errorAst: Ast[],
        public errorToken: Token[],
    ) { }
}

/**
 * 通过wat字符串生成Module
 * @param wat wat字符串
 */
Module.fromWat = function fromWat(wat: string) {
    let { ast, errorAst, errorToken } = parser.match(wat, false);
    if (!ast) throw new WatSyntaxError(errorAst, errorToken);
    return ast.toModule();
}