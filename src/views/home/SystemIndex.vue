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
            <!-- 待处理区域 -->
            <panel :title="'待处理事务'">
                <div class="todo">
                    <el-row>
                        <el-col :span="8" class="todo-item">
                            <span class="todo-name">代付款订单</span>
                            <p class="fr">( <span class="todo-num">10</span> )</p>
                        </el-col>
                        <el-col :span="8" class="todo-item">
                            <span class="todo-name">已完成订单</span>
                            <p class="fr">( <span class="todo-num">10</span> )</p>
                        </el-col>
                        <el-col :span="8" class="todo-item">
                            <span class="todo-name">待确认退货订单</span>
                            <p class="fr">( <span class="todo-num">10</span> )</p>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="8" class="todo-item">
                            <span class="todo-name">待发货订单</span>
                            <p class="fr">( <span class="todo-num">10</span> )</p>
                        </el-col>
                        <el-col :span="8" class="todo-item">
                            <span class="todo-name">新缺货登记</span>
                            <p class="fr">( <span class="todo-num">10</span> )</p>
                        </el-col>
                        <el-col :span="8" class="todo-item">
                            <span class="todo-name">待处理退款订单</span>
                            <p class="fr">( <span class="todo-num">10</span> )</p>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="8" class="todo-item">
                            <span class="todo-name">已发货订单</span>
                            <p class="fr">( <span class="todo-num">10</span> )</p>
                        </el-col>
                        <el-col :span="8" class="todo-item">
                            <span class="todo-name">待处理退货订单</span>
                            <p class="fr">( <span class="todo-num">10</span> )</p>
                        </el-col>
                        <el-col :span="8" class="todo-item">
                            <span class="todo-name">广告位即将到期</span>
                            <p class="fr">( <span class="todo-num">10</span> )</p>
                        </el-col>
                    </el-row>
                </div>
            </panel>
            <!-- 运营快捷入口 -->
            <panel :title="'运营快捷入口'">
                <div class="entry">
                    <ul>
                        <li class="entry-item my-active">
                            <p class="entry-icon iconfont">&#xe613;</p>
                            <p class="entry-desc">添加商品</p>
                        </li>
                        <li class="entry-item">
                            <p class="entry-icon iconfont">&#xe6ab;</p>
                            <p class="entry-desc">订单列表</p>
                        </li>
                        <li class="entry-item">
                            <p class="entry-icon iconfont">&#xe663;</p>
                            <p class="entry-desc">用户管理</p>
                        </li>
                        <li class="entry-item">
                            <p class="entry-icon iconfont">&#xe62c;</p>
                            <p class="entry-desc">交易统计</p>
                        </li>
                        <li class="entry-item">
                            <p class="entry-icon iconfont">&#xe6e4;</p>
                            <p class="entry-desc">短信营销</p>
                        </li>
                        <li class="entry-item">
                            <p class="entry-icon iconfont">&#xe61d;</p>
                            <p class="entry-desc">广告管理</p>
                        </li>
                        <li class="entry-item">
                            <p class="entry-icon iconfont">&#xe6c2;</p>
                            <p class="entry-desc">专题管理</p>
                        </li>
                        <li class="entry-item">
                            <p class="entry-icon iconfont">&#xe60c;</p>
                            <p class="entry-desc">秒杀管理</p>
                        </li>
                        <li class="entry-item">
                            <p class="entry-icon iconfont">&#xe63b;</p>
                            <p class="entry-desc">首页推荐</p>
                        </li>
                    </ul>
                </div>
            </panel>
            <!-- 商品总览、用户总览 -->
            <div class="overview">
                <panel :title="'商品总览'" class="over-item">
                    <div class="product-overview">
                        <ul class="overview-sub">
                            <li>
                                <p class="overview-num">100</p>
                                <p class="overview-desc">已下架</p>
                            </li>
                            <li>
                                <p class="overview-num">100</p>
                                <p class="overview-desc">已上架</p>
                            </li>
                            <li>
                                <p class="overview-num">100</p>
                                <p class="overview-desc">库存紧张</p>
                            </li>
                            <li>
                                <p class="overview-num">100</p>
                                <p class="overview-desc">全部商品</p>
                            </li>
                        </ul>
                    </div>
                </panel>
                <panel :title="'用户总览'" class="over-item">
                    <div class="users-overview">
                        <ul class="overview-sub">
                            <li>
                                <p class="overview-num">100</p>
                                <p class="overview-desc">今日新增</p>
                            </li>
                            <li>
                                <p class="overview-num">100</p>
                                <p class="overview-desc">昨日新增</p>
                            </li>
                            <li>
                                <p class="overview-num">100</p>
                                <p class="overview-desc">本月新增</p>
                            </li>
                            <li>
                                <p class="overview-num">100</p>
                                <p class="overview-desc">会员总数</p>
                            </li>
                        </ul>
                    </div>
                </panel>
            </div>
            <!-- 订单统计 -->
            <panel :title="'订单统计'">
                <div class="orders-content">订单统计图</div>
            </panel>
            <!-- 销售统计 -->
            <panel :title="'销售统计'">
                <div class="sale-content">销售统计图</div>                
            </panel>
        </div>
    </div>
</template>

<script>
import Panel from '@/components/Panel'
export default {
    name: 'SystemIndex',
    components: {
        Panel
    }
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
        // 四个卡片
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
        // 待处理事务
        .todo {
            border-left: 1px solid #b5b5b5;
            .todo-item {
                border-right: 1px solid #b5b5b5;
                border-bottom: 1px solid #b5b5b5;
                height: 60px;
                padding: 24px 54px 19px 47px;
                background: #fff;
                .todo-name {
                    font-size: 18px;
                    &:hover {
                        color: $theme-color;
                        cursor: pointer;
                    }
                }
                .todo-num {
                    color: $my-red;
                    font-size: 18px;
                    position: relative;
                    top: 2px;
                }
            }
        }
        // 运营快捷入口
        .entry {
            @include panel-border;
            padding: 38px;
            background: #fff;
            ul {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .entry-item {
                width: 78px;
                height: 88px;
                text-align: center;
                color: #b6b6b7;
                &:hover {
                    color: $theme-color;
                }
                .entry-icon {
                    font-size: 50px;
                    margin-bottom: 10px;
                }
                .entry-desc {
                    font-size: 18px;
                }
            }
        }
        //商品总览、用户总览
        .overview {
            display: flex;
            justify-content: space-between;
            .over-item {
                width: 614px;
                .overview-sub {
                    display: flex;
                    padding: 50px;
                    justify-content: space-between;
                    background: #fff;
                    @include panel-border;
                    .overview-num {
                        color: $my-red;
                        font-size: 26px;
                        margin-bottom: 25px;
                        font-weight: 700;
                    }
                    .overview-desc {
                        font-size: 18px;
                        color: #646262;
                    }
                }
            }
        }
        //订单统计、销售统计
        .orders-content,
        .sale-content {
            height: 372px;
            background: #fff;
            @include panel-border;
        }
    }
</style>