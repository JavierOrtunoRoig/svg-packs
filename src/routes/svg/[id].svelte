
<script context="module">
  export async function load({ params }) {
    const { id } = params
    return { 
      props: { 
        id
      }
    }
  }
</script>

<script lang="ts">
  export let id;
</script>

Este es el componente de la ruta svg/[{id}].svelte.