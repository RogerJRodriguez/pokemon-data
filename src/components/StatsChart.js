import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

const StatsChart = (props) => {
    console.log(props);
    var stats = [
        props.stats[5].base_stat,
        props.stats[4].base_stat,
        props.stats[3].base_stat,
        props.stats[2].base_stat,
        props.stats[1].base_stat,
        props.stats[0].base_stat,
    ];

    var statColors = [];
    var borderStatColors = [];
    // decide stat color using HP quartiles
    if(stats[0] <= 60) {
        statColors.push('rgba(255, 99, 132, 0.2)');
        borderStatColors.push('rgba(255, 99, 132, 1)');
    } else if(stats[0] <= 80) {
        statColors.push('rgba(255, 159, 64, 0.2)');
        borderStatColors.push('rgba(255, 159, 64, 1)');
    } else if(stats[0] <= 100) {
        statColors.push('rgba(255, 205, 86, 0.2)');
        borderStatColors.push('rgba(255, 205, 86, 1)');
    } else if(stats[0] <= 130) {
        statColors.push('rgba(0, 204, 102, 0.2)');
        borderStatColors.push('rgba(0, 204, 102, 1)');
    } else {
        statColors.push('rgba(54, 162, 235, 0.2)');
        borderStatColors.push('rgba(54, 162, 235, 1)');
    }
    // decide stat color using Attack quartiles
    if(stats[1] <= 60) {
        statColors.push('rgba(255, 99, 132, 0.2)');
        borderStatColors.push('rgba(255, 99, 132, 1)');
    } else if(stats[1] <= 80) {
        statColors.push('rgba(255, 159, 64, 0.2)');
        borderStatColors.push('rgba(255, 159, 64, 1)');
    } else if(stats[1] <= 100) {
        statColors.push('rgba(255, 205, 86, 0.2)');
        borderStatColors.push('rgba(255, 205, 86, 1)');
    } else if(stats[1] <= 130) {
        statColors.push('rgba(0, 204, 102, 0.2)');
        borderStatColors.push('rgba(0, 204, 102, 1)');
    } else {
        statColors.push('rgba(54, 162, 235, 0.2)');
        borderStatColors.push('rgba(54, 162, 235, 1)');
    }
    // decide stat color using Defense quartiles
    if(stats[2] <= 60) {
        statColors.push('rgba(255, 99, 132, 0.2)');
        borderStatColors.push('rgba(255, 99, 132, 1)');
    } else if(stats[2] <= 80) {
        statColors.push('rgba(255, 159, 64, 0.2)');
        borderStatColors.push('rgba(255, 159, 64, 1)');
    } else if(stats[2] <= 100) {
        statColors.push('rgba(255, 205, 86, 0.2)');
        borderStatColors.push('rgba(255, 205, 86, 1)');
    } else if(stats[2] <= 130) {
        statColors.push('rgba(0, 204, 102, 0.2)');
        borderStatColors.push('rgba(0, 204, 102, 1)');
    } else {
        statColors.push('rgba(54, 162, 235, 0.2)');
        borderStatColors.push('rgba(54, 162, 235, 1)');
    }
    // decide stat color using Sp. Atk quartiles
    if(stats[3] <= 60) {
        statColors.push('rgba(255, 99, 132, 0.2)');
        borderStatColors.push('rgba(255, 99, 132, 1)');
    } else if(stats[3] <= 80) {
        statColors.push('rgba(255, 159, 64, 0.2)');
        borderStatColors.push('rgba(255, 159, 64, 1)');
    } else if(stats[3] <= 100) {
        statColors.push('rgba(255, 205, 86, 0.2)');
        borderStatColors.push('rgba(255, 205, 86, 1)');
    } else if(stats[3] <= 130) {
        statColors.push('rgba(0, 204, 102, 0.2)');
        borderStatColors.push('rgba(0, 204, 102, 1)');
    } else {
        statColors.push('rgba(54, 162, 235, 0.2)');
        borderStatColors.push('rgba(54, 162, 235, 1)');
    }
    // decide stat color using Sp. Def quartiles
    if(stats[4] <= 60) {
        statColors.push('rgba(255, 99, 132, 0.2)');
        borderStatColors.push('rgba(255, 99, 132, 1`)');
    } else if(stats[4] <= 80) {
        statColors.push('rgba(255, 159, 64, 0.2)');
        borderStatColors.push('rgba(255, 159, 64, 1)');
    } else if(stats[4] <= 100) {
        statColors.push('rgba(255, 205, 86, 0.2)');
        borderStatColors.push('rgba(255, 205, 86, 1)');
    } else if(stats[4] <= 130) {
        statColors.push('rgba(0, 204, 102, 0.2)');
        borderStatColors.push('rgba(0, 204, 102, 1)');
    } else {
        statColors.push('rgba(54, 162, 235, 0.2)');
        borderStatColors.push('rgba(54, 162, 235, 1)');
    }
    // decide stat color using Speed quartiles
    if(stats[5] <= 60) {
        statColors.push('rgba(255, 99, 132, 0.2)');
        borderStatColors.push('rgba(255, 99, 132, 1)');
    } else if(stats[5] <= 80) {
        statColors.push('rgba(255, 159, 64, 0.2)');
        borderStatColors.push('rgba(255, 159, 64, 1)');
    } else if(stats[5] <= 100) {
        statColors.push('rgba(255, 205, 86, 0.2)');
        borderStatColors.push('rgba(255, 205, 86, 1)');
    } else if(stats[5] <= 130) {
        statColors.push('rgba(0, 204, 102, 0.2)');
        borderStatColors.push('rgba(0, 204, 102, 1)');
    } else {
        statColors.push('rgba(54, 162, 235, 0.2)');
        borderStatColors.push('rgba(54, 162, 235, 1)');
    }

    const data = {
        labels: [`HP:   ${stats[0]}`, `Attack:   ${stats[1]}`, `Defense:   ${stats[2]}`, `Sp. Atk:   ${stats[3]}`, `Sp. Def:   ${stats[4]}`, `Speed:   ${stats[5]}`],
        datasets: [
          {
            label: 'Stats',
            backgroundColor: statColors,
            borderColor: borderStatColors,
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: stats,
          }
        ]
     };

    const options = {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: 'white'
                }
            }],
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    min: 0
                },
                labels: {
                    show: false
                },
                display: false
            }]
        }
    };

    return (
        <HorizontalBar data={data} options={options}/>
    );
}

export default StatsChart;