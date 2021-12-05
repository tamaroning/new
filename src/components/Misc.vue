<template>
  <el-container>
    <el-main>
      <h2>やりたいこと</h2>
      <ul>
        <li>TAPLを読む</li>
        <li>静的型付け言語をつくる</li>
        <li>型推論、型検査器をつくる</li>
        <li>
          Rustコンパイラを読む
          <!--
          <ul>
            <li>Parser, Lexer, AST</li>
            <li>THIR, HIR, 型検査</li>
            <li>MIR, Borrow checking</li>
            <li>Queries, Demand-driven compilation</li>
            <li>Interning</li>
          </ul>
          -->
        </li>
        <li>CPythonを読む</li>
        <li>LLVM passを読む</li>
        <li>ガベージコレクタ、ARCをつくる</li>
        <li>xv6を読む</li>
        <li>OSS開発</li>
      </ul>
      <h2>自作言語の構想</h2>
      <ul>
        <li>コンパイル型静的型付け言語</li>
        <li>目標: 安全、高速、シンプル</li>
        <li>Swift, Rust, C++の良いところを取り入れたい</li>
      </ul>
      <h3>1. 型システムに関して</h3>
      <ul>
        <li>プリミティブ型</li>
        <ul>
          <li>Boolean: Bool : 真偽値</li>
          <li>Numeric: i32/64, u32/64, f64 : 整数と小数</li>
          <li>Textual: char, str : 一文字と.text(.data)にある文字列リテラル</li>
          <li>Never: ! or Void : 値なし型 (Rustの!,SwiftのVoidに対応)</li>
        </ul>
        <li>シーケンス型</li>
        <ul>
          <li>Array: [Type; size] : 静的に決まるサイズを持つ配列</li>
          <li>Tuple: (Type, Type, ..) : 0個以上の型の組</li>
          <li>Slice : [Type] : 動的に決まるサイズを持つ配列(構造体で実装できそう)</li>
        </ul>
        <li>関数型</li>
        <ul>
          <li>Function: fn (Type, ..) -> Type : 関数</li>
          <li>Closure: (Type, ..) -> Type : クロージャ</li>
        </ul>
        <li>ユーザー定義型</li>
        <ul>
          <li>Struct: 構造体</li>
          <li>Enum: 列挙型, Rustのように値を持てると良いと思う
          </li>
        </ul>
        <li>ポインタ型</li>
        <ul>
          <li>未定</li>
        </ul>
        <li>その他</li>
        <ul>
          <li>型推論、型検査は欲しい</li>
          <li>未定</li>
        </ul>
      </ul>
      <h3>2. メモリ管理に関して</h3>
      未定
      <ul>
        <li>GC(Nim,Python): プチフリーズが起きることがある。</li>
        <li>ARC(Swift,Nim): </li>
        <li>スマートポインタ(C++): 高速。Dangling Pointerが発生しない。</li>
        <li>ライフタイム(Rust): 高速。複雑なアノテーションが必要?</li>
        <li>案1: 基本GC or ARCだが、高速動作のためGCを使わずにスマートポインタのみを用いたバイナリにコンパイル可能</li>>
      </ul>
      <h3>3. 構文に関して</h3>
      <ul>
        <li>Swift+Rustをイメージ</li>
        <li>マクロと糖衣構文を活用する</li>
        <li></li>
      </ul>
      <h3>4. コンパイラアーキテクチャ</h3>
      Rustcを参考にする
      <ul>
        <li>Token列: </li>
        <li>AST: Token列をそのまま木の形にしたもの</li>
        <li>HIR: ASTを解釈可能な形にしたもの
          Hindley–Milner型推論を行う
          https://doc.rust-lang.org/nightly/nightly-rustc/rustc_hir/enum.Node.html
        </li>
        <li>THIR: HIRに型推論を行ったもの</li>
        <li>MIR: CFGの形をとる。LLVM-IRに簡単に変換可能。操作的意味論を表す。</li>
        基本的な解析を行う(Live Variables, Dead Code)
      </ul>
      <h3>5. サンプルコード</h3>
      // Hello World
      func main() -> () {
        println!("Hello World!");
      }

      // 変数
      func main() -> () {
        // varはmutable, letはimmutable
        var a = 40; // i32
        let b = "Hello " + "World" + a.to_string(); // str型
        println!(a); // macroによってstrもi32も受け付ける
      }

      // マクロ
      macro println($a) {
        kind($a) == expr => {
          ty($a) == str => {
            print_str($a);
          }
          ty($a) == i32 => {
            print_i32($a);
          }
          defalut => {
            exit(-1);
          } 
        }
        default => {
          exit(-1);
        }
      }

    </el-main>
  </el-container>
</template>
