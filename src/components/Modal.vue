<script setup>
import { ref } from 'vue';
defineProps({
  title: String,
});
</script>

<template lang="pug">
#exampleModal.modal.fade(tabindex='-1', aria-labelledby='exampleModalLabel', aria-hidden='true')
  .modal-dialog
    .modal-content
      .modal-header
        h5#exampleModalLabel.modal-title {{title}}
        button.btn-close(type='button', data-bs-dismiss='modal', aria-label='Close')
      .modal-body
        slot
      .modal-footer
        slot(name="footer")
</template>
