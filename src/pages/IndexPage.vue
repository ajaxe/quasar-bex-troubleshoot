<template>
  <q-page class="row items-center justify-evenly">
    <button @click="sayHi">Say "hi" with send response key</button>
    <br />
    <button @click="sayHiNoResponse">Say "hi" no response</button>
  </q-page>
</template>

<script lang="ts" setup>
import { useQuasar } from 'quasar';

const $q = useQuasar();
const sayHi = () => {
  const payload = { foo: 'baaz' };
  $q.bex
    .send('storage.set', payload)
    .then(() => console.log('resolved: storage.set'));
};
const sayHiNoResponse = () => {
  const payload = { foo: 'baaz' };
  $q.bex
    .send('storage.set.no.reply', payload)
    .then(() => console.log('resolved: storage.set.no.reply'));
};
</script>
