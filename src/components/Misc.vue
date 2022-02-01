<template>
  <el-container>
    <el-main>
      <h2>そのうちやりたいこと</h2>
      <ul>
        <li>静的型付け言語をつくる</li>
        <li>型推論、型検査器をつくる</li>
        <li>rustcを読む</li>
        <li>cargoを読む</li>
        <li>ガベージコレクタ、ARC</li>
        <li>xv6を読む</li>
        <li>OSS開発</li>
      </ul>
      <h2>読んでる本</h2>
      <ul>
        <li>並行プログラミング入門</li>
        <li>TAPL</li>
        <li>パタへね</li>
      </ul>
      <h2>読みたい本</h2>
      <ul>
        <li></li>
        <li>コンパイラ 原理と構造</li>
        <li>Mastering Ethereum</li>
        <li>Winnyの技術</li>
      </ul>
      <h2>読んだ本</h2>
      <ul>
        <li>30日でできる! OS自作入門</li>
        <li>自作エミュレータで学ぶx86アーキテクチャ</li>
        <li>問題解決力を鍛える! アルゴリズムとデータ構造</li>
        <li>ハリネズミ本</li>
        <li>ディジタル回路設計とコンピュータアーキテクチャ</li>
        <li>Hacking: The Art of Exploitation</li>
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