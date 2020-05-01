<template>
  <div class="Poetry">
    <AncientPoetry></AncientPoetry>
  </div>
</template>

<script>
// @ is an alias to /src
import AncientPoetry from '@/components/AncientPoetry.vue'

export default {
  name: 'Poetry',
  components: {
    AncientPoetry,
  }
}
</script>