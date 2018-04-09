<template>
  <div class="container">
    <h1>{{title}}</h1>
    <power-card-lister :powers="sortedPowers"></power-card-lister>
  </div>
</template>

<script>
import { getPowersForDomain } from '@/api/api';
import PowerCardLister from '@/components/PowerCardLister';

function sortByColor(input, compareColor = 'green') {
  return input === compareColor ? -1 : 1;
}

export default {
  name: 'domain-details',
  components: {
    PowerCardLister,
  },
  data() {
    return {
      powers: [],
      title: '',
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const powers = getPowersForDomain(this.$route.params.name);
      this.powers = powers;
      this.title = powers[0].domain;
    },
  },
  computed: {
    sortedPowers() {
      return this.powers.sort(a => sortByColor(a.powerColor));
    },
  },
};
</script>

<style>

</style>
