<template>
  <el-container>
    <el-main>
      <h2>やりたいこと</h2>
      <ul>
        <li><p>TAPLを読む</p></li>
        <li><p>静的型付け言語をつくる</p></li>
        <li><p>型推論、型検査器をつくる</p></li>
        <li>
          <p>Rustコンパイラを読む</p>
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
        <li><p>CPythonを読む</p></li>
        <li>LLVM passを読む</li>
        <li><p>ガベージコレクタ、ARCをつくる</p></li>
        <li><p>xv6を読む</p></li>
        <li><p>OSS開発</p></li>
      </ul>
      <h2>自作言語の構想</h2>
      <ul>
        <li><p>コンパイル型静的型付け言語</p></li>
        <li><p>目標: 安全、高速、シンプル</p></li>
        <li><p>Swift, Rust, C++の良いところを取り入れたい</p></li>
      </ul>
      <h3>1. 型システムに関して</h3>
      <ul>
        <li><p>型推論、型検査は欲しい</p></li>
      </ul>
      <h3>2. メモリ管理に関して</h3>
      未定
      <ul>
        <li><p>GC(Nim,Python): プチフリーズが起きることがある。</p></li>
        <li><p>ARC(Swift,Nim): </p></li>
        <li><p>スマートポインタ(C++): 高速。Dangling Pointerが発生しない。</p></li>
        <li><p>ライフタイム(Rust): 高速。複雑なアノテーションが必要?</p></li>
        <li><p>案1: 基本GC or ARCだが、高速動作のためGCを使わずにスマートポインタのみを用いたバイナリにコンパイル可能</p></li>>
      </ul>
      <h3>3. 構文に関して</h3>
      <ul>
        <li><p>Swift+Rustっぽくしたい</p></li>
      </ul>
      <h3>4. その他</h3>
      <ul>
        <li><p>バックエンドにはLLVMを使う</p></li>
      </ul>
    </el-main>
  </el-container>
</template>
