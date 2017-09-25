$(document).ready(function(){
var data = [0,0,0,0,0,0,0,0,0,0,0,0];
$.get("../index.php?c=Main&a=geteverymonthpersonnum",{"t_id":t_id},res=>{
   console.log(res);
   let body = res.body;
   for(let item of body){
       console.log(item);
       data[parseInt(item.month)-1] = item.personnum;
   }
},"json").then(()=>{
    myChart.setOption(option2);
});
var myChart = echarts.init(document.getElementById("personnum"));
option2 = {
    title: {
        text: '当前月之前的景区每月游客总数',
        textStyle: {
            color: '#000',
        }
    },
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月','9月','10月','11月','12月'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'游客人数',
            type:'bar',
            barWidth: '60%',
            data:data,
        }
    ]
};
});