<template>
  <div>
    <div v-if="!powers.length" class="character-powers__none">
      <div>
        <h2>No Powers found!</h2>
        <p>
          Since no powers have been found, you'll need to draw new powers.
          Powers have been automatically drawn from each your domain.
        </p>
        <p>
          Simply pick 2 of the 3 in each section.
        </p>
      </div>
      <power-picker-new-character
        :primaryDomain="primaryDomain"
        :secondaryDomain="secondaryDomain"
        @add-powers="addPowers"
      >
      </power-picker-new-character>
    </div>
    <power-card-lister v-else :powers="powers"></power-card-lister>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PowerPickerNewCharacter from '@/components/PowerPickerNewCharacter';
import PowerCardLister from '@/components/PowerCardLister';

export default {
  name: 'character-powers',
  components: {
    PowerCardLister,
    PowerPickerNewCharacter,
  },
  data() {
    return {
      showModal: false,
    };
  },
  computed: {
    ...mapGetters({
      powers: 'getPowers',
      primaryDomain: 'getPrimaryDomain',
      secondaryDomain: 'getSecondaryDomain',
    }),
  },
  methods: {
    addPowers(powers) {
      this.$store.dispatch('addPowers', powers);
    },
  },
};
</script>

<style>
  .character-powers__none {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
