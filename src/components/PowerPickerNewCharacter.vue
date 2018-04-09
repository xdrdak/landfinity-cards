<template>
  <div class="power-picker-list-container">
    <power-picker-list
      :powers="greenPrimaryPowers"
      :selectedPowers.sync="selectedGreenPrimary"
    >
    </power-picker-list>
    <power-picker-list
      :powers="redPrimaryPowers"
      :selectedPowers.sync="selectedRedPrimary"
    >
    </power-picker-list>
  </div>
</template>

<script>
import { getPowersForDomain } from '@/api/api';
import PowerPickerList from '@/components/PowerPickerList';
import sampleSize from 'lodash/sampleSize';

function filterColor(powers, color) {
  return powers.powerColor === color;
}

export default {
  name: 'power-picker-new-character',
  components: {
    PowerPickerList,
  },
  props: {
    primaryDomain: {
      type: String,
      required: true,
    },
    secondaryDomain: {
      type: String,
      required: true,
    },
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const primaryPowers = getPowersForDomain(this.$props.primaryDomain);
      const secondaryPowers = getPowersForDomain(this.$props.secondaryDomain);

      this.greenPrimaryPowers = sampleSize(primaryPowers.filter(p => filterColor(p, 'green')), 3);
      this.redPrimaryPowers = sampleSize(primaryPowers.filter(p => filterColor(p, 'red')), 3);
      this.greenSecondaryPowers = sampleSize(secondaryPowers.filter(p => filterColor(p, 'green')), 3);
      this.redSecondaryPowers = sampleSize(secondaryPowers.filter(p => filterColor(p, 'red')), 3);
    },
  },
  data() {
    return {
      greenPrimaryPowers: [],
      redPrimaryPowers: [],
      greenSecondaryPowers: [],
      redSecondaryPowers: [],
      selectedGreenPrimary: [],
      selectedRedPrimary: [],
      selectedGreenSecondary: [],
      selectedRedSecondary: [],
    };
  },
};
</script>

<style>
  .power-picker-list-container {
    width: 100%;
  }

  .power-picker-list__item {
    padding-top: 1rem;
    padding-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .power-picker-list__group {
    display: flex;
    align-items: center;
  }

  .power-picker-list__cb {
    width: 20px;
    height: 20px;
  }
</style>
