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

function historicUs(data) {
  return parseHistoric(data);
}

function parseHistoric(historicData) {
  return [
    {
      label: 'Cases',
      key: 'positive',
      color: 'rbg(100,0,200)',
    },
    {
      label: 'Recovered',
      key: 'recovered',
      color: 'rbg(100,100,200)',
    },
    {
      label: 'Total Tested',
      key: 'totalTestResults',
      color: 'rbg(10,30,100)',
    },
    {
      label: 'Hospitalized',
      key: 'hospitalizedCurrently',
      color: 'rbg(20,100,230)',
    },
    {
      label: 'Deaths',
      key: 'death',
      color: 'rbg(255,99,132)',
    },
  ].reduce((prev, next) => {
    if (
      Object.values(historicData).filter((d) => d[next.key] !== null).length > 4
    ) {
      prev.push(parseChart(historicData, next.key, next.label, next.color));
    }

    return prev;
  }, []);
}

function parseChart(historicData, key, label, color) {
  const chartData = Object.keys(historicData).map((data) => {
    return {
      x: moment(data.date, 'YYYYMMDD'),
      y: data[key],
    };
  });

  return {
    label,
    data: chartData,
    fill: false,
    borderColor: color,
  };
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
  historicUs,
};
