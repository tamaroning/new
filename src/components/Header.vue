<template>
  <el-container>
    <el-header>
      <el-link href="/">Home</el-link>
      <el-link href="/portfolio">Profile</el-link>
      <el-link href="https://tamaron.hatenablog.com/">Blog</el-link>
    </el-header>
  </el-container>
</template>
<style scoped>
.el-header {
  background-color: #222;
  color: #eee;
  height: 50px;
  display: grid;
}

.el-link {
  color: #eee;
  text-decoration: none;
}

@media (min-width: 768px) {
  .el-header {
    grid-template-columns: 1fr 700px 1fr;
  }
  #form {
    display: block;
  }
}

@media (min-width: 1024px) {
  .el-header {
    grid-template-columns: 1fr 980px 1fr;
  }
}
</style>