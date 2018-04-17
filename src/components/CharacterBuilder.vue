<template>
  <div class="container">
    <div class="card">
      <h1>Create your character</h1>
      <div class="form">
        <div class="form-group character-builder-form-group">
          <label for="characterName">Character Name</label>
          <input type="text"
            id="characterName"
            name="characterName"
            class="form-control"
            v-model="characterName"
          />
        </div>
        <div class="form-group character-builder-form-group">
          <!-- Primary Domain -->
          <label for="primaryDomain">Primary Domain</label>
          <select id="primaryDomain" class="form-control" v-model="primaryDomain">
            <option
              v-for="domain in filterOutDomain(secondaryDomain)"
              :key="domain"
              :value="domain"
            >
              {{domain}}
            </option>
          </select>
        </div>
        <div class="form-group character-builder-form-group">
          <!-- Secondary Domain -->
          <label for="secondaryDomain">Secondary Domain</label>
          <select id="secondaryDomain" class="form-control" v-model="secondaryDomain">
            <option
              v-for="domain in filterOutDomain(primaryDomain)"
              :key="domain"
              :value="domain"
            >
              {{domain}}
            </option>
          </select>
        </div>
        <div class="form-group character-builder-form-group">
          <!-- Submit -->
          <button
            class="btn"
            @click="setCharacter()"
          >
            Finalize Build
          </button>
        </div>
      <!-- end form -->
      </div>
    </div>
  </div>
</template>

<script>
import { getDomains } from '@/api/api';

export default {
  name: 'character-builder',
  data() {
    return {
      characterName: '',
      primaryDomain: null,
      secondaryDomain: null,
      domains: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.domains = getDomains();
    },
    filterOutDomain(source) {
      return this.domains.filter(domain => domain !== source);
    },
    setCharacter() {
      console.log('YAS');
      this.$store.dispatch('setCharacter', {
        primaryDomain: this.primaryDomain,
        secondaryDomain: this.secondaryDomain,
        characterName: this.characterName,
      });
    },
  },
};
</script>

<style>
  .character-builder-form-group {
    width: 100%;
  }

  @media (min-width: 768px){
    .character-builder-form-group {
      width: 30%;
    }
  }
</style>
