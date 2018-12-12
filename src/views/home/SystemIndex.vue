<template>
    <div class="system-index">
        <!-- 内容标题区域 -->
        <div class="main-title">
            <div class="greenbar fl"></div>
            <h5 class="fl">系统首页</h5>
            <button class="flush fr"><span class="iconfont">&#xe654;</span>  刷新</button>
        </div>
        <!-- 主内容区域 -->
        <div class="main-content">
            <!-- 四个卡片 -->
            <div class="cards">
                <div class="cards-item">
                    <p class="iconfont fl cards-icon">&#xe645;</p>
                    <div class="fl">
                        <p class="cards-text">今日订单总数</p>
                        <p class="cards-nums">200.00</p>
                    </div>
                </div>
                <div class="cards-item">
                    <p class="iconfont fl cards-icon">&#xe61b;</p>
                    <div class="fl">
                        <p class="cards-text">今日销售总额</p>
                        <p class="cards-nums">200.00</p>
                    </div>
                </div>
                <div class="cards-item">
                    <p class="iconfont fl cards-icon">&#xe739;</p>
                    <div class="fl">
                        <p class="cards-text">昨日销售总额</p>
                        <p class="cards-nums">200.00</p>
                    </div>
                </div>
                <div class="cards-item">
                    <p class="iconfont fl cards-icon">&#xe609;</p>
                    <div class="fl">
                        <p class="cards-text">近7天销售总额</p>
                        <p class="cards-nums">200.00</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SystemIndex'
}
</script>

<style lang="scss" scoped>
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
    .main-content {
        padding: 44px;
        width: 1374px;
        box-sizing: border-box;
        .cards {
            display: flex;
            justify-content: space-between;
            .cards-item {
                width: 282px;
                height: 106px;
                background: $side-bar;
                border: 1px solid $theme-color;
                box-sizing: border-box;
                padding: 25px;
                .cards-icon {
                    font-size: 50px;
                    color: $theme-color;
                    margin-right: 15px;
                      
                }
                .cards-text {
                    font-size: 18px;
                    margin-bottom: 5px;
                }
                .cards-nums {
                    font-size: 24px;
                    color: $my-red;
                    font-weight: 700;
                } 
            }
        }
    }
</style>