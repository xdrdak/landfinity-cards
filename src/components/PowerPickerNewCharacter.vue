<template>
  <div class="power-picker-new-character-container">
    <div class="power-picker-new-character-container__content">
      <div>
        <h3>Primary Green Powers</h3>
        <power-picker-list
          :powers="greenPrimaryPowers"
          :selectedPowers.sync="selectedGreenPrimary"
        >
        </power-picker-list>
      </div>
      <div>
        <h3>Primary Red Powers</h3>
        <power-picker-list
          :powers="redPrimaryPowers"
          :selectedPowers.sync="selectedRedPrimary"
        >
        </power-picker-list>
      </div>
      <div>
        <h3>Secondary Green Powers</h3>
        <power-picker-list
          :powers="greenSecondaryPowers"
          :selectedPowers.sync="selectedGreenSecondary"
        >
        </power-picker-list>
      </div>
      <div>
        <h3>Secondary Red Powers</h3>
        <power-picker-list
          :powers="redSecondaryPowers"
          :selectedPowers.sync="selectedRedSecondary"
        >
        </power-picker-list>
      </div>
    </div>
    <div class="power-picker-new-character-container__actions">
      <button
        class="btn"
        @click="addPowers"
        :disabled="!isReadyToSend"
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
      // Concat all powers together. We'll be going through them
      // all to filter out the ones that are not selected.
      const powers = [
        ...this.greenPrimaryPowers,
        ...this.redPrimaryPowers,
        ...this.greenSecondaryPowers,
        ...this.redSecondaryPowers,
      ];

      // Concat all user selections to obtain a list of ids that correspond
      // to powers
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
    isReadyToSend() {
      return this.selectedGreenPrimary.length === 2
        && this.selectedRedPrimary.length === 2
        && this.selectedGreenSecondary.length === 2
        && this.selectedRedSecondary.length === 2;
    },
  },
};
</script>

<style>
.power-picker-new-character-container__content {
  margin-bottom: 10px;
}

.power-picker-new-character-container__actions {
  display: flex;
  justify-content: flex-end;
}
</style>
