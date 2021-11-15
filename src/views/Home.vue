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
          <p>Undergraduate student at Kyoto Univ. (Apr 2021 - current)</p>
        </li>
        <li><p>Major in computer science</p></li>
      </ul>

      <h2>Interests</h2>
      <ul>
        <li><p>Language processors</p></li>
        <li><p>Compiler optimization</p></li>
        <li><p>Low-level programming</p></li>
        <li><p>Low-level software &amp; hardware security</p></li>
      </ul>

      <h2>Experiences</h2>
      <div class="block">
        <el-timeline>
          <el-timeline-item
            timestamp="Aug 2021 - current"
            placement="top"
            color="#0bbd87"
          >
            <el-card>
              <h4>Part-time software engineer at Coincheck, Inc.</h4>
              <p>
                Developing a cryptocurrency exchange service using Nuxt and
                Rails
              </p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="Aug 2021 - Oct 2021" placement="top">
            <el-card>
              <h4>Trainee at National Security Camp 2021</h4>
              <p>
                learned about malware analysis and implemented Shadow Stack on
                RISC-V emulator
              </p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="Apr 2018 - Mar 2019" placement="top">
            <el-card>
              <h4>Trainee at SecHack365</h4>
              <p>made a x86 emulator from scratch</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>

      <h2>Works</h2>
      <el-descriptions direction="vertical" column="1">
        <el-descriptions-item>
          <el-link href="https://github.com/tamaroning/haribote-lang">
            <b>haribote-lang</b>
          </el-link>
        </el-descriptions-item>
        <el-descriptions-item>
          A simple interpreter with static analysis and various optimization
        </el-descriptions-item>
        <el-descriptions-item>
          <el-tag type="warning">Rust</el-tag>
        </el-descriptions-item>
      </el-descriptions>

      <el-descriptions direction="vertical" column="1">
        <el-descriptions-item>
          <el-link href="https://github.com/tamaroning/ironcc">
            <b>ironcc</b>
          </el-link>
        </el-descriptions-item>
        <el-descriptions-item
          >A toy C compiler with LLVM Backend
        </el-descriptions-item>
        <el-descriptions-item>
          <el-tag type="warning">Rust</el-tag>
          <el-tag type="info">LLVM</el-tag>
        </el-descriptions-item>
      </el-descriptions>
      <el-descriptions direction="vertical" column="1">
        <el-descriptions-item>
          <el-link href="https://github.com/tamaroning/perverse">
            <b>Perverse</b>
          </el-link>
        </el-descriptions-item>
        <el-descriptions-item
          >A beautiful pazzle game with two cubes moving in opposite
          directions</el-descriptions-item
        >
        <el-descriptions-item>
          <el-tag type="success">C#</el-tag>
          <el-tag type="success">Unity</el-tag>
          <el-tag>PHP</el-tag>
          <el-tag type="info">PostgreSQL</el-tag>
        </el-descriptions-item>
      </el-descriptions>
      <h2>Contibution</h2>
      <ul>
        <li>
          <p>
            rust-lang/rust: PR
            <el-link href="https://github.com/rust-lang/rust/pull/90790"
              >#90790</el-link
            >
          </p>
        </li>
        <li>
          <p>
            /richardanaya/tour_of_rust: PR
            <el-link
              href="https://github.com/richardanaya/tour_of_rust/pull/410"
              >#410</el-link
            >
            (translation)
          </p>
        </li>
      </ul>
      
      <h2>Activities</h2>
      <ul>
        <li><p>アプリ甲子園2018 first prize &amp; Minister of Internal Affairs and Communications Award</p></li>
        <li><p>Unity Inter-High 2018 Gold Award</p></li>
        <li><p>Speaker at TOKYO GAME SHOW 2018</p></li>
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