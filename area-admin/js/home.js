$(document).ready(function(){
    var data = [];
    var thistour = {
        name : '本景区水平（Scenic spot level）',
        value:[],
    }
    var avgtour = {
        name : '平均水平（average level）',
        value:[],
    }
    var myChart = echarts.init(document.getElementById("radarpic"));
    $.when(
        $.get("../index.php?c=Main&a=getalltouravgscore",res=>{
            console.log(res);
            avgtour.value.push(res.body.popularity*100);
            avgtour.value.push(res.body.environment*100);
            avgtour.value.push(res.body.service*100);
            avgtour.value.push(res.body.score*100);
            avgtour.value.push(res.body.traffic*100);
            avgtour.value.push(res.body.price*100);
        },"json"),
        $.get("../index.php?c=Main&a=gettourscorebytid",{"t_id":t_id},res=>{
            console.log(res);
            thistour.value.push(res.body.popularity*100);
            thistour.value.push(res.body.environment*100);
            thistour.value.push(res.body.service*100);
            thistour.value.push(res.body.score*100);
            thistour.value.push(res.body.traffic*100);
            thistour.value.push(res.body.price*100);
        },"json"),
    ).then(()=>{
        data.push(thistour);
        data.push(avgtour);
        console.log(data);
        myChart.setOption(option);
        
    });
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
               { name: '受欢迎度（Level of popularity）', max: 500.0},
               { name: '环境质量（Quality of environment）', max: 500.0},
               { name: '服务质量（Quality of service）', max: 500.0},
               { name: '游客评价（Tourists evaluation）', max: 500.0},
               { name: '交通（The traffic）', max: 500.0},
               { name: '价格水平（Price）', max: 500.0}
            ]
        },
        series: [{
            name: '平均水平 vs 实际水平（ vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data : data,
        }]
    };
});