<script context="module">

  import { browser } from '$app/env';

  export async function load({ params }) {
    const { id } = params
    return { 
      props: { 
        id
      }
    }
  }
</script>

<script>

  export let id;

  const clipboardRoute = '/clipboard.svg';

  let svgInfo = {}
  if (browser) {
    svgInfo = fetch(`/api/svgIcons?id=${id}`, { method: 'PUT' })
    .then(res => res.json())
    .then(data => data.svg)
  }

  const handleCopy = (svgText) => { 
    if (browser) {
      navigator.clipboard.writeText(svgText)
    }
   }
  
</script>

{#await svgInfo then { title, slug, description, svgCode }}
  <div class="container">
    <h1 class="title">{title}</h1>
    <img src={slug} alt={title} />
    <p class="description">{description}</p>
    <div class="svg-card-container">
      <div class="svg-info-container">
        <h2>SVG Code</h2>
        <img src={clipboardRoute} alt="clipboard button" on:click={() => handleCopy(svgCode)}/>
      </div>
      <div class="svg-text">
        <pre>
{svgCode}
        </pre>
      </div>
    </div>
  </div>
{/await}

<style>
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    padding: 10px;
  }
  
  .title {
    font-size: 2.5rem;
    font-weight: bold;
    margin: 0.5em 0;
    text-align: center;
  }

  .description {
    font-size: 1.1rem;
    margin: 0.5em 0;
    text-align: center;
  }
  
  img {
    width: 150px;
    height: 150px;
  }

  img:hover {
    cursor: pointer;
  }

  .svg-text {
    padding: 0 20px;
    overflow-x: scroll;
    background-color: #323232;
  }

  .svg-card-container {
    border: 1px solid white;
    display: grid;
    grid-template-rows: min-content 1fr;
    border-radius: 10px;
    width: 100%;
  }

  .svg-info-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid white;
    padding: 10px;
  }

  .svg-info-container > h2 {
    font-size: 1em;
    margin: 0;
  }

  .svg-info-container > img {
    padding: 5px;
    width: 32px;
    height: 32px;
    border: 1px solid #5b5b5b;
    border-radius: 5px;
    background-color: #00000029;
  }

</style>
