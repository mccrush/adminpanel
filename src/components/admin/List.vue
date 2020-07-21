<template>
  <div class="list-wrap overflow-auto">
    <button
      v-for="(item, index) in data"
      :key="'bt'+index"
      class="btn btn-sm btn-block border-0 rounded-0 m-0 text-left p-2 pl-3 lh-sm"
      :class="id === item.id ? 'btn-warning': 'btn-light'"
      @click="$emit('select-item', {type, id:item.id, alias: item.title.substring(0, 8)})"
    >{{item.title.substring(0, 19)}}</button>
  </div>
</template>

<script>
export default {
  props: ['type', 'data', 'id']
}
</script>

<style scoped>
.list-wrap {
  max-height: calc(100vh - 196px);
}
</style>