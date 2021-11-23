<template>
  <el-container>
    <el-main>
      <el-image
        style="width: 220px; height: 220px"
        src="https://www.tamaron.dev/img/icon-600px.png"
        fit="fill"
      ></el-image>
      <h2>Tamaron</h2>
      <ul>
        <li>
          <p>Hi, everyone!</p>
        </li>
      </ul>

      <h2>Interests</h2>
      <ul>
        <li><p>Language processors</p></li>
        <li><p>Compiler optimization</p></li>
        <li><p>Low-level programming</p></li>
        <li><p>Low-level software &amp; hardware security</p></li>
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