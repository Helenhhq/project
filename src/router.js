import Vue from 'vue'
import Router from 'vue-router'
const Login = () => import('./views/Login');

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('./views/Main.vue'),
      children:[
        {
           path: '/main',
           redirect:'/main/home'
        },
        {
          path: '/main/home',
          name: 'home',
          component: () => import('./components/Home.vue')
        },
        {
          path: '/main/daily',
          name: 'daily',
          component: () => import('./components/DailyWorkManagement.vue')
        },
        {
          path: '/main/attend',
          name: 'attend',
          component: () => import('./components/AttendanceManagement.vue')
        },
        {
          path: '/main/depart',
          name: 'depart',
          component: () => import('./components/DepartmentManagement.vue')
        },
        {
          path: '/main/salary',
          name: 'salary',
          component: () => import('./components/SalaryManagement.vue')
        },
        {
          path: '/main/basic',
          name: 'basic',
          component: () => import('./components/BasicInformationManagementofStaff.vue')
        },
        {
          path: '/main/yearS',
          name: 'schedule',
          component: () => import('./components/YearSchedule.vue')
        },
         {
          path: '/main/seasonS',
          name: 'schedule',
          component: () => import('./components/SeasonSchedule.vue')
        },
         {
          path: '/main/monthS',
          name: 'schedule',
          component: () => import('./components/MonthSchedule.vue')
        },
         {
          path: '/main/weekS',
          name: 'schedule',
          component: () => import('./components/WeekSchedule.vue')
        },
        {
          path: '/main/evaluate',
          name: 'evaluate',
          component: () => import('./components/JobEvaluation.vue')
        },
        {
          path: '/main/transfer',
          name: 'transfer',
          component: () => import('./components/Transfer.vue')
        },
        {
          path: '/main/dailyAt',
          name: 'dailyAt',
          component: () => import('./components/DailyAttendance.vue')
        },
        {
          path: '/main/askforleave',
          name: 'askforleave',
          component: () => import('./components/AskForLeave.vue')
        },
        {
          path: '/main/mark',
          name: 'mark',
          component: () => import('./components/Mark.vue')
        }
      ]
    }
  ]
})
