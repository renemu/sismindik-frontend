<script setup>
import Layout from "@/layouts/MainLayout.vue";
import datatable from "@/components/datatables/Datatable.vue";
import _debounce from "lodash/debounce";
import pagination from "@/components/datatables/Pagination.vue";
import Swal from "sweetalert2";
import apiClient from "@/service/ApiClientService";
import { reactive } from "vue";

const state = reactive({
  projects: [],
  modalData: false,
  formData: {},
  url: "/person",
  checked: false,
  categoriesDate: [],
  columns: [
    {
      label: "ID",
      name: "id",
      sortable: true,
    },
    {
      label: "Nama",
      name: "nama",
      class: "text-primary fw-bold",
      custom: {
        icon: "ri-user-line",
        routeName: "data.detail",
        params: "id",
      },
      sortable: true,
    },
    {
      label: "NIK",
      name: "nik",
      sortable: true,
    },
    {
      label: "Tanggal Lahir",
      name: "tanggal_lahir",
      sortable: true,
    },
    {
      label: "Nama Ayah",
      name: "nama_ayah",
      sortable: true,
    },
    {
      label: "Nama Ibu",
      name: "nama_ibu",
      sortable: true,
    },
    {
      label: "Pekerjaan Ayah",
      name: "pekerjaan_ayah",
      sortable: true,
    },
    {
      label: "Pekerjaan Ibu",
      name: "pekerjaan_ibu",
      sortable: true,
    },
    {
      label: "Action",
    },
  ],
  perPage: ["5", "10", "25", "50", "100"],
  arrows: {
    arr: "desc",
    // col: "id",
  },
  tableData: {
    per_page: 5,
    // sort: "asc",
  },
  pagination: {
    lastPage: "",
    currentPage: "",
    total: "",
    lastPageUrl: "",
    nextPageUrl: "",
    prevPageUrl: "",
    from: "",
    to: "",
    links: [],
  },
  options: {
    categories: [],
    chart: {
      series: [
        {
          data: [],
        },
      ],
    },
  },
});

