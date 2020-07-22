<template>
  <div>
    <div v-if="mode === 'site'" class="app">
      <Navbar />
      <Footer />
    </div>
    <div v-if="mode === 'admin'" class="admin">
      <!-- <Admin /> -->
      <Login />
    </div>
  </div>
</template>

<script>
import Admin from '@/views/Admin'
import Login from '@/views/Login'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  components: {
    Navbar,
    Footer,
    Admin,
    Login
  },
  data() {
    return {
      mode: 'admin'
    }
  }
}
</script>

<style>
</style>