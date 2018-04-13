<template>
  <v-card :class="`power-card power-card--${powerColor}`">
    <div class="power-card__main">
      <h2 class="power-card__title">{{title}}</h2>
      <p class="power-card__type">{{type}}</p>
    </div>
    <p class="power-card__description">{{description}}</p>
    <blockquote v-if="flavour.length >= 1 && displayFlavour" class="power-card__flavour">
      {{flavour}}
    </blockquote>
  </v-card>
</template>

<script>
import VCard from '@/components/VCard';

export default {
  name: 'power-card',
  components: {
    VCard,
  },
  props: {
    title: String,
    type: String,
    description: String,
    flavour: String,
    powerColor: String,
    displayFlavour: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style>
  :root {
    --power-card-bt-size: 6px;
  }

  .power-card {
    border-top: var(--power-card-bt-size) solid var(--dark-blue);
  }

  .power-card--green {
    border-top-color: var(--green);
  }

  .power-card--red {
    border-top-color: var(--red);
  }

  .power-card__main {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .power-card__title {
    margin-bottom: 0;
  }

  .power-card__type {
    color: #656464;
    margin: 0;
    font-weight: bold;
  }

  .power-card__flavour {
    font-style: italic;
    margin: 10px 0;
    padding: 5px 10px; 
    border-left: 2px solid #39495C;
    background-color: #f9f9f9;
    color: #333;
  }

  @media (max-width: 768px) {
    .power-card__title {
      font-size: 1em;
      margin: 0;
    }
  }

  @media (min-width: 768px) {
    .power-card__main {
      flex-direction: column;
    }

    .power-card__title {
      margin-bottom: 0;
    }

    .power-card__description {
      margin: 30px 0;
    }
  }
</style>
