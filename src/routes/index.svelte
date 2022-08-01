<div id="container">
  <h1>Welcome to a free SVG package</h1>
  <input bind:value={iconFilter} />

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
    gap: 10px;
  }

  #techs-container {
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 25px;
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
