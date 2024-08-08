<template>
  <div class="dataTables_wrapper dt-bootstrap5 no-footer">
    <div class="row">
      <slot name="showingSearch"></slot>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <table id="datatable" :class="tableClass ? tableClass : 'table table-bordered table-hover align-middle text-nowrap dt-responsive nowrap dataTable no-footer'" style="width: 100%">
          <!-- class="table table-bordered table-striped align-middle text-nowrap dt-responsive nowrap dataTable no-footer" -->
          <thead class="align-middle">
            <tr>
              <th
                v-for="column in columns"
                :key="column.name"
                @click="column.sortable ? $emit('sorting', column.name) : null"
                :style="'width:' + column.width + '; cursor:' + (column.sortable ? ' pointer;' : ' default;') + 'background-color:' + bgThead"
                :class="checkIcon(column)"
                :hidden="column.hidden ? column.hidden : false"
              >
                <span :class="theadText">
                  {{ column.label }}
                </span>
              </th>
            </tr>
          </thead>
          <slot name="tBody"></slot>
        </table>
      </div>
    </div>
    <div class="row">
      <slot name="pagination"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: ["columns", "arrows", "tableClass", "theadText", "bgThead"],
  methods: {
    checkIcon(column) {
      if (column.sortable) {
        if (this.arrows.col === column.name) {
          if (this.arrows.arr === "asc") {
            return "sorting sorting_asc";
          } else {
            return "sorting sorting_desc";
          }
        } else {
          return "sorting";
        }
      } else {
        return "";
      }
    },
  },
};
</script>
