<template>
  <div class="container">
    <div v-if="isCharacterSet" class="grid grid--gap-normal character-grid">
      <v-card class="character-grid__power">
        <character-powers></character-powers>
      </v-card>
      <v-card class="character-grid__bio">
        <character-bio></character-bio>
      </v-card>
    </div>
    <character-builder v-else></character-builder>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import VCard from '@/components/VCard';
import CharacterBio from '@/components/CharacterBio';
import CharacterBuilder from '@/components/CharacterBuilder';
import CharacterPowers from '@/components/CharacterPowers';

export default {
  name: 'character-viewer',
  components: {
    CharacterBio,
    CharacterBuilder,
    CharacterPowers,
    VCard,
  },
  computed: {
    ...mapGetters({
      isCharacterSet: 'isCharacterSet',
    }),
  },
  data() {
    return {
    };
  },
};
</script>

<style>
  .character-grid {
    grid-template-columns: 1fr;
  }

  .character-grid__grid__bio {
    grid-row: 2;
  }

  @media (min-width: 768px) {
    .character-grid {
      grid-template-columns: 2fr 1fr;
    }

    .character-grid__grid__bio {
      grid-row: 0;
    }
  }
</style>
