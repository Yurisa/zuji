var myChart = echarts.init(document.getElementById("numsort"));
var t_idlist = [];
var touristarea = [];
var month = [];
var data = [];
var thismonthsum = 0;
var lastmonthsum = 0;
var lastmothpersonnum = [];
$.get("../index.php?c=Main&a=getthismonthpersonnum",res=>{
    month.push(res.body.thismonth+"月");
    let tour = res.body.touristarea;
    var personnum = [];
    for(let t of tour){
        personnum.push(t.personnum);
        thismonthsum += parseInt(t.personnum);
        touristarea.push(t.t_name);
    }
    for(let a of touristarea){
        lastmothpersonnum.push(0);
    }
    touristarea.push("总游客数");
    personnum.push(thismonthsum);
    console.log(personnum)
    let tmp = {
        name:res.body.thismonth+"月",
        type: 'bar',
        data:personnum,
    }
    data.push(tmp);
    
},"json").then(()=>{
   $.get("../index.php?c=Main&a=getlastmonthpersonnum",res=>{
        month.push(res.body.thismonth+"月");
        let tour = res.body.touristarea;
        for(let t of tour){
            for(let i = 0; i< touristarea.length; i++){
                if(t.t_name === touristarea[i]){
                    lastmothpersonnum[i] = t.personnum;
                    lastmonthsum += parseInt(t.personnum);
                }
            }
        }
        lastmothpersonnum.push(lastmonthsum);
        let tmp = {
            name:res.body.thismonth+"月",
            type: 'bar',
            data:lastmothpersonnum,
        }
        data.push(tmp);
        myChart.setOption(option);
    },"json");
});

option = {
    title: {
        text: '游客总量',
        // subtext: '数据来自网络'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: month,
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data:touristarea,
    },
    series: data,
};


// function getId(t){
//     switch(t){
//       case 01: return '一、';
//       case 02: return '二、';
//       case 03: return '三、'
//       case 04: return '四、';
//       case 4: return '五';
//       case 5: return '六、';
//     }