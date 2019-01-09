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
    },
    promotes: {
      title: '促销',
      path: '/promotes/promotesList',
      child: [
          {
              sub: '头部类目',
              menu: [
                  {
                      name: '头部列表',
                      path: '/promotes/promotesList'
                  },
                  {
                      name: '添加头部',
                      path: '/promotes/addHeader'
                  }
              ]
          },
          {
              sub: '拼团管理',
              menu: [
                  {
                      name: '订单管理',
                      path: '/promotes/orderManage'
                  }
              ]
          }
      ]  
    },
    stores: {
        title: '库存',
        path: '/store/addStore',
        child: [
            {
                sub: '库存记录',
                menu: [
                    {
                        name: '商品入库',
                        path: '/store/addStore'
                    },
                    {
                        name: '商品出库',
                        path: '/store/exportStore'
                    }
                ]
            }
        ]
    },
    users: {
        title: '用户',
        path: '/users/usersList',
        child: [
            {
                sub: '用户管理',
                menu: [
                    {
                        name: '用户列表',
                        path: '/users/usersList'
                    }
                ]
            }
        ]
    },
    operate: {
        title: '运营',
        path: '/operate/adList',
        child: [
            {
                sub: '广告管理',
                menu: [
                    {
                        name: '广告列表',
                        path: '/operate/adList'
                    },
                    {
                        name: '添加广告',
                        path: '/operate/addAdvertise'
                    }
                ]
            }
        ]
    },
    setup: {
        title: '设置',
        path: '/setup/paySetup',
        child: [
            {
                sub: '基础设置',
                menu: [
                    {
                        name: '支付设置',
                        path: '/setup/paySetup'
                    },
                    {
                        name: '退款证书',
                        path: '/setup/refund'
                    }
                ]
            }
        ]
    },
    authority: {
        title: '权限',
        path: '/authority/operationLogs',
        child: [
            {
                sub: '权限',
                menu: [
                    {
                        name: '操作日志',
                        path: '/authority/operationLogs'
                    }
                ]
            }
        ]
    }
}