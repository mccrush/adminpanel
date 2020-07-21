<template>
  <div class="list-wrap overflow-auto">
    <button
      v-for="(item, index) in data"
      :key="'bt'+index"
      class="btn btn-sm btn-block btn-light border-0 rounded-0 m-0 text-left p-2 pl-3 lh-sm"
      @click="$emit('select-doc', item.id)"
    >{{item.title.substring(0, 19)}}</button>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style scoped>
.list-wrap {
  max-height: calc(100vh - 196px);
}
</style>