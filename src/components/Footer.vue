<template>
  <el-container>
    <el-footer>
      <p>Powered by GitHub Pages</p>
      <ul>
        <li>
          <el-link href="https://twitter.com/tamaroning">Twitter</el-link>
        </li>
        <li><el-link href="https://github.com/tamaroning">GitHub</el-link></li>
      </ul>
    </el-footer>
  </el-container>
</template>
<style scoped>
.el-footer {
  background-color: #222;
  color: #eee;
  padding: 0 20px;
  margin-top: 160px;
}
ul > li {
  display: inline-block;
  margin-right: 2em;
}
ul .el-link {
  color: #eee;
  text-decoration: none;
}
@media (min-width: 768px) {
  footer {
    padding: 0;
    height: 50px;
    display: grid;
    grid-template-columns: 1fr 700px 1fr;
    grid-template-rows: 1fr;
  }
  footer > * {
    grid-column: 2;
    grid-row: 1;
  }
  p {
    justify-self: start;
    align-self: center;
  }
  ul {
    justify-self: end;
    align-self: center;
  }
}
@media (min-width: 1024px) {
  footer {
    grid-template-columns: 1fr 980px 1fr;
  }
}
</style>