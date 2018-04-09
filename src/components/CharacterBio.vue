<template>
  <div>
    <div class="character_bio__section">
      <div class="character_bio__mini-text">Character Name</div>
      <div class="character_bio__info">{{character.name}}</div>
    </div>
    <div class="character_bio__section">
      <div class="character_bio__mini-text">Primary Domain</div>
      <div class="character_bio__info">{{character.primaryDomain}}</div>
    </div>
    <div class="character_bio__section">
      <div class="character_bio__mini-text">Secondary Domain</div>
      <div class="character_bio__info">{{character.secondaryDomain}}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'character-bio',
  computed: {
    ...mapGetters({
      character: 'getBaseCharacterInfo',
    }),
  },
};
</script>

<style>
  .character_bio__info {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .character_bio__mini-text {
    color: #656464;
  }

  .character_bio__section {
    margin-bottom: 1.2rem;
  }
</style>
