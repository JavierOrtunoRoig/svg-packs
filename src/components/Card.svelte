<script lang="ts">
  export let id;
  export let slug;
  export let title;
</script>

<a class="card" href={`/svg/${id}`}>
  <img src={slug} alt={`Icon of ${title}`}>
  <p class="title">{title}</p>
</a>

<style>

img {
  max-width: 100px;
  max-height: 100px;
}
.card {
  width: 150px;
  height: 150px;
  background-color: #333;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
}

.card:hover {
  cursor: pointer;
  transform: scale(1.05);
}

.title {
  font-size: 1.2rem;
  text-align: center;
  margin: 0;
}

</style>