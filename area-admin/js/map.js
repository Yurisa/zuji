    var myChart = echarts.init(document.getElementById("map-part"));
    var geoCoordMap = [];

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    console.log(res);
    return res;
};

option = {
    backgroundColor: '#FFFFFF',
    // rgba:(0, 0, 0, 0.5),
    title: {
        text: '全国主要少数民族特色地区',
        // subtext: 'data from PM25.in',
        // sublink: 'http://www.pm25.in',
        x:'center',
        textStyle: {
            color: '#000',
        }
    },
    tooltip: {               //触发类型
        trigger: 'item',
        formatter: function (params) {
            return params.name ;
        }
    },
    // legend: {                // 右下角
    //     orient: 'vertical',
    //     y: 'bottom',
    //     x:'right',
    //     data:['少数民族特色地区'],
    //     textStyle: {
    //         color: '#000'
    //     }
    // },
    visualMap: {             // 左下角
        min: 0,
        max: 200,
        calculable: true,
        show:false,
        color: ['#d94e5d','#eac736','#50a3ba'],
        textStyle: {
            color: '#fff'
        }
    },
    geo: {                   // 地图上的散点
        map: 'china',
        label: {             //散点上的文本标签
            emphasis: {
                show: false,
            }
        },
        itemStyle: {
            normal: {        //默认状态下
                areaColor: '#323c48',
                borderColor: '#111'
            },
            emphasis: {      //高亮状态下
                areaColor: '#2a333d'
            }
        }
    },
    series: [
        {
            name: '少数民族特色地区',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: geoCoordMap,
            symbolSize: 18,
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: '#f4e925',
                    shadowBlur: 10,
                    shadowColor: '#333'
                },
                emphasis: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            }
        }
    ]
}

 myChart.setOption(option);
 var ecConfig = echarts.config;
 console.log(echarts)
 console.log(ecConfig)
 // function eConsole(params){
 //    alert(option.series[0].data[param.dataIndex].name);
 //    window.location.href="https://www.baidu.com/";
 // }
 // myChart.on("click", eConsole);  
 myChart.on("click", function (param){ 
alert(param.dataIndex+':'+option.series[0].data[param.dataIndex].name);
window.location.href="https://localhost/zuji/index.php?c=Main&a=showtouristarea&t_id="+option.series[0].data[param.dataIndex].value[2];
});
