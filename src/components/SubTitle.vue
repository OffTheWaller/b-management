<template>
  <div class="sub-title flex h-center between">
    <p>{{ subTitle }}</p>
    <div>
      <el-button v-if="isClose">关闭</el-button>
      <el-button v-if="isRefresh">刷新</el-button>
      <el-button v-if="isBack" @click="back">返回</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'subTitle',
  props: {
    subTitle: String,
    isClose: {
      type: Boolean,
      default: false
    },
    isRefresh: {
      type: Boolean,
      default: false
    },
    isBack: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    reFresh () {
      this.$emit('refresh')
    },
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
  .sub-title {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    height: 60px;
    background-color: #efefef;
    padding-right: 30px;
    box-sizing: border-box;
    p {
      color: #5a5a5a;
      font-size: 22px;
      font-weight: bold;
      line-height: 24px;
      border-left: 8px solid #5bc0bf;
      padding-left: 22px;
    }
    div {
      >button {
        margin-right: 0;
      }
    }
  }
</style>