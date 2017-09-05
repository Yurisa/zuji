$(document).ready(function(){
    var myChart = echarts.init(document.getElementById("radarpic"));
    option = {
        title: {
            text: '景区水平对比图',
            textStyle: {
                color: '#000',
            }
        },
        tooltip: {},
        legend: {
            data: ['平均水平（average level）', '本景区水平（Scenic spot level）']
        },
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#FF4500',
                    backgroundColor: '#999',
                    borderRadius: 3,
                    padding: [3, 5]
               }
            },
            indicator: [
               { name: '受欢迎度（Level of popularity）', max: 6500},
               { name: '环境质量（Quality of environment）', max: 16000},
               { name: '服务质量（Quality of service）', max: 30000},
               { name: '游客评价（Tourists evaluation）', max: 38000},
               { name: '交通（The traffic）', max: 52000},
               { name: '价格水平（Price）', max: 25000}
            ]
        },
        series: [{
            name: '平均水平 vs 实际水平（ vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data : [
                {
                    value : [5000, 14000, 28000, 31000, 42000, 21000],
                    name : '本景区水平（Scenic spot level）'
                },

                {
                    value : [4300, 10000, 28000, 35000, 50000, 19000],
                    name : '平均水平（average level）'
                },
            ]
        }]
    };
    myChart.setOption(option);
});