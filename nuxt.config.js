module.exports = {
  // 是否是开发环境, 可在serve.js里引入使用
  dev: process.env.NODE_ENV !== "production",
  // 设置环境变量,可引入axios插件里使用
  env: {
    baseUrl: process.env.BASE_URL || "http://localhost:3000"
  },

  // srcDir: "client/", //  设置nuxt源码目录
  // 注意:当在现有的服务中集成使用 Nuxt.js 时，该配置项才有使用价值。
  // 可以将 Nuxt.js 的依赖包和原服务的 npm 依赖包一起组织至一个 package.json 文件中

  // 可定义服务器访问主机和端口,类似于webpack的devServe
  server: {
    port: 8888 // default: 3000
  },
  mode: "universal",
  /*
   ** Headers of the page 用来设置meta头标签
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color 页面切换 显示进度条,可以定制样式,也可加载自己的样式
   ** 在组件中可以使用 this.$nuxt.$loading.start()来启动进度条,用this.$nuxt.$loading.end()来结束进度条加载
   */
  loading: {
    color: "#fff",
    height: "6px"
  },
  /*
   ** Global CSS
   */
  css: [
    "element-ui/lib/theme-chalk/index.css",
    "assets/style/theme.less",
    "assets/style/page-transletion.css"
  ],
  /*
   ** Plugins to load before mounting the App
   ** 配置插件路径,可以预安装,也可以自己安装,都是放在plugins文件夹下
   ** 因为是服务端node渲染,所以没有window和document对象,如果使用的插件有相关对window的操作,ssr设为false
   */
  plugins: [
    "@/plugins/element-ui",
    { src: "@plugins/lodash.js", ssr: false },
    { src: "@/plugins/vconsole", ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   ** 可扩展nuxt,引入各种loader
   ** nuxtjs/style-resources插件 可以使用less sass等, 配合styleresources引入使用,如果使用全局样式文件 在css选项里设置路径即可
   */
  modules: ["@nuxtjs/style-resources", "@nuxtjs/axios"],

  axios: {
    prefix: "/test/",
    proxy: true
  },

  proxy: {
    "/test/": {
      target: " https://api.myjson.com",
      pathRewrite: {
        "^/test/": ""
      }
    }
  },

  // proxy: {
  //   '/test/': {
  //     target: 'https://yzh.quickhealmall.com/api',
  //     pathRewrite: {
  //        '^/test/': ''
  //     }
  //   }
  // },

  styleResources: {
    less: "./assets/**/*.less"
  },

  /*
   ** Nuxt.js modulesDir
   ** 用于设置路径解析的模块目录，例如：webpack resolveLoading，nodeExternal和postcss。
   */
  // modulesDir: ["node_modules"],

  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  /*
   ** Nuxt.js router 应用的根URL
   ** 如果整个单页面应用的所有资源可以通过 /app/ 来访问，那么 base 配置项的值需要设置为 '/app/'
   */
  // router: {
  //   base: "/app/",
  //   extendRoutes(routes, resolve) {
  //     routes.push({
  //       name: "custom",
  //       path: "*",
  //       component: resolve(__dirname, "components/404.vue")
  //     });
  //   }
  // } // 可扩展路由,可以通过extendRoutes选项执行此操作。

  // middleware: "user-agent", // 在每页渲染前运行 middleware/user-agent.js 中间件的逻辑
  // 可以在nuxt.config.js 、 layouts 或者 pages 中使用中间件:
  // 使用方法如下 如果在page中调用 即是 加载这个page的时候会调用中间件
  //  export default {
  //    middleware: 'user-agent'
  //  }
  // user-agent.js 如下
  //  export default function (context) {
  //   // 给上下文对象增加 userAgent 属性（增加的属性可在 `asyncData` 和 `fetch` 方法中获取）
  //   context.userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent
  // }

  // scrollBehavior 配置项用于个性化配置跳转至目标页面后的页面滚动位置。每次页面渲染后都会调用 scrollBehavior 配置的方法。
  // 所有页面渲染后 页面都滚到顶部
  // scrollBehavior(to, from, savedPosition) {
  //   return { x: 0, y: 0 };
  // }

  // 可修改目录结构  nuxt初始的目录为默认值
  // dir: {
  //   assets: 'custom-assets',
  //   layouts: 'custom-layouts',
  //   middleware: 'custom-middleware',
  //   pages: 'custom-pages',
  //   static: 'custom-static',
  //   store: 'custom-store'
  // }

  // Nuxt.js 使用 Vue.js 的<transition>组件来实现路由切换时的过渡动效。
  // transition: 'page'
  // or
};
