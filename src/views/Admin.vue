<template>
  <div class="p-5 bg-dark vh-100 bg-image">
    <div class="bg-white shadow-sm rounded-lg admin-block">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 border-bottom p-3">
            <h6 class="m-0 mt-2 text-muted d-inline-block">Admin panel</h6>
            <button class="btn btn-sm btn-light text-muted float-right">Logout</button>
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
.bg-image {
  background-image: url(../assets/img/insert-backdrop.webp);
  background-position: center center;
  background-repeat: no-repeat;
}

.admin-block {
  max-width: 960px;
  height: calc(100vh - 96px);
  margin: 0 auto;
}

.admin-sidebar {
  height: calc(100vh - 160px);
}
</style>