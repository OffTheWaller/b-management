export default {
    index: {
        title: '首页',
        path: '/index/systemIndex',
        child: [
            {
                sub: '系统首页',
                menu: [
                    {
                        name: '系统首页',
                        path: '/index/systemIndex'
                    },
                    {
                        name: '账户设置',
                        path: '/index/accountSetting'
                    },
                    {
                        name: '系统信息',
                        path: '/index/systemInfo'
                    },
                    {
                        name: '登录日志',
                        path: '/index/loginLog'
                    }
                ]
            }
        ]
    },
    goods: {
        title: '商品',
        path: '/goods/list',
        child: [
            {
                sub: '商品管理',
                menu: [
                    {
                        name: '商品列表',
                        path: '/goods/list'
                    },
                    {
                        name: '添加商品',
                        path: '/goods/add'
                    },
                    {
                        name: '商品回收站',
                        path: '/goods/recycle'
                    },
                    {
                        name: '商品评价',
                        path: '/goods/evaluate'
                    }
                ]
            },
            {
                sub: '商品配置',
                menu: [
                    {
                        name: '商品分类',
                        path: '/goods/category'
                    },
                    {
                        name: '商品类型',
                        path: '/goods/type'
                    },
                    {
                        name: '品牌管理',
                        path: '/goods/brand'
                    },
                    {
                        name: '图片库管理',
                        path: '/goods/image'
                    }
                ]
            }
        ]
    },
    orders: {
        title: '订单',
        path: '/orders/list',
        child: [
            {
                sub: '订单管理',
                menu: [
                    {
                        name: '订单列表',
                        path: '/orders/list'
                    },
                    {
                        name: '确认收货',
                        path: '/orders/receive'
                    },
                    {
                        name: '订单设置',
                        path: '/orders/setting'
                    }
                ]
            },
            {
                sub: '退款及退货',
                menu: [
                    {
                        name: '退货申请处理',
                        path: '/orders/reject'
                    },
                    {
                        name: '退款申请处理',
                        path: '/orders/drawback'
                    },
                    {
                        name: '退货原因设置',
                        path: '/orders/reason'
                    }
                ]
            }
        ]
    }
}