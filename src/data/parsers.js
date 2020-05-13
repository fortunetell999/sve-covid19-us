import format from './format';
import moment from 'moment';

function usStats(data) {
  const [usStatRaw] = data;
  console.log(usStatRaw);
  return parseStats(usStatRaw);
}

function stateStats(state, data) {
  const stateStatRaw = data.find((d) => d.state === state);
  console.log(stateStatRaw);
  return parseStats(stateStatRaw);
}

function parseStats(rawStats) {
  return {
    cases: format.number(rawStats.positive),
    deaths: format.number(rawStats.death),
    recovered: format.number(rawStats.recovered),
    ventilator: format.number(rawStats.onVentilatorCurrently),
    hospitalized: format.number(rawStats.hospitalized),
    icu: format.number(rawStats.inIcuCurrently),
    tested: format.number(rawStats.totalTestResults),
    updated: moment(rawStats.lastModified).format('LLLL'),
  };
}
export default {
  usStats,
  stateStats,
};
