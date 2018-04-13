<template>
  <div>
    <h2>Select your powers</h2>
    <p>
      <em>You may only pick 2 of the 3.</em>
    </p>
    <div
      class="grid grid--gap-normal power-picker-grid"
      :class="{'power-picker-grid--completed': this.hasCompletedSelection }"
    >
      <div v-for="power in samplePowers" :key="power.id" @click="selectPower(power)">
        <power-card
          :title="power.power"
          :type="power.type"
          :description="power.description"
          :flavour="power.flavour"
          :powerColor="power.powerColor"
          class="power-picker-card"
          :class="{'power-picker-card--selected': isSelected(power)}"
        />
      </div>
    </div>
    <div>
      <button
        :disabled="!this.hasCompletedSelection"
        class="btn"
        @click="$emit('add-powers', selectedPowers)"
      >
        Confirm Choice
      </button>
    </div>
  </div>
</template>

<script>
import { getPowersForDomain } from '@/api/api';
import sampleSize from 'lodash/sampleSize';
import PowerCard from '@/components/PowerCard';

export default {
  name: 'power-picker',
  components: {
    PowerCard,
  },
  props: {
    domain: {
      type: String,
      required: true,
    },
    exceptThesePowers: {
      type: Array,
      default: [],
    },
    powerColor: {
      type: String,
      default: 'green',
    },
  },
  data() {
    return {
      samplePowers: [],
      selectedPowers: [],
    };
  },
  computed: {
    hasCompletedSelection() {
      return this.selectedPowers.length >= 2;
    },
  },
  created() {
    this.fetchData();
  },
  methods: {
    isSelected(power) {
      return this.selectedPowers.some(p => p.id === power.id);
    },
    fetchData() {
      const powers = getPowersForDomain(this.$props.domain).filter(
        p => p.powerColor === this.$props.powerColor
          && this.$props.exceptThesePowers.indexOf(p) < 0,
      );
      console.log(this.$props.powerColor);
      this.samplePowers = sampleSize(powers, 3);
    },
    selectPower(power) {
      if (!this.isSelected(power) && !this.hasCompletedSelection) {
        this.selectedPowers = [...this.selectedPowers, power];
      } else {
        this.selectedPowers = this.selectedPowers.filter(p => p.id !== power.id);
      }
    },
  },
};
</script>

<style>
  .power-picker-grid {
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 2rem;
  }
  
  .power-picker-card {
    position: relative;
    transition: all 100ms ease-in-out;
    height: 100%;
  }

  .power-picker-card:hover {
    transform: scale(0.95, 0.95);
    cursor: pointer;
  }

  .power-picker-card--selected,
  .power-picker-card--selected.power-picker-card:hover,
  .power-picker-grid--completed .power-picker-card:hover {
    transform: initial;
  }

  .power-picker-card::after {
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .power-picker-grid--completed .power-picker-card::after {
    background: var(--white);
    opacity: 0.8;
  }

  .power-picker-card--selected::after,
  .power-picker-grid--completed .power-picker-card--selected::after {
    content: "";
    background: var(--dark-blue);
    opacity: 0.4;
  }
</style>
