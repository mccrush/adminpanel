<template>
  <div class="p-1 p-lg-5 bg-dark vh-100 bg-image">
    <div class="bg-white shadow-sm rounded-lg admin-block">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 border-bottom p-3">
            <h6 class="m-0 mt-2 text-muted d-inline-block">Admin panel</h6>
            <button class="btn btn-sm btn-light text-muted float-right">Logout</button>
          </div>
        </div>
        <div class="row">
          <div class="col-3 col-md-2 border-right p-0 admin-sidebar">
            <h6 class="text-center m-0 mt-2 pb-2 border-bottom">Коллекции</h6>
            <List
              :data="collections"
              type="collections"
              :id="collectionId"
              @select-item="selectItem"
            />
          </div>
          <div class="col-3 col-md-2 p-0 border-right admin-sidebar">
            <h6 class="text-center m-0 mt-2 pb-2 border-bottom">
              Документы
              <button
                @click="create = true; docId=''; doc = {active: true, position: docs.length + 1}"
                class="btn btn-sm btn-light p-0 pl-2 pr-2 ml-1 border text-muted create-button"
                :disabled="!collectionAlias ? true: false"
                title="Создать документ"
              >+</button>
            </h6>
            <List
              v-if="collectionAlias"
              :data="docs"
              type="docs"
              :id="docId"
              @select-item="selectItem"
            />
          </div>
          <div class="col-6 col-md-8 p-3">
            <transition name="fade" mode="out-in">
              <Form v-if="docId || create" :doc="doc" />
              <h6
                v-else
                class="text-center m-0 pb-3 border-bottom"
              >{{collectionAlias ? 'Выберите документ' : 'Выберите коллекцию'}}</h6>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import collections from '@/data/collections'
import docs from '@/data/docs'
import List from '@/components/admin/List'
import Form from '@/components/admin/Form'

export default {
  components: {
    List,
    Form,
  },
  data() {
    return {
      collections,
      docs,
      doc: {},
      collectionAlias: '',
      collectionId: '',
      docId: '',
      create: false,
    }
  },
  // computed: {
  //   ...mapGetters([
  //     'clients',
  //     'menus',
  //     'napravs',
  //     'portfolios',
  //     'prices',
  //     'sliders',
  //     'zadachi',
  //     'contacts'
  //   ])
  // },
  methods: {
    selectItem({ type, id, alias }) {
      if (type === 'collections') {
        this.collectionAlias = alias
        //this.docs = this[alias]
        this.collectionId = id
        this.create = false
        this.docId = ''
      } else {
        this.docId = id
        this.doc = this.docs.find((doc) => doc.id === id)
      }
    },
  },
}
</script>

<style scoped>
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

.container-fluid {
  padding: 0 12px !important;
}

.create-button {
  position: relative;
  margin: -4px 0 -1px 0;
  height: 15px;
  line-height: 1;
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