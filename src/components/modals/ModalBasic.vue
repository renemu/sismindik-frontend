<script setup>
import { defineProps, ref, watch, defineEmits } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: false,
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
  bodyClass: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["toggle"]);
const isVisible = ref(props.modelValue);

watch(
  () => props.modelValue,
  (newVal) => {
    isVisible.value = newVal;
  }
);

const closeModal = () => {
  isVisible.value = false;
  emit("toggle", false);
};
</script>

<template>
  <div v-if="isVisible" class="modal fade show v-modal-custom fadeInDown" data-bs-backdrop="static" :class="{ 'modal-xl': props.size === 'xl' }" tabindex="-1" @click="closeModal" style="display: block">
    <div class="modal-dialog modal-dialog-centered" @click.stop>
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ title }}</h5>
          <button type="button" class="btn-close mb-1" aria-label="Close" @click="closeModal"></button>
        </div>
        <div class="modal-body" :class="bodyClass">
          <slot name="modalBody" />
        </div>
        <div class="modal-footer">
          <slot name="modalFooter" />
        </div>
      </div>
    </div>
    <div v-if="isVisible" class="b-overlay-wrap position-relative" aria-busy="true">
      <div class="b-overlay position-fixed" style="inset: 0px; z-index: 10">
        <div class="position-absolute bg-dark" style="inset: 0px; opacity: 0.85"></div>
        <div class="position-absolute" style="top: 50%; left: 50%; transform: translateX(-50%) translateY(-50%)"></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.v-modal-custom .modal-dialog .modal-content {
  z-index: 1056;
}
</style>
