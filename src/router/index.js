import Vue from 'vue';
import Router from 'vue-router';
import CharacterViewer from '@/components/CharacterViewer';
import DomainList from '@/components/DomainList';
import DomainDetails from '@/components/DomainDetails';
import PowerPickerDrawSet from '@/components/PowerPickerDrawSet';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CharacterViewer',
      component: CharacterViewer,
    },
    {
      path: '/domain',
      name: 'DomainList',
      component: DomainList,
    },
    {
      path: '/domain/:name',
      name: 'DomainDetails',
      component: DomainDetails,
    },
    {
      path: '/character/powers/draw/:color',
      name: 'PowerPickerDrawSet',
      component: PowerPickerDrawSet,
    },
  ],
});
