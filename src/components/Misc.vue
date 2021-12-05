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
  }
</script>