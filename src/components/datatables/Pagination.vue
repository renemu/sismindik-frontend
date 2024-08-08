<template>
  <div class="col-sm-12 col-md-5">
    <div class="dataTables_info">Showing {{ pagination.from }} to {{ pagination.to }} of {{ pagination.total }} entries</div>
  </div>
  <div class="col-sm-12 col-md-7 d-flex justify-content-end">
    <div class="dataTables_paginate paging_simple_numbers" id="datatable_paginate">
      <ul class="pagination">
        <li
          v-for="(link, index) in pagination.links"
          :key="index"
          class="paginate_button page-item"
          :class="
            link.label == pagination.currentPage
              ? 'active'
              : index == 0 && pagination.currentPage == 1
              ? 'disabled'
              : pagination.currentPage == pagination.lastPage && index + 1 == pagination.links.length
              ? 'disabled'
              : link.label === '...'
              ? 'disabled'
              : ''
          "
        >
          <button @click="redirect(link.url)" type="button" aria-controls="datatable" data-dt-idx="1" tabindex="0" class="page-link" v-html="link.label"></button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["pagination"],
  methods: {
    changer(data) {
      let newUrl = data.replace("http://", "https://");
      return newUrl;
    },
    redirect(url) {
      let URL = this.changer(url);
      this.$emit("link", URL);
    },
    disableButton(this_page) {
      if (this.$props.pagination.currentPage === this_page) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style>
.active {
  color: #405189;
}
</style>
