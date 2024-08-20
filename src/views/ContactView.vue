<script setup>
import Layout from "@/layouts/MainLayout.vue";
</script>
<template>
  <Layout title="Contact">
    <h1>contact</h1>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header d-flex align-items-center">
            <h5 class="flex-grow-1 mb-0 text-muted text-uppercase"><i class="las la-list"></i> Asset Categories</h5>
            <div class="flex-shrink-0">
              <button type="button" class="btn btn-info btn-sm" data-bs-toggle="modal" data-bs-target="#modalAddAssetCategory"><i class="las la-plus"></i> Add <span class="hide-xs">Category</span></button>
            </div>
          </div>
          <div class="card-body text-muted text-uppercase fs-11">
            <div id="datatable_wrapper" class="dataTables_wrapper dt-bootstrap5 no-footer">
              <div class="row">
                <div class="col-sm-12 col-md-6">
                  <div class="dataTables_length" id="datatable_length">
                    <label
                      >Show
                      <select name="datatable_length" aria-controls="datatable" class="form-select form-select-sm">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </select>
                      entries</label
                    >
                  </div>
                </div>
                <div class="col-sm-12 col-md-6">
                  <div id="datatable_filter" class="dataTables_filter">
                    <label>Search:<input type="search" class="form-control form-control-sm" placeholder="" aria-controls="datatable" /></label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <table id="datatable" class="table nowrap dt-responsive table-bordered table-hover text-uppercase fs-11 align-middle dataTable no-footer dtr-inline" style="width: 100%" aria-describedby="datatable_info">
                    <thead>
                      <tr class="text-info bg-light">
                        <th width="1%" class="sorting" tabindex="0" aria-controls="datatable" rowspan="1" colspan="1" style="width: 11.4px" aria-label="ID: activate to sort column ascending">ID</th>
                        <th class="sorting sorting_asc" tabindex="0" aria-controls="datatable" rowspan="1" colspan="1" style="width: 365.4px" aria-sort="ascending" aria-label="Category Name: activate to sort column descending">
                          Category Name
                        </th>
                        <th class="sorting" tabindex="0" aria-controls="datatable" rowspan="1" colspan="1" style="width: 195.4px" aria-label="Category Code: activate to sort column ascending">Category Code</th>
                        <th class="sorting" tabindex="0" aria-controls="datatable" rowspan="1" colspan="1" style="width: 228.4px" aria-label="Created: activate to sort column ascending">Created</th>
                        <th width="5%" class="text-end sorting" tabindex="0" aria-controls="datatable" rowspan="1" colspan="1" style="width: 40.4px" aria-label="Assets: activate to sort column ascending">Assets</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr class="odd">
                        <td class="dtr-control" tabindex="0">9</td>
                        <td class="sorting_1">
                          <strong
                            ><a href="/Asset/asset-category-detail?cid=9" class="text-uppercase">
                              <i class="me-1 las la-list text-info"></i>
                              Alat Musik
                            </a>
                          </strong>
                        </td>
                        <td>
                          <strong>ALM</strong>
                        </td>
                        <td data-sort="2024-01-15 13:41:34">
                          <i class="ri-time-line align-bottom text-success me-1"></i>
                          15 Jan 2024 - 13:41:34
                        </td>
                        <td class="text-end">0</td>
                      </tr>
                      <tr class="even">
                        <td class="dtr-control" tabindex="0">8</td>
                        <td class="sorting_1">
                          <strong
                            ><a href="/Asset/asset-category-detail?cid=8" class="text-uppercase">
                              <i class="me-1 las la-list text-info"></i>
                              Alat Produksi (Content)
                            </a>
                          </strong>
                        </td>
                        <td>
                          <strong>APC</strong>
                        </td>
                        <td data-sort="2024-01-15 13:41:11">
                          <i class="ri-time-line align-bottom text-success me-1"></i>
                          15 Jan 2024 - 13:41:11
                        </td>
                        <td class="text-end">0</td>
                      </tr>
                      <tr class="odd">
                        <td class="dtr-control" tabindex="0">2</td>
                        <td class="sorting_1">
                          <strong
                            ><a href="/Asset/asset-category-detail?cid=2" class="text-uppercase">
                              <i class="me-1 las la-list text-info"></i>
                              Alat Rumah Tangga (Appliance)
                            </a>
                          </strong>
                        </td>
                        <td>
                          <strong>ART</strong>
                        </td>
                        <td data-sort="2024-01-15 13:39:15">
                          <i class="ri-time-line align-bottom text-success me-1"></i>
                          15 Jan 2024 - 13:39:15
                        </td>
                        <td class="text-end">12</td>
                      </tr>
                      <tr class="even">
                        <td class="dtr-control" tabindex="0">7</td>
                        <td class="sorting_1">
                          <strong
                            ><a href="/Asset/asset-category-detail?cid=7" class="text-uppercase">
                              <i class="me-1 las la-list text-info"></i>
                              Alat Tulis Kantor (ATK)
                            </a>
                          </strong>
                        </td>
                        <td>
                          <strong>ATK</strong>
                        </td>
                        <td data-sort="2024-01-15 13:40:51">
                          <i class="ri-time-line align-bottom text-success me-1"></i>
                          15 Jan 2024 - 13:40:51
                        </td>
                        <td class="text-end">1</td>
                      </tr>
                      <tr class="odd">
                        <td class="dtr-control" tabindex="0">1</td>
                        <td class="sorting_1">
                          <strong
                            ><a href="/Asset/asset-category-detail?cid=1" class="text-uppercase">
                              <i class="me-1 las la-list text-info"></i>
                              Elektronik
                            </a>
                          </strong>
                        </td>
                        <td>
                          <strong>EKT</strong>
                        </td>
                        <td data-sort="2024-01-15 13:31:55">
                          <i class="ri-time-line align-bottom text-success me-1"></i>
                          15 Jan 2024 - 13:31:55
                        </td>
                        <td class="text-end">232</td>
                      </tr>
                      <tr class="even">
                        <td class="dtr-control" tabindex="0">5</td>
                        <td class="sorting_1">
                          <strong
                            ><a href="/Asset/asset-category-detail?cid=5" class="text-uppercase">
                              <i class="me-1 las la-list text-info"></i>
                              Furniture
                            </a>
                          </strong>
                        </td>
                        <td>
                          <strong>FUR</strong>
                        </td>
                        <td data-sort="2024-01-15 13:40:11">
                          <i class="ri-time-line align-bottom text-success me-1"></i>
                          15 Jan 2024 - 13:40:11
                        </td>
                        <td class="text-end">1066</td>
                      </tr>
                      <tr class="odd">
                        <td class="dtr-control" tabindex="0">6</td>
                        <td class="sorting_1">
                          <strong
                            ><a href="/Asset/asset-category-detail?cid=6" class="text-uppercase">
                              <i class="me-1 las la-list text-info"></i>
                              Kendaraan
                            </a>
                          </strong>
                        </td>
                        <td>
                          <strong>KEN</strong>
                        </td>
                        <td data-sort="2024-01-15 13:40:25">
                          <i class="ri-time-line align-bottom text-success me-1"></i>
                          15 Jan 2024 - 13:40:25
                        </td>
                        <td class="text-end">6</td>
                      </tr>
                      <tr class="even">
                        <td class="dtr-control" tabindex="0">3</td>
                        <td class="sorting_1">
                          <strong
                            ><a href="/Asset/asset-category-detail?cid=3" class="text-uppercase">
                              <i class="me-1 las la-list text-info"></i>
                              Komputer &amp; Hardware
                            </a>
                          </strong>
                        </td>
                        <td>
                          <strong>KOM</strong>
                        </td>
                        <td data-sort="2024-01-15 13:39:35">
                          <i class="ri-time-line align-bottom text-success me-1"></i>
                          15 Jan 2024 - 13:39:35
                        </td>
                        <td class="text-end">0</td>
                      </tr>
                      <tr class="odd">
                        <td class="dtr-control" tabindex="0">10</td>
                        <td class="sorting_1">
                          <strong
                            ><a href="/Asset/asset-category-detail?cid=10" class="text-uppercase">
                              <i class="me-1 las la-list text-info"></i>
                              Other (Lain-lain)
                            </a>
                          </strong>
                        </td>
                        <td>
                          <strong>DLL</strong>
                        </td>
                        <td data-sort="2024-01-15 13:43:10">
                          <i class="ri-time-line align-bottom text-success me-1"></i>
                          15 Jan 2024 - 13:43:10
                        </td>
                        <td class="text-end">2</td>
                      </tr>
                      <tr class="even">
                        <td class="dtr-control" tabindex="0">4</td>
                        <td class="sorting_1">
                          <strong
                            ><a href="/Asset/asset-category-detail?cid=4" class="text-uppercase">
                              <i class="me-1 las la-list text-info"></i>
                              Smartphone
                            </a>
                          </strong>
                        </td>
                        <td>
                          <strong>PHN</strong>
                        </td>
                        <td data-sort="2024-01-15 13:39:54">
                          <i class="ri-time-line align-bottom text-success me-1"></i>
                          15 Jan 2024 - 13:39:54
                        </td>
                        <td class="text-end">256</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 col-md-5"><div class="dataTables_info" id="datatable_info" role="status" aria-live="polite">Showing 1 to 10 of 10 entries</div></div>
                <div class="col-sm-12 col-md-7">
                  <div class="dataTables_paginate paging_simple_numbers" id="datatable_paginate">
                    <ul class="pagination">
                      <li class="paginate_button page-item previous disabled" id="datatable_previous"><a href="#" aria-controls="datatable" data-dt-idx="0" tabindex="0" class="page-link">&lt;</a></li>
                      <li class="paginate_button page-item active"><a href="#" aria-controls="datatable" data-dt-idx="1" tabindex="0" class="page-link">1</a></li>
                      <li class="paginate_button page-item next disabled" id="datatable_next"><a href="#" aria-controls="datatable" data-dt-idx="2" tabindex="0" class="page-link">&gt;</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
