<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'v-card',
};
</script>

<style>
.card {
  background-color: white;
  border-radius: var(--card-border-radius, 3px);
  padding: var(--card-padding, 10px);
  box-shadow: 0 0.4rem 0.8rem -0.1rem rgba(0,32,128,.1), 0 0 0 1px #f0f2f7;
}
</style>
