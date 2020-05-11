<script>
  import CovidChart from "../components/CovidChart.svelte";
  import CovidStat from "../components/CovidStat.svelte";
  import TableContainer from "../components/TableContainer.svelte";
</script>

<svetle:head>
  <title>Covid19 US Tracker</title>
</svetle:head>
<div class="section header">
  <div class="container">
    <h1>Covid19 - US</h1>
  </div>
</div>
<CovidStat />
<CovidChart />
<TableContainer />
