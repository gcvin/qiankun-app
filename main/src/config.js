export default {
  subApps: [
    {
      name: 'app-1', // 子应用名称，跟package.json一致
      entry: '//localhost:5174', // 子应用入口，本地环境下指定端口
      container: '#sub-container', // 挂载子应用的dom
      activeRule: '/app-1', // 路由匹配规则
      props: {} // 主应用与子应用通信传值
    },
    {
      name: 'app-2',
      entry: '//localhost:5175',
      container: '#sub-container',
      activeRule: '/app-2',
      props: {}
    }
  ]
}