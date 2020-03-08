$( "body[data-page='QuestionsShow']" ).ready(function() {
    console.log("RUn")
 // ChartJS

    var ctx = document.getElementById('myChart').getContext('2d');
    var rente_main_node = document.querySelector("#myChart");
    var rente_getResults = {
        rente_hochrechnung: rente_main_node.getAttribute("rente_hochrechnung"),
        rente_hochrechnungmitanpassung: rente_main_node.getAttribute("rente_hochrechnungmitanpassung"),
        rente_vbiszurrente: rente_main_node.getAttribute("rente_vbiszurrente"),
        rente_fiktiv: rente_main_node.getAttribute("rente_fiktiv"),
        rente_heute: rente_main_node.getAttribute("rente_heute"),
        rente_jahrAktuell: rente_main_node.getAttribute("rente_jahrAktuell"),
        rente_notwendigjahre: rente_main_node.getAttribute("rente_notwendigjahre"),
        rente_notwendigesgehalt: rente_main_node.getAttribute("rente_notwendigesgehalt"), 
    };
    var rente_Years = [];
    for (var x=0; x < rente_getResults.rente_vbiszurrente; x++) { rente_Years.push(parseInt(rente_getResults.rente_jahrAktuell)+x) }
    var rente_Hochrechnung = [];
    for (var x=0; x < rente_getResults.rente_vbiszurrente; x++) { rente_Hochrechnung.push(parseFloat(rente_getResults.rente_hochrechnung)/parseFloat(rente_getResults.rente_vbiszurrente)*x) }
    var rente_HochrechnungMitAnpassung = [];
    for (var x=0; x < rente_getResults.rente_vbiszurrente; x++) { console.log(parseFloat(rente_getResults.rente_hochrechnungmitanpassung)); rente_HochrechnungMitAnpassung.push(parseFloat(rente_getResults.rente_hochrechnungmitanpassung)/parseFloat(rente_getResults.rente_vbiszurrente)*x) }
    console.log(rente_HochrechnungMitAnpassung)

    console.log(rente_getResults);
    var rente_jahre = ["1940", "1930", "2000"]

    var dataFirst = {
        label: "rente_Hochrechnung",
        data: rente_Hochrechnung,
        lineTension: 0,
        fill: false,
        borderColor: 'red'
      };
    
    var dataSecond = {
        label: "rente_HochrechnungMitAnpassung",
        data: rente_HochrechnungMitAnpassung,
        lineTension: 0,
        fill: false,
      borderColor: 'blue'
      };

    var speedData = {
    labels: rente_Years,
    datasets: [dataFirst, dataSecond]
    };

    var chartOptions = {
        annotation: {
            annotations: [{
                id: 'hline1',
                type: 'line',
                mode: 'horizontal',
                scaleID: 'y-axis-0',
                value: rente_getResults.rente_heute,
                label: {
                    backgroundColor: "red",
                    content: "Rente heute",
                    enabled: true,
                    fontSize: 16,
                  },
                borderColor: "black",
                borderWidth: 5,
            }, {
                id: 'hline2',
                type: 'line',
                mode: 'horizontal',
                scaleID: 'y-axis-0',
                value: rente_getResults.rente_fiktiv,
                label: {
                    backgroundColor: "red",
                    content: "Rente fiktiv",
                    enabled: true,
                    fontSize: 16,
                  },
                borderColor: "black",
                borderWidth: 5,
            }],
            drawTime: "afterDraw" // (default)
        },
        legend: {
          display: true,
          position: 'top',
          labels: {
            boxWidth: 100,
            fontColor: 'black'
          }
        },
      };

    var myChart = new Chart(ctx, {
        type: 'line',
        type: 'line',
        data: speedData,
        options: chartOptions,
    });

// Pie-Chart #1

    var ctx2 = document.getElementById('myPieChart').getContext('2d');

    var data = {
        labels: ["A", "B", "C"],
          datasets: [
            {
                fill: true,
                backgroundColor: [
                    'red',
                    'blue',
                    'green'],
                data: [5, 70, 25],
    // Notice the borderColor 
                borderColor:	['black', 'black'],
                borderWidth: [2,2]
            }
        ]
    };

    var options = {
        title: {
                  display: true,
                  text: 'Jobs nach Anteil an Ihrer Rente',
                  position: 'top'
              },
        rotation: -0.7 * Math.PI
    };

    var myBarChart = new Chart(ctx2, {
        type: 'pie',
        data: data,
        options: options
    });
// Pie-Chart #2

    var ctx3 = document.getElementById('myPieChart2').getContext('2d');

    var data = {
        labels: ["Arbeit", "Kinder", "C"],
          datasets: [
            {
                fill: true,
                backgroundColor: [
                    'red',
                    'blue',
                    'green'],
                data: [5, 70, 25],
    // Notice the borderColor 
                borderColor:	['black', 'black'],
                borderWidth: [2,2]
            }
        ]
    };

    var options = {
        title: {
                  display: true,
                  text: 'Jobs nach Anteil an Ihrer Rente',
                  position: 'top'
              },
        rotation: -0.7 * Math.PI
    };

    var myBarChart = new Chart(ctx3, {
        type: 'pie',
        data: data,
        options: options
    });
})



