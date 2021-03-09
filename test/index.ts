import { Module } from "lavats-wasm";
import "../src/index"

let wat = `
(module $module
    (type $ifBlock (func (param i32)))
    (import "js" "test" (memory $test 0))
    (import "js" "imFunc" (func $imFunc))
    (global $global i32 (i32.const 0))
    (memory $memory 0)
    (data $data (i32.const 0) "\0a\00\00\00\00\00\00\00test\0a\00\00\00\00\00\00\00")
    (table $table 0 anyfunc)
    (elem $element (i32.const 0) 0)
    (func $start
    )
    (func $func (param $p1 i32) (local $l1 i32)
        block $block (result i32)
            i32.const 50
        end
        i32.const 10
        if $if (param i32)
            drop
            br 0
        else
            drop
        end
    )
    (start $start)
    (export "js" (memory $test))
)
`;

let module = Module.fromWat(wat);

debugger;