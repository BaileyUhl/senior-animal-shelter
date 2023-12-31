import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'
import store from '../store/index'
import Application from '../views/Application.vue'
import FirstLoginView from '../views/FirstLoginView.vue'
import ApproveVolunteersView from '../views/ApproveVolunteersView.vue'
import Directory from '../views/Directory.vue'
import AddPet from '../views/AddPet.vue'
import UpdatePet from '../views/UpdatePet.vue'
import Adopted from '../views/Adopted.vue'

Vue.use(Router)

/**
 * The Vue Router is used to "direct" the browser to render a specific view component
 * inside of App.vue depending on the URL.
 *
 * It also is used to detect whether or not a route requires the user to have first authenticated.
 * If the user has not yet authenticated (and needs to) they are redirected to /login
 * If they have (or don't need to) they're allowed to go about their way.
 */

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout,
      meta: {
        requiresAuth: false
      }
    }, 
    {
      path: "/apply",
      name: "apply",
      component: Application,
      meta: {
        requiresAuth: false
      }
    }, 
    {
      path: "/directory",
      name: "directory",
      component: Directory,
      meta: {
        requiresAuth: true
      }
    }, 
    {
      path: "/pets",
      name: "addPet",
      component: AddPet,
      meta: {
        requiresAuth: true
      }
    }, 
    {
      path: "/pets/:id",
      name: "updatePet",
      component: UpdatePet,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/changepassword/:id",
      name: "change-password",
      component: FirstLoginView,
      meta: {
        requiresAuth: false
      }
    },
    {  
      path: "/applications",
      name: "applications",
      component: ApproveVolunteersView,
      meta: {
        requiresAuth: true
      }
      
    },

    {  
      path: "/adopted",
      name: "adopted",
      component: Adopted,
      meta: {
        requiresAuth: false
      }
      
    },

  ]
})

router.beforeEach((to, from, next) => {
  // Determine if the route requires Authentication
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);

  // If it does and they are not logged in, send the user to "/login"
  if (requiresAuth && store.state.token === '') {
    next("/login");
  } else {
    // Else let them go to their next destination
    next();
  }
});

export default router;
