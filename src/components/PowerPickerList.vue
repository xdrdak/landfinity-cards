<template>
  <ul class="list power-picker-list">
    <li class="power-picker-list__item" v-for="power in powers" :key="power.id">
      <label
        :for="power.id"
        :class="{'power-picker-list__item--disabled': isDisabled(power.id)}"
      >
        <input
          class="power-picker-list__cb"
          type="checkbox"
          :id="power.id"
          :value="power.id"
          v-model="selectedPowers"
          @change="$emit('update:selectedPowers', selectedPowers)"
          :disabled="isDisabled(power.id)"
        >
        <span class="capitalize">{{power.power.toLowerCase()}}</span>&nbsp;({{power.type}})
      </label>
      <p
        class="power-picker-list__description"
        :class="{'power-picker-list__description--disabled': isDisabled(power.id)}"
      >
        {{power.description}}
      </p>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'power-picker-list',
  data() {
    return {
      selectedPowers: [],
    };
  },
  props: {
    powers: {
      type: Array,
      required: true,
    },
  },
  methods: {
    isDisabled(id) {
      return this.selectedPowers.length > 1 && this.selectedPowers.indexOf(id) < 0;
    },
  },
};
</script>

<style>
.power-picker-list {
  border-left: 5px solid var(--dark-blue);
  padding-left: 5px;
}
.power-picker-list__item {
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.power-picker-list__item label{
  display: flex;
}

.power-picker-list__cb {
  width: 20px;
  height: 20px;
}

.power-picker-list__description {
  margin: 0;
}

.power-picker-list__item--disabled,
.power-picker-list__description--disabled {
  color: #CACACA;
  cursor: not-allowed;
}
</style>
