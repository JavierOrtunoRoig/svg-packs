<script>
  import Card from "../components/Card.svelte";

  const iconsPromise = fetch("/api/svgIcons")
    .then(res => res.json())
    .then(data => data.svgIcons)

  let iconFilter = "";

</script>

<div id="container">
  <h1 class="title">Welcome to a free SVG package</h1>
  <input id="search-bar" bind:value={iconFilter} />

  <div id="techs-container">
    {#await iconsPromise then icons}
      {#each icons as {id, slug, title}}
        <Card {id} {slug} {title}/>
      {/each}
    {/await}
  </div>
</div>

<style>
  #container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    padding: 10px;
    gap: 30px;
  }

  #search-bar {
    width: 100%;
  }

  .title {
    font-size: 2rem;
    font-weight: bold;
    margin: 0;
    margin-top: 1em;
    text-align: center;
  }

  #techs-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
  }

  input {
    font-family: inherit;
    font-size: 100%;
    vertical-align: baseline;
    border: 0;
    outline: 0;
    color: #000;
    border-radius: 5px;
    padding: 10px;
  }
</style>
