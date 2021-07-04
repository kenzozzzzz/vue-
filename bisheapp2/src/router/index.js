import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Main from '@/views/Main'
import Photo from '@/views/Main/Photo'
import Photodetail from '@/views/Main/Photodetail'
import Photodetail2 from '@/views/Main/Photodetail2'
import Photodetail3 from '@/views/Main/Photodetail3'
import Photodetail4 from '@/views/Main/Photodetail4'
import Photodetail5 from '@/views/Main/Photodetail5'
import Login from '@/views/Login'
import About from '@/views/About'
import LessonDetail from '@/views/Lesson/LessonDetail'
import LessonDetailyshq from '@/views/Lesson/LessonDetailyshq'
import LessonDetailunity from '@/views/Lesson/LessonDetailunity'
import LessonDetailmaya from '@/views/Lesson/LessonDetailmaya'
import LessonDetailstyy from '@/views/Lesson/LessonDetailstyy'
import LessonDetailandroid from '@/views/Lesson/LessonDetailandroid'
import Lesson from '@/views/Lesson'
import Phone from '@/views/Phone'
import Pabout from '@/views/Phone/Pabout'
import Pschool from '@/views/Phone/Pschool'
import Phome from '@/views/Phone/Phome'
import PhoneLogin from '@/components/Phone/PhoneLogin'
import Center from '@/views/Login/center'
import easy_login from '@/views/Login/easy_login'
import Register from '@/views/Login/register'
import FindPassword from '@/components/findPassword'
import Pinglun from '@/components/pinglun'
import PrettyLogin from '@/components/PrettyLogin'
import test from '@/views/Main/viodetest'
import Plogin from '@/views/Phone/Plogin'
import PhoneRegister from '@/components/Phone/PhoneRegister'
import PhoneCenter from '@/components/Phone/PhoneCenter'
import PhoneComment from '@/components/Phone/PhoneComment'
// import { component } from 'vue/types/umd'
Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/main',
      name:'Main',
      component:Main
    },
    {
      path:'/login',
      name:'Login',
      component:Login,
      children:[
        {
          path:'center',
          component:Center 
        },
        {
          path:'register',
          component:Register
        },
        {
          path:'findpassword',
          component:FindPassword
        },
        {
          path:'login',
          component:PrettyLogin
        },
        {
          path:'/',
          redirect:'center'
        }
      ]
      
    },
    {
      path:'/test',
      component:test
    },
    {
      path:'/lesson',
      name:'lesson',
      component:Lesson
    },
    {
      path:'/lessondetail',
      name:'lessondetail',
      component:LessonDetail
    },
    {
      path:'/lessondetailyshq',
      name:'lessondetail',
      component:LessonDetailyshq
    },
    {
      path:'/lessondetailunity',
      name:'lessondetail',
      component:LessonDetailunity
    },
    {
      path:'/lessondetailmaya',
      name:'lessondetail',
      component:LessonDetailmaya
    },
    {
      path:'/lessondetailstyy',
      name:'lessondetail',
      component:LessonDetailstyy
    },
    {
      path:'/lessondetailandroid',
      name:'lessondetail',
      component:LessonDetailandroid
    },
    {
      path:'/about',
      name:'about',
      component:About
    },
    {
      path:'/photo',
      name:'photo',
      component:Photo
    },
    {
      path:'/photodetail',
      name:'photodetail',
      component:Photodetail
    },
    {
      path:'/photodetail2',
      name:'photodetail',
      component:Photodetail2
    },
    {
      path:'/photodetail3',
      name:'photodetail',
      component:Photodetail3
    },
    {
      path:'/photodetail4',
      name:'photodetail',
      component:Photodetail4
    },
    {
      path:'/photodetail5',
      name:'photodetail',
      component:Photodetail5
    },
    {
      path:'/phone',
      name:'phone',
      component:Phone,
      children:[
        {
          path:'/phonehome',
          name:'phonehome',
          component:Phome,
          children:[
            
         ],
          meta: {
            index: 0, // 重点
         }
        },
        {
          path:'/plogin',
          component:Plogin,
          children:[
            {
              path:'phonelogin',
              component:PhoneLogin
            },
            {
              path:'phoneregister',
              component:PhoneRegister
            },
            {
              path:'phonecenter',
              component:PhoneCenter
            },
            {
              path:'phonecomment',
              component:PhoneComment
            },
            {
              path:'/',
              redirect:'center'
            }
          ]
        },
        {
          path:'/phoneabout',
          name:'phoneabout',
          component:Pabout,
          meta: {
            index: 1, // 重点
        }
        },
        {
          path:'/phoneschool',
          name:'phoneshcool',
          component:Pschool,
          meta: {
            index: 2, // 重点
        }
        },
      ],
    //   meta: {
    //     index: 0, // 重点
    // }
    },
    {
      path:'/pinglun',
      component:Pinglun
    }
    
  ]
})
