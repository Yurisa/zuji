
var myChart = echarts.init(document.getElementById("sortpic"));
var data = [];
$.get("index.php?c=Main&a=gettouristareaandvalue",res=>{
   console.log(res);
   data = res.body.touristarea;
},"json").then(()=>{
    var resultdata0 = [];
    var resultdata1 = [];
    var resultdata2 = [];
    var resultdata3 = [];
    var resultdata4 = [];
    var resultdata5 = [];
    var resultdata6 = [];
    var sum0 = 0;
    var sum1 = 0;
    var sum2 = 0;
    var sum3 = 0;
    var sum4 = 0;
    var sum5 = 0;
    var sum6 = 0;
    var titledata = [];
    for (var i = 0; i < data.length; i++) {
        var d0 = {
            name: data[i].name,
            value: data[i].value1 + data[i].value2
        };
        var d1 = {
            name: data[i].name,
            value: data[i].value1
        };
        var d2 = {
            name: data[i].name,
            value: data[i].value2
        };
        var d3 = {
            name: data[i].name,
            value: data[i].value3
        };
        var d4 = {
            name: data[i].name,
            value: data[i].value4
        };
        var d5 = {
            name: data[i].name,
            value: data[i].value5
        };
        var d6 = {
            name: data[i].name,
            value: data[i].value6
        };
        titledata.push(data[i].name)
        resultdata0.push(d0);
        resultdata1.push(d1);
        resultdata2.push(d2);
        resultdata3.push(d3);
        resultdata4.push(d4);
        resultdata5.push(d5);
        resultdata6.push(d6);
    
        sum1 += data[i].value1;
        sum2 += data[i].value2;
    
        sum3 += data[i].value3;
    
        sum4 += data[i].value4;
    
        sum5 += data[i].value5;
    
        sum6 += data[i].value6;
        sum0 += sum1 + sum2 + sum3 + sum4 + sum5 + sum6;
    }
    
    function NumDescSort(a, b) {
        return a.value - b.value;
    }
    
    resultdata0.sort(NumDescSort);
    resultdata1.sort(NumDescSort);
    resultdata2.sort(NumDescSort);
    resultdata3.sort(NumDescSort);
    resultdata4.sort(NumDescSort);
    resultdata5.sort(NumDescSort);
    resultdata6.sort(NumDescSort);
    
    //传统业务	收入盈利	团队	现金流管理	业务均衡	用户生态
option1 = {
    title: [{
        text: 'TOP10景区各项排名',
        left: 'center'
    }],
     color:['red', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['受欢迎度', '价格水平', '交通', '游客评价', '服务质量', '环境质量'],
        selectedMode: 'single',
    },
    visualMap: {
        min: 0,
        max: 5,
        left: 'left',
        top: 'bottom',
        text: ['高', '低'],
        calculable: true,
        colorLightness: [0.2, 100],
        color: ['#c05050', '#e5cf0d', '#5ab1ef'],
        dimension: 0
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            dataView: {
                readOnly: false
            },
            restore: {},
            saveAsImage: {}
        }
    },
    grid: {
        right: 40,
        top: 40,
        bottom: 40,
        width: '28%'
    },
    xAxis: [{
        position: 'top',
        type: 'value',
        boundaryGap: false,
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
        type: 'category',
        data: [],
        axisTick: {
            alignWithLabel: true
        }
    }],
    series: [
           {
            name: '受欢迎度',
            z: 2,
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    formatter: '{b}             {c}',
                    position: [-100, 9],
                    textStyle: {
                        color: "#0e2406",
                        fontSize: 16
                    }
                },
                emphasis: {
                    show: true
                }
            },
            symbol: 'none',
            itemStyle: {
                emphasis: {
                    color: "#43a6bf"
                }
            },
            data: resultdata1
        }, {
            name: '价格水平',
            z: 2,
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    formatter: '{b}             {c}',
                    position: [-100, 9],
                    textStyle: {
                        color: "#0e2406",
                        fontSize: 16
                    }
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                emphasis: {
                    color: "rgb(254,153,78)"
                }
            },
            data: resultdata2
        }, {
            name: '交通',
            z: 2,
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    formatter: '{b}             {c}',
                    position: [-100, 9],
                    textStyle: {
                        color: "#0e2406",
                        fontSize: 16
                    }
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                emphasis: {
                    color: "rgb(254,153,78)"
                }
            },
            data: resultdata3
        }, {
            name: '游客评价',
            z: 2,
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    formatter: '{b}             {c}',
                    position: [-100, 9],
                    textStyle: {
                        color: "#0e2406",
                        fontSize: 16
                    }
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                emphasis: {
                    color: "rgb(254,153,78)"
                }
            },
            data: resultdata4
        }, {
            name: '服务质量',
            z: 2,
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    formatter: '{b}             {c}',
                    position: [-100, 9],
                    textStyle: {
                        color: "#0e2406",
                        fontSize: 16
                    }
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                emphasis: {
                    color: "rgb(254,153,78)"
                }
            },
            data: resultdata5
        }, {
            name: '环境质量',
            z: 2,
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    formatter: '{b}             {c}',
                    position: [-100, 9],
                    textStyle: {
                        color: "#0e2406",
                        fontSize: 16
                    }
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                emphasis: {
                    color: "rgb(254,153,78)"
                }
            },
            data: resultdata6
        },


        //'团队','现金流管理','业务均衡','用户生态'





        {
            name: '受欢迎度',
            z: 2,
            type: 'pie',
            radius: ['17%', '25%'],
            center: ['30%', '82.5%'],
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                emphasis: {
                    color: "rgb(254,153,78)"
                }
            },
            data: resultdata1
        }, {
            name: '价格水平',
            z: 2,
            type: 'pie',
            radius: ['17%', '25%'],
            center: ['30%', '82.5%'],
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                emphasis: {
                    color: "rgb(254,153,78)"
                }
            },
            data: resultdata2
        }, {
            name: '交通',
            z: 2,
            type: 'pie',
            radius: ['17%', '25%'],
            center: ['30%', '82.5%'],
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                emphasis: {
                    color: "rgb(254,153,78)"
                }
            },
            data: resultdata3
        }, {
            name: '游客评价',
            z: 2,
            type: 'pie',
            radius: ['17%', '25%'],
            center: ['30%', '82.5%'],
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                emphasis: {
                    color: "rgb(254,153,78)"
                }
            },
            data: resultdata4
        }, {
            name: '服务质量',
            z: 2,
            type: 'pie',
            radius: ['17%', '25%'],
            center: ['30%', '82.5%'],
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                emphasis: {
                    color: "rgb(254,153,78)"
                }
            },
            //'团队','现金流管理','业务均衡','用户生态'
            data: resultdata5
        }, {
            name: '环境质量',
            z: 2,
            type: 'pie',
            radius: ['17%', '25%'],
            center: ['30%', '82.5%'],
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                emphasis: {
                    color: "rgb(254,153,78)"
                }
            },
            data: resultdata6
        }
    ]
};

    myChart.setOption(option1);
});
    



