<template>
  <div class="p-5 bg-dark vh-100">
    <div class="bg-white shadow-sm rounded-lg admin-block">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 border-bottom p-3">
            <h5 class="m-0 text-muted">Admin panel</h5>
          </div>
        </div>
        <div class="row">
          <div class="col-3 col-md-2 border-right admin-sidebar">t</div>
          <div class="col-3 col-md-2 border-right">e</div>
          <div class="col-6 col-md-8"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.admin-block {
  max-width: 960px;
  height: calc(100vh - 96px);
  margin: 0 auto;
}

.admin-sidebar {
  height: calc(100vh - 153px);
}
</style>