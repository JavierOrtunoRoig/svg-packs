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
