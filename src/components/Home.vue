<script setup>
import Layout from './Layout.vue';
import Modal from './Modal.vue';
import { ref } from 'vue';

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template lang="pug" cache="true">
Layout
  nav.mt-3(style="--bs-breadcrumb-divider: '>';", aria-label='breadcrumb')
    ol.breadcrumb
      li.breadcrumb-item
        a(href='/') 
          i.fa.fa-home 
          | Home
      li.breadcrumb-item.active(aria-current='page') Settings
  main
    .row
      .col-md-12.col-lg-3.p-1
        .card
          .card-header 
            i.fa.fa-home.m-1
            | Home
          .card-body.p-1
            button.btn.btn-sm.btn-primary.p-3.m-1(@click="count++") {{count}} 
            br
            button.btn.btn-primary.m-1(type='button', data-bs-toggle='modal', data-bs-target='#exampleModal')
              | Launch demo modal
            Modal(title="Add Users")
              p Isi modal here
              template(#footer) 
                button.btn.btn-primary(type='button') 
                  i.fa.fa-save.m-1
                  | Save
                button.btn.btn-secondary(type='button', data-bs-dismiss='modal') Close    
      .col-md-12.col-lg-3.p-1
        .card
          .card-header 
            i.fa.fa-home.m-1
            | Home
          .card-body.p-1
            button.btn.btn-sm.btn-primary.p-3.m-1(@click="count++") {{count}} 
            br
            button.btn.btn-primary.m-1(type='button', data-bs-toggle='modal', data-bs-target='#exampleModal')
              | Launch demo modal
            Modal(title="Add Users")
              p Isi modal here
              template(#footer) 
                button.btn.btn-primary(type='button') 
                  i.fa.fa-save.m-1
                  | Save
                button.btn.btn-secondary(type='button', data-bs-dismiss='modal') Close    
      .col-md-12.col-lg-3.p-1
        .card
          .card-header 
            i.fa.fa-home.m-1
            | Home
          .card-body.p-1
            button.btn.btn-sm.btn-primary.p-3.m-1(@click="count++") {{count}} 
            br
            button.btn.btn-primary.m-1(type='button', data-bs-toggle='modal', data-bs-target='#exampleModal')
              | Launch demo modal
            Modal(title="Add Users")
              p Isi modal here
              template(#footer) 
                button.btn.btn-primary(type='button') 
                  i.fa.fa-save.m-1
                  | Save
                button.btn.btn-secondary(type='button', data-bs-dismiss='modal') Close
      .col-md-12.col-lg-3.p-1 
        .card
          .card-header 
            i.fa.fa-home.m-1
            | Home
          .card-body.p-1
            button.btn.btn-sm.btn-primary.p-3.m-1(@click="count++") {{count}} 
            br
            button.btn.btn-primary.m-1(type='button', data-bs-toggle='modal', data-bs-target='#exampleModal')
              | Launch demo modal
            Modal(title="Add Users")
              p Isi modal here
              template(#footer) 
                button.btn.btn-primary(type='button') 
                  i.fa.fa-save.m-1
                  | Save
                button.btn.btn-secondary(type='button', data-bs-dismiss='modal') Close    
      .col-md-12.col-lg-3.p-1 
        .card
          .card-header 
            i.fa.fa-home.m-1
            | Home
          .card-body.p-1
            button.btn.btn-sm.btn-primary.p-3.m-1(@click="count++") {{count}} 
            br
            button.btn.btn-primary.m-1(type='button', data-bs-toggle='modal', data-bs-target='#exampleModal')
              | Launch demo modal
            Modal(title="Add Users")
              p Isi modal here
              template(#footer) 
                button.btn.btn-primary(type='button') 
                  i.fa.fa-save.m-1
                  | Save
                button.btn.btn-secondary(type='button', data-bs-dismiss='modal') Close                                


</template>

<style scoped></style>
