import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import * as Highcharts from 'highcharts';

const PieChart = (props) =>{


    const options = {
        chart: {
            type: 'pie',
            height: 300,
            width: 300
        },

        title: {
            text: props.name && props.name
        },

        tooltip: {
            enabled: true,
        },
        legend: {
            enabled: false,
        },
        credits: {
            enabled: false
        },
        series:  [{
            data : [
                ["Вірогідність", parseFloat(props.pValue)],
                ["Всі інші", 1 - parseFloat(props.pValue)]
            ]
        }]
        ,
        plotOptions: {
            area: {
                enableMouseTracking: false,
                color: '#000000',
                zoneAxis: 'x',
                zones: [
                    {
                        value: 0.1,
                        fillColor: '#FC2B37'
                    },
                    {

                        fillColor: '#1EFC12'
                    },
                    {

                    }
                ]
            },
            series: {
                marker:{
                    enabled: false
                }
            }
        }

    };

    return(
        <HighchartsReact highcharts={Highcharts} options={options}/>
    );
}
export default PieChart;