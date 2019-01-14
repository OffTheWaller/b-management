<template>
  <div>
    <sub-title subTitle="用户列表"></sub-title>
    <div class="body">
      <search-box class="margin-b">
        <div slot="search-content" class="search-slot flex h-center">
          <span class="font-14 gray">用户昵称:</span>&nbsp;&nbsp;
          <el-input v-model="realName" clearable placeholder="请输入昵称" class="search-input"></el-input>&nbsp;&nbsp;
          <span class="font-14 gray">用户手机:</span>&nbsp;&nbsp;
          <el-input v-model="mobilePhone" clearable placeholder="请输入手机号" class="search-input"></el-input>&nbsp;&nbsp;
          <span class="font-14 gray">注册时间:</span>
          <el-date-picker
              v-model="datePicker"
              value-format="yyyy-MM-dd HH:mm:ss"
              style="margin-left: 20px;"
              type="datetimerange"
              clearable
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
          </el-date-picker>
        </div>
      </search-box>
    </div>
  </div>
</template>

<script>
import subTitle from "@/components/SubTitle";
import SearchBox from "@/components/SearchBox";
import mixin from '@/utils/mixin';
export default {
  name: 'UserList',
  mixins: [mixin],
  components: {
    subTitle,
    SearchBox
  },
  data () {
    return {
      realName: '',
      mobilePhone: '',
      datePicker: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/variables.scss";

</style>

