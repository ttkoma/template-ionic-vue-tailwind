<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="tertiary">
        <ion-title>Ionic + Vue + Tailwind 1</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Ionic + Vue + Tailwind 2</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <div id="container">
        <strong>Ready to create an app?</strong>
        <p>Start with Ionic 
          <a class="text-tertiary-default" target="_blank" rel="noopener noreferrer"
                               href="https://ionicframework.com/docs/components">UI Components</a></p>

      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/vue';
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  }
});
</script>

<style scoped>

#container {
  @apply px-1 text-center;
  @apply absolute left-0 right-0 top-1/2;
  @apply translate-y-1/2;
}

.btn {
  @apply relative overflow-hidden;
  @apply py-2 px-4 w-full;
  @apply uppercase text-sm;
  @apply rounded shadow-md focus:outline-none;
}

.btn-primary {
  @apply text-primary-contrast bg-primary-default hover:bg-primary-tint;
}

.btn-tertiary {
  @apply text-tertiary-contrast bg-tertiary-default hover:bg-tertiary-tint;
}

.btn-warning {
  @apply text-warning-contrast bg-warning-default hover:bg-warning-tint focus:bg-warning-shade;
}

</style>