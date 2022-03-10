<template>
  <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active navbar-brand" to="/">P薩殿</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link navbar-brand" to="/admin/products">產品</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link navbar-brand" to="/admin/orders">訂單</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link navbar-brand" to="/admin/coupons">優惠券</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link navbar-brand" to="/admin/articles">文章</router-link>
          </li>
        </ul>
      </div>
      <router-link class="mx-2" to="/admin/cart">
        <i class="bi-cart3" style="font-size: 1.5rem; color: cornflowerblue"></i
      ></router-link>
      <!-- <router-link class="mx-2" to="" @click.prevent="logout">
        <i class="bi-door-open" style="font-size: 2rem; color: cornflowerblue"></i
      ></router-link> -->
      <a href="#" @click.prevent="logout" class="nav-link">登出</a>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      const api = `${process.env.VUE_APP_API}/logout`;
      this.$http
        .post(api)
        .then((response) => {
          this.$httpMessageState(response, '登出');
          if (response.data.success) {
            this.$router.push('/');
          }
        })
        .catch((error) => {
          this.$httpMessageState(error.response, '錯誤訊息');
        });
    },
  },
};
</script>
