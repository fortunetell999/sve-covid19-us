<script context="module">
  import stateNames from "../data/stateNames.js";
  export async function preload(page) {
    const state = page.params["state"];
    if (stateNames.find(e => e.abbreviation === state) === undefined) {
      this.error(404, "State Not Found");
      return;
    }

    try {
      return { state: page.params["state"] };
    } catch (e) {
      this.error(
        500,
        "There is an error in calling the api. Please try again in 5 minutes."
      );
      return;
    }
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
