<template>
  <div>
    <div v-if="mode === 'site'" class="app">
      <Navbar />
      <Footer />
    </div>
    <div v-if="mode === 'admin'" class="admin">
      <Admin />
    </div>
  </div>
</template>

<script>
import Admin from '@/views/Admin'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  components: {
    Navbar,
    Footer,
    Admin
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