$(function(){
var myChart = echarts.init(document.getElementById("category"));
var totalnum = 0;
var t_id = getQueryString("t_id");
var app={};
option = {
    title: {
        text: '景区管理',
        // subtext: '虚拟数据'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#283b56'
            }
        }
    },
    legend: {
        data:['景区内人数', '门票预购队列']
    },
    toolbox: {
        show: true,
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    dataZoom: {
        show: false,
        start: 0,
        end: 100
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: true,
            data: (function (){
                var now = new Date();
                var res = [];
                var len = 10;
                while (len--) {
                    res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
                    now = new Date(now - 2000);
                }
                return res;
            })()
        },
        {
            type: 'category',
            boundaryGap: true,
            data: (function (){
                var res = [];
                var len = 10;
                while (len--) {
                    res.push(len + 1);
                }
                return res;
            })()
        }
    ],
    yAxis: [
        {
            type: 'value',
            scale: true,
            name: '景区内人数',
            max: 10,
            min: 0,
            boundaryGap: [0.2, 0.2]
        },
        {
            type: 'value',
            scale: true,
            name: '预购量',
            max: 1200,
            min: 0,
            boundaryGap: [0.2, 0.2]
        }
    ],
    series: [
        {
            name:'门票预购队列',
            type:'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data:(function (){
                var res = [];
                var len = 10;
                while (len--) {
                    res.push(Math.round(Math.random() * 1000));
                }
                return res;
            })()
        },
        {
            name:'景区内人数',
            type:'line',
            data:(function (){
                var res = [];
                var len = 0;
                while (len < 10) {
                    res.push(0);
                    len++;
                }
                return res;
            })()
        }
    ]
};

app.count = 11;
myChart.setOption(option)
setInterval(function (){
     gettotalnum();
}, 10000);
function gettotalnum(){
    $.get('../index.php?c=Main&a=getpersonnum',{"t_id":t_id},res=>{
        console.log(res);
        let totalnum = res.body.totalnum;
        if(res.result !== 'ok'){
            layui.use('layer', function(){
                var layer = layui.layer;
                
                layer.msg(res.result);
              });  
        }
        axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');
        
            var data0 = option.series[0].data;
            var data1 = option.series[1].data;
            data0.shift();
            data0.push(Math.round(Math.random() * 1000));
            data1.shift();
            data1.push(totalnum);
        
            option.xAxis[0].data.shift();
            option.xAxis[0].data.push(axisData);
            option.xAxis[1].data.shift();
            option.xAxis[1].data.push(app.count++);
        
            myChart.setOption(option);
    },"json");
}

/**
 * 得到url中的参数
 */

function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}

})