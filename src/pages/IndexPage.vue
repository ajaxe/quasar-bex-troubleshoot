<template>
  <q-page class="row items-center justify-evenly">
    <button @click="sayHi">Say "hi"</button>
  </q-page>
</template>

<script lang="ts" setup>
import { useQuasar } from 'quasar';

const $q = useQuasar();
const sayHi = async () => {
  $q.bex
    .send('say.hi.popup.event', { message: 'button was clicked' })
    .then(() => console.log('resolved: say.hi.popup.event'));
  const payload = { foo: 'baaz' };
  $q.bex
    .send('storage.set', payload)
    .then(() => console.log('resolved: storage.set'));
};
</script>
