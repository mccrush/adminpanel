<template>
  <div class="p-5 bg-dark vh-100 bg-image">
    <div class="bg-white shadow-sm rounded-lg admin-block">
      <div class="container-fluid p-3">
        <div class="row">
          <div class="col-12 text-left">
            <form @submit.prevent="login" class>
              <h4 class="text-center mt-2 mb-4">Authorization</h4>
              <label for="email">Email</label>
              <br />
              <input
                type="text"
                class="form-control form-control-sm"
                id="email"
                required
                v-model="email"
                placeholder="example@mail.ru"
              />
              <br />
              <label for="password">Password</label>
              <div class="input-group">
                <input
                  :type="passType ? 'password' : 'text'"
                  class="form-control form-control-sm"
                  id="password"
                  required
                  v-model="password"
                  ref="pass"
                  maxlength="20"
                />

                <div class="input-group-append">
                  <button
                    class="btn btn-sm btn-light p-0 pl-2 pr-2 border"
                    type="button"
                    @click="passType = !passType"
                  >
                    <!-- <img
                      v-if="passType"
                      src="@/assets/icons/eye-slash.svg"
                      width="24"
                      height="24"
                      alt="Показать пароль"
                      class="opacity-06"
                    />
                    <img
                      v-else
                      src="@/assets/icons/eye.svg"
                      width="24"
                      height="24"
                      alt="Скрыть пароль"
                      class="opacity-06"
                    />-->
                  </button>
                </div>
              </div>
              <br />
              <button class="btn btn-sm btn-success btn-block" type="submit">Login</button>
            </form>
          </div>
          <!-- <transition name="fade" mode="out-in">
      <Message v-if="error" />
          </transition>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },

  methods: {}
}
</script>

<style scoped>
.bg-image {
  background-image: url(../assets/img/insert-backdrop.webp);
  background-position: center center;
  background-repeat: no-repeat;
}

.admin-block {
  max-width: 240px;
  /* height: calc(100vh - 96px); */
  margin: 0 auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>