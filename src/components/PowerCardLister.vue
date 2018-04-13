<template>
  <div class="grid grid--gap-normal power-grid">
    <power-card
      v-for="power in powers"
      :key="power.id"
      :title="power.power"
      :type="power.type"
      :description="power.description"
      :flavour="power.flavour"
      :powerColor="power.powerColor"
    />
  </div>
</template>

<script>
import PowerCard from '@/components/PowerCard';

export default {
  name: 'power-card-lister',
  components: {
    PowerCard,
  },
  props: {
    powers: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style>
  .power-grid {
    grid-template-columns: 1fr;
  }
  @media (min-width: 768px) {
    .power-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
