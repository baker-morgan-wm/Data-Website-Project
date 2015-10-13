var pokemon = prompt("Welcome to the world of Competitive Balling wit Pokemon. This site will introduce you to what pokemon to use when battling, their stats, and they types most commonly used. ");

google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBarColors);

function drawBarColors() {
    var data = google.visualization.arrayToDataTable([
        ['Pokemon', 'Attack', 'Speed'],
        ['Charizard X', 78, 100],
        ['Aegislash', 150, 60],
        ['Talonflame', 78, 126],
        ['Rotom-W', 65, 86],
        ['Garchomp', 130, 102]
    ]);

    var options = {
        title: 'Top 5 Competitive Battling Pokemon ',
        chartArea: {width: '50%'},
        colors: ['#b0120a', '#ffab91'],
        hAxis: {
            title: 'Status',
            minValue: 0
        },
        vAxis: {
            title: 'Pokemon'
        }
    };
    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}
google.setOnLoadCallback(drawChart);
function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Fire',  2],
        ['Dragon',      2],
        ['Steel',  1],
        ['Ground', 1],
        ['Ghost',    1],
        ['Water', 1],
        ['Eletric', 1],
        ['Flying', 1],
    ]);

    var options = {
        title: 'Pokemon types'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}