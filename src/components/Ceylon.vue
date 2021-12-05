<template>
  <el-container>
    <el-main>
      <h1>プログランミング言語Ceylonについて</h1>
      <ul>
        <li>静的型付けスクリプト言語</li>
        <li>目標: 安全、高速、シンプル</li>
        <li>Swift, Rust, C++, TypeScriptの良いところを取り入れたい</li>
        <li>開発スタート: 2021/12/05</li>
      </ul>
      <h2>機能</h2>
      <ul>
        <li>変数, 関数</li>
        <li>型システム: 静的型付け, 型検査, 型推論</li>
        <li>型に対するメソッド定義</li>
        <li>マクロ</li>
        <li>名前空間</li>
        <li>外部ライブラリのインポート</li>
        <li>ARCによるメモリ管理</li>
        <li>最適化</li>
        <li>VM</li>
        <li>bitcodeへのコンパイル</li>
        <li>インクリメンタルコンパイル</li>
        <li>shebang対応: シェルスクリプトとして利用可能</li>
      </ul>
      <h1>1. コンパイラアーキテクチャ</h1>
      <h2>ソースコード表現</h2>
      <ul>
        <li>Token列:</li>
        <li>AST: Token列をそのまま木の形にしたもの</li>
        <li>
          HIR: ASTを解釈可能な形にしたもの
          https://doc.rust-lang.org/nightly/nightly-rustc/rustc_hir/enum.Node.html
        </li>
        <li>THIR: HIRに型推論を行ったもの</li>
        <li>
          MIR: CFGの形をとる。LLVM-IRに簡単に変換可能。操作的意味論を表す。
        </li>
      </ul>
      <h2>コンパイルから実行まで</h2>
      <ul>
        <li>トークナイズ: 文字列 -> トークン列</li>
        <li>パース: トークン列 -> AST</li>
        <li>Desuger, ソースの実体をIDに変える: AST -> HIR</li>
        <li>暗黙的な型変換の明示, UFCS形式へ: HIR -> THIR</li>
        <li>操作的意味論への変換: THIR -> MIR</li>
        <li>最適化(不要変数, デッドコード, 定数畳み込み): MIR -> MIR</li>
        <li>実行: MIR</li>
      </ul>
      <h2>参考</h2>
      <ul>
        <li>
          Unified Function Call Syntax
          https://cpplover.blogspot.com/2014/11/cunified-call-syntax-n4165-n4174.html
        </li>
        <li>
          Lexical syntax
          https://github.com/rust-lang/rfcs/blob/master/text/0090-lexical-syntax-simplification.md
        </li>
        <li>
          hir https://github.com/rust-lang/rfcs/blob/master/text/1191-hir.md
        </li>
        <li>
          mir https://github.com/rust-lang/rfcs/blob/master/text/1211-mir.md
        </li>
        <li>miri https://github.com/rust-lang/miri</li>
        <li>
          closure
          https://github.com/rust-lang/rfcs/blob/master/text/0114-closures.md
        </li>
        <li>
          stmt and expr
          https://doc.rust-lang.org/reference/statements-and-expressions.html
        </li>
        <li>CPython Bitcode https://docs.python.org/ja/3/library/dis.html</li>
        <li>Ruby VM https://qiita.com/nownabe/items/47cc5d95e8b4e01205a8</li>
        <li>
          Ruby Bitcode ref
          https://docs.ruby-lang.org/ja/latest/class/RubyVM=3a=3aInstructionSequence.html
        </li>
        <li>
          YARV https://magazine.rubyist.net/articles/0006/0006-YarvManiacs.html
        </li>
      </ul>

      <h1>2. 型システム</h1>
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
          <li>
            Slice : [Type] : 動的に決まるサイズを持つ配列(構造体で実装できそう)
          </li>
        </ul>
        <li>関数型</li>
        <ul>
          <li>Function: fn (Type, ..) -> Type : 関数</li>
          <li>Closure: (Type, ..) -> Type : クロージャ</li>
        </ul>
        <li>ユーザー定義型</li>
        <ul>
          <li>Struct: 構造体</li>
          <li>Enum: 列挙型, Rustのように値を持てると良いと思う</li>
        </ul>
        <li>ポインタ型</li>
        <ul>
          <li>未定</li>
        </ul>
        <li>その他</li>
        <ul>
          <li>型推論、型検査は欲しい</li>
        </ul>
      </ul>
      <h1>3. メモリ管理</h1>
      ARCに一票.
      <ul>
        <li>GC(Nim,Python): プチフリーズが起きることがある.</li>
        <li>ARC(Swift,Nim): そこそこ速い.</li>
        <li>ライフタイム(Rust): 高速.複雑なアノテーションが必要.</li>
      </ul>
      <h1>4. 文法</h1>
      <ul>
        <li>Swift+Rustをイメージ.</li>
        <li>マクロと糖衣構文を活用する.</li>
        <li>RustのトップレベルはItemsみたい: https://doc.rust-lang.org/reference/items.html</li>
      </ul>
      <h2>トークン</h2>
      ceylon_lexer::TokenKindで定義.
      <h2>文法定義 (EBNF)</h2>
      未定
      <h1>5. サンプルコード</h1>
      暫定的なサンプルコードは以下にある。
      <el-collapse v-model="activeNames">
        <el-collapse-item title="Hello World" name="1">
          <div>
            <pre>
            func main() -> () {
              println!("Hello World!");
            }
          </pre
            >
          </div>
          <div>main関数がエントリーポイント</div>
        </el-collapse-item>
        <el-collapse-item title="変数" name="2">
          <div>
            <pre>
              func main() {
                var a = 40; // i32
                let b = "Hello " + "World" + a.to_string(); // str型
                println!(a); // macroによってstrもi32も受け付ける
              }
            </pre>
          </div>
          <div>変数宣言: letはimmutable, varはmutable</div>
        </el-collapse-item>
        <el-collapse-item title="関数" name="3">
          <div>
            <pre>
              func main() {
                add(4, 3);
              }

              func add(a: i32, b: i32) -> i32{
                println!("The result is {a+b}");
                return a + b;
              }
            </pre>
          </div>
          <div>変数宣言: letはimmutable, varはmutable</div>
        </el-collapse-item>
        <el-collapse-item title="マクロ" name="4">
          <div>
            <pre>
              macro println($a: expr) {
                if_macro ty($a) == str {
                  print_str($a);
                } else_if_macro ty($a) == i32 {
                  print_i32($a);
                } else_macro {
                  exit(-1);
                } 
              }
            </pre>
          </div>
          <div>
            マクロを用いることで関数のオーバーロードが出来る。 if_macro,
            else_macroはマクロ内制御構文。
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      activeNames: null,
    };
  },
};
</script>