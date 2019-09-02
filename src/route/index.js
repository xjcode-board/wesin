const Index = resolve => require(['../components/Index'], resolve)
const Home = resolve => require(['../components/Home/Home'], resolve)

const Order = resolve => require(['../components/Order/Order'], resolve)
const AddAddress = resolve => require(['../components/Order/AddAddress'], resolve)
const ConfirmOrder = resolve => require(['../components/Order/ConfirmOrder'], resolve)
const ConfirmPostOrder = resolve => require(['../components/Order/ConfirmPostOrder'], resolve)
const CreatePostOrder = resolve => require(['../components/Order/CreatePostOrder'], resolve)
const OrderDetail = resolve => require(['../components/Order/OrderDetail'], resolve)

const Cart = resolve => require(['../components/Cart/Cart'], resolve)

const Member = resolve => require(['../components/Member/Member'], resolve)
const MyData = resolve => require(['../components/Member/MyData'], resolve)
const Customer = resolve => require(['../components/Member/Customer'], resolve) //待定
const MyCustomer = resolve => require(['../components/Member/MyCustomer'], resolve)
const MyCustomDetail = resolve => require(['../components/Member/MyCustomDetail'], resolve)
const MyTeam = resolve => require(['../components/Member/MyTeam'], resolve)
const MyTeamDetail = resolve => require(['../components/Member/MyTeamDetail'], resolve)
const Products = resolve => require(['../components/Member/Products'], resolve)
const ProductDetail = resolve => require(['../components/Member/ProductDetail'], resolve)
const MyPoster = resolve => require(['../components/Member/MyPoster'], resolve)
const RecieveAddr = resolve => require(['../components/Member/RecieveAddr'], resolve)
const Echarge = resolve => require(['../components/Member/Echarge'], resolve)
const InventoryDetail = resolve => require(['../components/Member/InventoryDetail'], resolve)
const MyPurchase = resolve => require(['../components/Member/MyPurchase'], resolve)
const ReportRecord = resolve => require(['../components/Member/ReportRecord'], resolve)

const routes = [{
    path: '/',
    name: 'index',
    redirect: '/r/home',
    component: Index,
    children: [{
        path: '/r/home',
        name: 'home',
        component: Home,
        meta: {
          title: '微养森',
          keepAlive: true
        }
      },
      {
        path: '/r/order',
        name: 'order',
        component: Order,
        meta: {
          title: '微养森',
          keepAlive: true
        }
      },
      {
        path: '/r/cart',
        name: 'cart',
        component: Cart,
        meta: {
          title: '微养森',
          keepAlive: true
        }
      },
      {
        path: '/r/member',
        name: 'member',
        component: Member,
        meta: {
          title: '微养森',
          keepAlive: true
        }
      }
    ]
  }, {
    path: '/r/add-addr',
    name: 'AddAddress',
    component: AddAddress,
    meta: {
      title: '添加地址',
      keepAlive: false
    }
  }, {
    path: '/r/confirm-order',
    name: 'ConfirmOrder',
    component: ConfirmOrder,
    meta: {
      title: '确认订单',
      keepAlive: false
    }
  }, {
    path: '/r/confirm-post-order',
    name: 'ConfirmPostOrder',
    component: ConfirmPostOrder,
    meta: {
      title: '确认发货订单',
      keepAlive: false
    }
  }, {
    path: '/r/create-post-order',
    name: 'CreatePostOrder',
    component: CreatePostOrder,
    meta: {
      title: '创建发货订单',
      keepAlive: false
    }
  }, {
    path: '/r/order-detail',
    name: 'OrderDetail',
    component: OrderDetail,
    meta: {
      title: '订单详情',
      keepAlive: false
    }
  }, {
    path: '/r/my-data',
    name: 'MyData',
    component: MyData,
    meta: {
      title: '数据',
      keepAlive: false
    }
  }, {
    path: '/r/customer',
    name: 'Customer',
    component: Customer,
    meta: {
      title: '客户',
      keepAlive: false
    }
  }, {
    path: '/r/my-customer',
    name: 'MyCustomer',
    component: MyCustomer,
    meta: {
      title: '顾客',
      keepAlive: false
    }
  },
  {
    path: '/r/my-customer-detail',
    name: 'MyCustomDetail',
    component: MyCustomDetail,
    meta: {
      title: '详情',
      keepAlive: false
    }
  },
  {
    path: '/r/my-team',
    name: 'MyTeam',
    component: MyTeam,
    meta: {
      title: '团队',
      keepAlive: false
    }
  },
  {
    path: '/r/my-team-detail',
    name: 'MyTeamDetail',
    component: MyTeamDetail,
    meta: {
      title: '详情',
      keepAlive: false
    }
  },
  {
    path: '/r/products',
    name: 'Products',
    component: Products,
    meta: {
      title: '产品',
      keepAlive: false
    }
  },
  {
    path: '/r/product-detail',
    name: 'ProductDetail',
    component: ProductDetail,
    meta: {
      title: '详情',
      keepAlive: false
    }
  },
  {
    path: '/r/My-poster',
    name: 'MyPoster',
    component: MyPoster,
    meta: {
      title: '海报',
      keepAlive: false
    }
  },
  {
    path: '/r/recieve-addr',
    name: 'RecieveAddr',
    component: RecieveAddr,
    meta: {
      title: '收货地址',
      keepAlive: false
    }
  },
  {
    path: '/r/echarge',
    name: 'Echarge',
    component: Echarge,
    meta: {
      title: '充值',
      keepAlive: false
    }
  },
  {
    path: '/r/invent-detail',
    name: 'InventoryDetail',
    component: InventoryDetail,
    meta: {
      title: '库存详情',
      keepAlive: false
    }
  },
  {
    path: '/r/my-purchase',
    name: 'MyPurchase',
    component: MyPurchase,
    meta: {
      title: '我的发货单',
      keepAlive: false
    }
  },
  {
    path: '/r/report-record',
    name: 'ReportRecord',
    component: ReportRecord,
    meta: {
      title: '报称记录',
      keepAlive: false
    }
  }
]
export default routes
