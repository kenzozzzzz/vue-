// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
// import VueResource from "vue-resource"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

ElementUI.Dialog.props.closeOnClickModal.default = false;
// import Framework7 from 'framework7/framework7.esm.bundle.js'
// import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js'
// import Framework7Theme from 'framework7/css/framework7.bundle.css'

import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
Vue.use(VideoPlayer)
require('vue-video-player/src/custom-theme.css')

router.afterEach((to,from,next) => {

  window.scrollTo(0,0);
  
  // 或
  
  // window.scroll(0, 0);
  
  });
  
  // 或
  
  // router.afterEach((to,from,next) => {
  
  // document.body.scrollTop =0;
  
  // document.documentElement.scrollTop = 0;
  
  // });
// import Video from 'video.js'
// import 'video.js/dist/video-js.css'

// Vue.prototype.$video = Video
// Framework7.use(Framework7Vue)
// Vue.use(VueResource);
Vue.prototype.axios=axios
Vue.config.productionTip = false
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
