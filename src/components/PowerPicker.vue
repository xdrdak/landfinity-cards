<template>
  <div>
    <h2>Select your powers</h2>
    <p>
      <em>You may only pick 2 of the 3.</em>
    </p>
    <div class="grid grid--gap-normal power-picker-grid">
      <div v-for="power in samplePowers" :key="power.id" @click="selectPower(power.id)">
        <power-card
          :title="power.power"
          :type="power.type"
          :description="power.description"
          :flavour="power.flavour"
          :powerColor="power.powerColor"
          class="power-picker-card"
        />
      </div>
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
    powers: {
      type: Array,
      default: [],
    },
    powerColor: {
      type: String,
      default: 'green',
    },
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const powers = getPowersForDomain(this.$props.domain).filter(
        p => p.powerColor === this.$props.powerColor && this.$props.powers.indexOf(p) < 0,
      );
      this.samplePowers = sampleSize(powers, 3);
    },
    selectPower(powerId) {
      console.log('aaa', powerId);
    },
  },
  data() {
    return {
      samplePowers: [],
      selectedPowers: [],
    };
  },
};
</script>

<style>
  .power-picker-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .power-picker-card {
    position: relative;
    transition: all 100ms ease-in-out;
    height: 100%;
  }

  .power-picker-card:hover {
    transform: scale(1.05, 1.05);
    cursor: pointer;
  }

  .power-picker-card--selected::after {
    content: "";
    background-color: black;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0.4;
  }
</style>
