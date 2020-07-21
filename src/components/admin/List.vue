<template>
  <div>
    <button
      v-for="i in 5"
      :key="'bt'+i"
      class="btn btn-sm btn-block btn-light border-0 rounded-0 m-0 text-left pl-3"
    >Btn</button>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>