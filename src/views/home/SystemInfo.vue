<template>
    <div>
        <!-- 内容标题区域 -->
        <div class="main-title">
            <div class="greenbar fl"></div>
            <h5 class="fl">系统信息</h5>
            <button class="flush fr"><span class="iconfont">&#xe654;</span>  刷新</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SystemInfo'
}
</script>

<style lang="scss">
    @import '~@/assets/styles/variables.scss';
    .main-title {
        height: 60px;
        background: $side-bar;
        .greenbar {
            width: 14px;
            background: $theme-color;
            height: 28px;
            margin-top: 16px;
        }
        h5 {
            line-height: 60px;
            padding-left: 30px;
            font-size: 22px;
            color: #595757;
        }
        .flush {
            width: 90px;
            height: 42px;
            margin-top: 8px;
            margin-right: 42px;
            font-size: 16px;
            color: #898989;
            background: #f4f5f5;
            border: 1px solid #cbcbcb;
            border-radius: 10px;
            cursor: pointer;
            outline: none;
        }
    }
</style>