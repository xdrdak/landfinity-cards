<template>
  <div class="container">
    <div class="card">
      <power-picker
        :powerColor="color"
        :domain="primaryDomain"
        @add-powers="addPowers"
      >
      </power-picker>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PowerPicker from '@/components/PowerPicker';

export default {
  name: 'power-picker-draw-set',
  components: {
    PowerPicker,
  },
  computed: {
    ...mapGetters({
      primaryDomain: 'getPrimaryDomain',
      secondaryDomain: 'getSecondaryDomain',
    }),
    color() {
      return this.$route.params.color;
    },
  },
  methods: {
    addPowers(powers) {
      this.$store.dispatch('addPowers', powers);
      this.$router.push({ path: '/' });
    },
  },
};
</script>

<style>

</style>
