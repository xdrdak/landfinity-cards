<template>
  <div class="power-picker-list-container">
    <h4>Primary Green Powers</h4>
    <power-picker-list
      :powers="greenPrimaryPowers"
      :selectedPowers.sync="selectedGreenPrimary"
    >
    </power-picker-list>
    <h4>Primary Red Powers</h4>
    <power-picker-list
      :powers="redPrimaryPowers"
      :selectedPowers.sync="selectedRedPrimary"
    >
    </power-picker-list>
    <h4>Secondary Green Powers</h4>
    <power-picker-list
      :powers="greenSecondaryPowers"
      :selectedPowers.sync="selectedGreenSecondary"
    >
    </power-picker-list>
    <h4>Secondary Red Powers</h4>
    <power-picker-list
      :powers="redSecondaryPowers"
      :selectedPowers.sync="selectedRedSecondary"
    >
    </power-picker-list>
    <div>
      <button
        class="btn"
        @click="addPowers"
        :disabled="!readyToSend"
      >
        Finalize Pick
      </button>
    </div>
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
    addPowers() {
      const powers = [
        ...this.greenPrimaryPowers,
        ...this.redPrimaryPowers,
        ...this.greenSecondaryPowers,
        ...this.redSecondaryPowers,
      ];

      const selectedPowers = [
        ...this.selectedGreenPrimary,
        ...this.selectedRedPrimary,
        ...this.selectedGreenSecondary,
        ...this.selectedRedSecondary,
      ];

      const nextPowers = powers.filter(p => selectedPowers.indexOf(p.id) >= 0);
      this.$emit('add-powers', nextPowers);
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
  computed: {
    readyToSend() {
      return this.selectedGreenPrimary.length === 2
        && this.selectedRedPrimary.length === 2
        && this.selectedGreenSecondary.length === 2
        && this.selectedRedSecondary.length === 2;
    },
  },
};
</script>

<style>
</style>
