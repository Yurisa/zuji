$(function(){
    var message = [];
    var nationnamelist = [];
    // var onearea = {};
    $.get('index.php?c=Main&a=gettouristandnation',res=>{
       console.log(res);
       let area = res.body;
       for(let item of area){
        var onenation = {
            name: '',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data:[],
            symbolSize: 18,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            itemStyle: {
                normal:{
                    color: item.color,
                    shadowBlur: 10,
                    shadowColor: '#333'
                },
                emphasis: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            }
        };
        nationnamelist.push(item.nation_name);
        onenation.name = item.nation_name;
        // onenation.itemstyle.normal.color = item.color;
       let tourlist  = item.touristarealist;
       for(let tour of tourlist){
        let onearea = {
            "name":tour.t_name,
            "value":[tour.longitude,tour.latitude,tour.avgscore,tour.t_id],
        }
        onenation.data.push(onearea);
       } 
       message.push(onenation);
       }
      console.log(message);
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
     // alert(param.dataIndex+':'+option.series[0].data[param.dataIndex].name);
     window.location.href="menu.html?t_id="+option.series[param.seriesIndex].data[param.dataIndex].value[3];
     });
    },"json");
    var myChart = echarts.init(document.getElementById("main"));
    // var Image=document.createElement('img');
    // Image.src="images/home-bg.jpg";
    // Image.style = "width:auto;height:auto;max-width:100%;max-height:100%;";

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
    // backgroundColor: '#404a59',
    // backgroundColor: {
    //     image: Image,// 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串
    //     repeat: 'repeat' ,// 是否平铺, 可以是 'repeat-x', 'repeat-y', 'no-repeat'
        
    // },
    rgba:(0, 0, 0, 0.5),
    // rgba:(0, 0, 0, 0.5),
    title: {
        text: '全国主要少数民族特色地区',
        x:'center',
        textStyle: {
            color: '#fff',
        }
    },
    tooltip: {               //触发类型
        trigger: 'item',
        formatter: function (params) {
            return params.name + ' : ' + params.value[2];
        }
    },
    legend: {                // 右下角
        orient: 'vertical',
        y: 'bottom',
        x:'right',
        data:nationnamelist,
        textStyle: {
            color: '#fff'
        }
    },
    // visualMap: {             // 左下角
    //     min: 0,
    //     max: 200,
    //     calculable: true,
    //     show:false,
    //     color: ['#d94e5d','#eac736','#50a3ba'],
    //     textStyle: {
    //         color: '#fff'
    //     }
    // },
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
    series:message,
}

})