function getProjects(url = state.url, par) {
  apiClient.get(url, { params: par ? par : state.tableData }).then((res) => {
    let getData = res.data.data;
    state.projects = getData.data;
    state.pagination.lastPage = getData.last_page;
    state.pagination.currentPage = getData.current_page;
    state.pagination.from = getData.from;
    state.pagination.to = getData.to;
    state.pagination.total = getData.total;
    state.pagination.links = getData.links;
    state.pagination.lastPageUrl = getData.last_page_url;
    state.pagination.nextPageUrl = getData.next_page_url;
    state.pagination.prevPageUrl = getData.prev_page_url;
    // state.options.categories = state.projects.map((e) => e.tanggal_lahir);
    // state.options.chart.series[0].data = state.projects.map((e) => e.id);
    // state.options.chart.series[0].name = "ID";
    console.log(state.pagination);
  });
}
const searching = _debounce((e) => {
  state.tableData.search = e.target.value;
  getProjects();
}, 500);
function sortBy(key) {
  state.tableData.orderBy = key;
  state.tableData.sort = state.tableData.sort === "desc" ? "asc" : "desc";
  state.arrows.arr = state.tableData.sort;
  state.arrows.col = key;
  getProjects();
}
function modal() {
  state.formData = {};
  state.checked = false;
}
function deleteProject(data) {
  Swal.fire({
    title: "Anda Yakin Ingin Hapus Data Ini ?",
    text: `ID : ${data.id} dengan nama '${data.nama}' akan dihapus !!!`,
    icon: "question",
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    confirmButtonText: "Hapus",
    showCancelButton: true,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        text: `ID : ${data.id} dengan nama '${data.nama}' berhasil dihapus !!!`,
        icon: "info",
      }).then(() => {
        apiClient.delete(`${state.url}/${data.id}`).then(() => {
          getProjects();
        });
      });
    }
  });
}
const submitAdd = async () => {
  state.checked = false;
  let dataAdd = {
    nama: state.formData.nama,
    nik: state.formData.nik,
    tanggal_lahir: state.formData.tanggal_lahir,
    nama_ayah: state.formData.nama_ayah,
    nama_ibu: state.formData.nama_ibu,
    pekerjaan_ayah: state.formData.pekerjaan_ayah,
    pekerjaan_ibu: state.formData.pekerjaan_ibu,
  };
  await apiClient.post(state.url, dataAdd).then(() => {
    Swal.fire({
      title: "Success",
      text: "The data has been Added successfully.",
      icon: "success",
    });
    getProjects();
  });
};
getProjects();
</script>
<template>
  <layout>
    <div class="col">
      <div class="card">
        <div class="card-header">
          <button class="btn btn-primary" @click="modal" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="ri-add-circle-line align-bottom me-1"></i>Tambah Data</button>
        </div>
        <div class="card-body">
          <datatable :columns="state.columns" @sorting="sortBy" :arrows="state.arrows">
            <template #showingSearch>
              <div class="col-sm-12 col-md-6">
                <div class="dataTables_length">
                  <label
                    >Show
                    <select v-model="state.tableData.per_page" @change="getProjects()" class="col-sm-2 form-select w-auto form-select-sm">
                      <option v-for="(records, index) in state.perPage" :key="index" :value="records">
                        {{ records }}
                      </option>
                    </select>
                    entries
                  </label>
                </div>
              </div>
              <div class="col-sm-12 col-md-6">
                <div class="dataTables_filter">
                  <label>Search:<input type="text" v-model="state.tableData.search" class="form-control form-control-sm" placeholder="Search Table" @input="searching" aria-controls="datatable" /></label>
                </div>
              </div>
            </template>
            <template #tBody>
              <tbody>
                <tr v-for="(project, indexP) in state.projects" :key="indexP">
                  <td v-for="(column, indexC) in state.columns" :key="indexC">
                    <div v-if="column.name === 'id'" align="center">
                      <span :class="column.class">
                        {{ project[column.name] }}
                      </span>
                    </div>
                    <div v-else-if="column.name === 'nama'" :class="column.class">
                      <router-link :to="{ name: column.custom.routeName, params: { id: project.id } }" style="text-decoration: none">
                        <i :class="column.custom.icon"></i>
                        {{ project[column.name] }}
                      </router-link>
                    </div>
                    <div v-else-if="column.name === 'nik'" align="center">
                      <span :class="column.class">
                        {{ project[column.name] }}
                      </span>
                    </div>
                    <div v-else-if="column.name === 'tanggal_lahir'" align="center">
                      <span :class="column.class">
                        {{ project[column.name] }}
                      </span>
                    </div>
                    <div v-else-if="column.label === 'Action'" align="center">
                      <button type="button" class="btn btn-danger btn-sm" @click="deleteProject(project)">Delete</button>
                    </div>
                    <div v-else="column.name">
                      <span :class="column.class">
                        {{ project[column.name] }}
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </template>
            <template #pagination>
              <div class="card-footer bg-light">
                <div class="row">
                  <pagination :pagination="state.pagination" @prev="getProjects(state.pagination.prevPageUrl)" @next="getProjects(state.pagination.nextPageUrl)" @link="getProjects($event)"> </pagination>
                </div>
              </div>
            </template>
          </datatable>
        </div>
      </div>
    </div>
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">Tambah Data</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form id="formAdd" @submit.prevent="submitAdd">
              <label class="form-label">Nama</label>
              <input type="text" class="form-control mb-3" v-model="state.formData.nama" required />
              <label class="form-label">NIK</label>
              <input type="number" class="form-control mb-3" v-model="state.formData.nik" required />
              <label class="form-label">Tanggal Lahir</label>
              <input type="date" class="form-control mb-3" v-model="state.formData.tanggal_lahir" required />
              <label class="form-label">Nama Ayah</label>
              <input type="text" class="form-control mb-3" v-model="state.formData.nama_ayah" required />
              <label class="form-label">Nama Ibu</label>
              <input type="text" class="form-control mb-3" v-model="state.formData.nama_ibu" required />
              <label class="form-label">Pekerjaan Ayah</label>
              <input type="text" class="form-control mb-3" v-model="state.formData.pekerjaan_ayah" required />
              <label class="form-label">Pekerjaan Ibu</label>
              <input type="text" class="form-control mb-3" v-model="state.formData.pekerjaan_ibu" required />
            </form>
          </div>
          <div class="modal-footer">
            <input type="checkbox" form="formAdd" class="text-start" v-model="state.checked" required />Confirm
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="modal">Close</button>
            <button type="submit" form="formAdd" class="btn btn-primary" :class="!state.checked ? 'disabled' : ''">Save</button>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="row m-3">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <ApexCharts :series="state.options.chart.series" :categories="categoriesDate" :tooltip="state.options.categories"></ApexCharts>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">heii</div>
        </div>
      </div>
    </div> -->
  </layout>
</template>
