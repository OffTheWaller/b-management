<template>
    <div class="nav-wrapper">
        <div class="logo">LOGO</div>
        <el-menu
        default-active="1"
        mode="horizontal"
        @select="handleSelect"
        background-color="#5bc0bf"
        text-color="#fff"
        :router="isRouter"
        >
            <el-menu-item v-for="item in nav" :index="item.path">首页</el-menu-item>
            <!-- <el-menu-item index="goods">商品</el-menu-item>
            <el-menu-item index="orders">订单</el-menu-item>
            <el-menu-item index="stores">库存</el-menu-item>
            <el-menu-item index="users">用户</el-menu-item>
            <el-menu-item index="promotes">促销</el-menu-item>
            <el-menu-item index="runs">运营</el-menu-item>
            <el-menu-item index="contents">内容</el-menu-item>
            <el-menu-item index="statistic">统计</el-menu-item>
            <el-menu-item index="finance">财务</el-menu-item>
            <el-menu-item index="setting">设置</el-menu-item>
            <el-menu-item index="privilege">权限</el-menu-item> -->
        </el-menu>
    </div>
</template>

<script>

export default {
    name: 'CommonHeader',
    data () {
        return {
            // nav: ['首页','商品','订单','库存','用户','促销','运营','内容','统计','财务','设置','权限']
            isRouter: false,
            nav: this.$store.state.nav
        }
    },
    methods: {
        handleSelect (key, keypath) {
            console.log(key)
            
        }
    }
}
</script>

<style lang="scss">
    .nav-wrapper {
        width: 1634px;
        margin: 0 auto;
        display: flex;
        .el-menu {
            height: 90px;
            .el-menu-item {
                width: 80px;
                height: 90px;
                line-height: 90px;
                border: none;
                text-align: center;
            }
            .el-menu-item.is-active {
                border-bottom: none;
                background-color: #7ccdcc !important;
                color: #fff !important;
            }
            
        }
        .logo {
            width: 182px;
            font-size: 34px;
            color: #fff;
            line-height: 90px;
            text-align: center;
            // float: left;
        }
    }

</style>