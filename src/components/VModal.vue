<template>
  <div class="modal-mask" v-if="showModal">
    <div class="modal">
      <div class="modal__header">
        <button class="modal__close-btn" @click="close">×</button>
      </div>
      <div class="modal__body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-modal',
  props: {
    showModal: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    close() {
      this.$emit('close-modal');
    },
  },
};
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal {
  width: 980px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
}

.modal__close-btn {
  border: none;
  font-size: 2rem;
  cursor: pointer;
}

.modal__close-btn:hover {
  opacity: 0.5;
}

.modal__header {
  text-align: right;
}

</style>
