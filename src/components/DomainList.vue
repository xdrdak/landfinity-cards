<template>
  <div class="container">
    <ul class="list domain-list">
      <li
        v-for="domain in domains"
        :key="domain"
        class="domain-list__item"
      >
        <router-link :to="generateUrl(domain)">{{domain}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { getDomains } from '@/api/api';
import slugify from '@/utils/slugify';

export default {
  name: 'domain-list',
  data() {
    return {
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
    generateUrl(input) {
      const next = slugify(input);
      return `/domain/${next}`;
    },
  },
};
</script>

<style>
  .domain-list {
    column-count: 2;
    text-align: center;
  }

  .domain-list__item {
    padding: 20px 0;
    font-size: 1.2rem;
    font-weight: bold;
  }

  @media (min-width: 768px) {
    .domain-list {
      column-count: 4;
    }
  }
</style>
