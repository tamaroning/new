<template>
  <el-container>
    <el-main>
      <el-image
        style="width: 260px; height: 260px"
        src="https://github.com/tamaroning/tamaroning.github.io/blob/gh-pages/src/assets/icon-600px.png?raw=true"
        fit="fill"
      ></el-image>
      <h2>tamaron</h2>
      <p>コンピュータが好きです</p>

      <h2>やりたいこと</h2>
      <ul>
        <li><p>TAPLを読む</p></li>
        <li><p>静的型付け言語をつくる</p></li>
        <li><p>型推論、型検査器をつくる</p></li>
        <li>
          <p>Rustコンパイラを読む</p>
          <ul>
            <li>THIRとHIR, 型検査</li>
            <li>MIR, Borrow checking</li>
            <li>Queries, Demand-driven compilation</li>
            <li>Interning</li>
            <li>ctx</li>
          </ul>
        </li>
        <li><p>CPythonを読む</p></li>
        <li>LLVM passを読む</li>
        <li><p>ガベージコレクタ、ARCをつくる</p></li>
        <li><p>xv6のソースコードを読む</p></li>
        <li>
          <p>OCamlを習得する</p>
        </li>
      </ul>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.el-main {
  text-align: left;
  line-height: 1.5;
}

/* margin */
@media screen and (min-width: 480px) {
  .el-main {
    margin-left: 0;
    margin-right: 0;
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .el-main {
    margin-left: 50px;
    margin-right: 50px;
  }
}
@media screen and (min-width: 1024px) {
  .el-main {
    margin-left: 200px;
    margin-right: 200px;
  }
}
</style>