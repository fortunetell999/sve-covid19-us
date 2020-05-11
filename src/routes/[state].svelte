<script context="module">
  export async function preload(page) {
    return { state: page.params["state"] };
  }
</script>

<script>
  import CovidChart from "../components/CovidChart.svelte";
  import CovidStat from "../components/CovidStat.svelte";
  import TableContainer from "../components/TableContainer.svelte";
  export let state;
</script>

<svetle:head>
  <title>Covid19 US {state}</title>
</svetle:head>
<div class="section header">
  <div class="container">
    <h1>Covid19 - {state}</h1>
  </div>
</div>

<CovidStat />
<CovidChart />
