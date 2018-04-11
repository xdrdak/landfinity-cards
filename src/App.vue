<template>
  <div id="app">
    <header>
      <nav class="nav">
        <router-link class="nav__link" to="/">
          My Character
        </router-link>
        <router-link class="nav__link" to="/domain">
          All Domains
        </router-link>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
:root {
  --green: #8bc34a;
  --red: #f44336;
  --dark-blue: #39495C;
  --near-white: #EEF1F5;
  --white: #FFF;

  --grid-gap: 20px;

  --card-border-radius: 3px;
  --card-padding: 10px;
}

*, ::after, ::before {
  box-sizing: border-box;
}

html, body {
  background-color: var(--near-white);
}

body {
  margin: 0;
  font-size: 16px;
}

a, a:visited {
  text-decoration: none;
  color: #3f51b5;
  transition: color 150ms ease-in-out;
}

a:hover {
  color: #868fc1;
}

a.nav__link {
  color: white;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}

header {
  align-items: center;
  display: flex;
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
  margin-bottom: 20px;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

/*
  Text manipulation
*/
.b {
  font-weight: bold;
}

.i {
  font-weight: lighter;
}

.capitalize {
  text-transform: capitalize;
}
/*
  Containers and Grids
*/
.container {
  max-width: 1140px;
  margin: 0 auto;
}

.grid {
  display: grid;
}

.grid--gap-normal {
  grid-gap: var(--grid-gap);
}

.list {
  list-style: none;
  margin: 0;
  padding: 0;
}


/*
  Common Components
*/
.btn {
  border: 1px solid #a6b2bf;
  background: var(--white);
  font-size: 1rem;
  padding: 0.375rem 1rem;
  border-radius: 5px;
  transition: all 90ms ease-in-out;
  cursor: pointer;
}

.btn[disabled],
.btn[disabled]:hover {
  background: var(--white);
  color: #e8e8e8;
  border: 1px solid #e8e8e8;
  cursor: not-allowed;
}

.btn:hover {
  background: var(--dark-blue);
  color: var(--white);
  border-color: var(--dark-blue);
}

/*
  Form Controls
*/
.form-group {
  display: block;
  margin-bottom: 1.2rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.form-control {
  border-radius: 5px;
  background-color: var(--white);
  border-color: var(--dark-blue);
  font-size: 1rem;
  display: block;
  width: 100%;
  line-height: 1.5;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  padding: 0.25rem 0.5rem;
}
</style>
