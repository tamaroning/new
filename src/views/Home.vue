<template>
  <el-container>
    <el-tabs tab-position="left">
      <el-tab-pane label="Top"><Top /></el-tab-pane>
      <el-tab-pane label="Profile(ja)"><Profile /></el-tab-pane>
      <el-tab-pane label="Profile(en)"><Portfolio /></el-tab-pane>
      <!--<el-tab-pane label="Ceylon"><Ceylon /></el-tab-pane>-->
      <!--<el-tab-pane label="Misc"><Misc /></el-tab-pane>-->
    </el-tabs>
  </el-container>
</template>
<script>
import Top from "../components/Top.vue";
import Profile from "../components/Profile.vue";
import Portfolio from "../components/Portfolio.vue";
//import Ceylon from "../components/Ceylon.vue";
//import Misc from "../components/Misc.vue";

export default {
  name: "App",
  components: {
    Top,
    Profile,
    Portfolio,
    //Ceylon,
    //Misc,
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
    margin-left: 10px;
    margin-right: 10px;
  }
}
@media screen and (min-width: 1024px) {
  .el-main {
    margin-left: 50px;
    margin-right: 50px;
  }
}
</style>