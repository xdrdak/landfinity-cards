<template>
  <div>
    <div v-if="!powers.length" class="character-powers__none">
      <h2>No Powers found!</h2>
      <br/>
      <p>
        Since no powers have been found, you'll need to draw new powers.
        Powers have been automatically drawn from each your domain. Simply pick 2 of the 3 in each section.
      </p>
      <power-picker-new-character
        :primaryDomain="primaryDomain"
        :secondaryDomain="secondaryDomain"
      >
      </power-picker-new-character>
      <button class="btn" @click="confirm">Finalize Draw</button>
      <!-- Modal -->
      <v-modal :showModal="showModal" @close-modal="closeModal">
      </v-modal>
    </div>
    <power-card-lister v-else :powers="powers"></power-card-lister>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PowerPickerNewCharacter from '@/components/PowerPickerNewCharacter';
import PowerCardLister from '@/components/PowerCardLister';
import VModal from '@/components/VModal';

export default {
  name: 'character-powers',
  components: {
    PowerCardLister,
    PowerPickerNewCharacter,
    VModal,
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
    confirm() {
      console.log('OK!');
    },
    closeModal() {
      this.showModal = false;
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
