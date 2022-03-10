<template>
  <DashboardNavbar></DashboardNavbar>
  <ToastMessages></ToastMessages>
  <router-view v-if="status"></router-view>
</template>

<script>
import emitter from '@/libs/emitter';
import DashboardNavbar from '@/components/DashboardNavbar.vue';
import ToastMessages from '@/components/ToastMessages.vue';

export default {
  data() {
    return {
      status: false,
    };
  },
  provide() {
    return {
      emitter,
    };
  },
  components: {
    DashboardNavbar,
    ToastMessages,
  },
  methods: {
    checkLogin() {
      // 取出 Token
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
      this.$http.defaults.headers.common.Authorization = token;
      const api = `${process.env.VUE_APP_API}/api/user/check`;
      this.$http
        .post(api)
        .then((res) => {
          this.$httpMessageState(res, '登入');
          this.status = true;
        })
        .catch((err) => {
          this.$router.push('/');
          this.$httpMessageState(err.response, '錯誤訊息');
        });
    },
  },
  mounted() {
    this.checkLogin();
  },
};
</script>
