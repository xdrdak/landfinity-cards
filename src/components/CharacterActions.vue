<template>
  <div class="character-actions">
    <router-link class="btn" to="/character/powers/draw/green">
      Draw green powers
    </router-link>
    <router-link class="btn" to="/character/powers/draw/red">
      Draw red powers
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'character-actions',
};
</script>

<style>
.character-actions {
  display: flex;
  justify-content: space-around;
}
</style>
