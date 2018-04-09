<template>
  <ul class="list power-picker-list">
    <li class="power-picker-list__item" v-for="power in powers" :key="power.id">
      <label :for="power.id">
        <input
          class="power-picker-list__cb"
          type="checkbox"
          :id="power.id"
          :value="power.id"
          v-model="selectedPowers"
          @change="$emit('update:selectedPowers', selectedPowers)"
          :disabled="selectedPowers.length > 1 && selectedPowers.indexOf(power.id) < 0"
        >
        {{power.power}} ({{power.type}})
      </label>
      <p class="power-picker-list__description">
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
};
</script>

<style>
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
</style>
