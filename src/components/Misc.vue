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
        <li><p>静的型付け言語</p></li>
        <li><p>VM上で動く</p></li>
        <li><p>メモリ管理はARCかGC</p></li>
        <li><p>プロセスメモリのHeapを利用してヒープとスタックを使う</p></li>
        <li><p>最適化あり</p></li>
      </ul>
    </el-main>
  </el-container>
</template>
