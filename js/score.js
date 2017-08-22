$(function() {
    $.fn.raty.defaults.path = 'raty-master/lib/images';
    $('#function-demo').raty({
        number: 5, //多少个星星设置
        targetType: 'hint', //类型选择，number是数字值，hint，是设置的数组值
        path: 'raty-master/demo/images',
        hints: ['差', '一般', '好', '非常好', '全五星'],
        cancelOff: 'cancel-custom-off.png',
        cancelOn: 'cancel-custom-on.png',
        size: 24,
        starHalf: 'star-half.png',
        starOff: 'star-off.png',
        starOn: 'star-on.png',
        target: '#function-hint',
        cancel: false,
        targetKeep: true,
        targetText: '请选择评分',
        click: function(score, evt) {
            alert('ID: ' + $(this).attr('id') + "\nscore: " + score + "\nevent: " + evt.type);
        }
    });
    $('target-demo').raty({
        number: 5, //多少个星星设置
        score: 4, //初始值是设置
        targetType: 'number', //类型选择，number是数字值，hint，是设置的数组值
        path: 'raty-master/demo/images',
        cancelOff: 'cancel-custom-off.png',
        cancelOn: 'cancel-custom-on.png',
        size: 24,
        starHalf: 'star-half.png',
        starOff: 'star-off.png',
        starOn: 'star-on.png',
        target: '.hint',
        cancel: false,
        targetKeep: true,
        precision:true, //是否包含小数
        click: function(score, evt) {
            alert('ID: ' + $(this).attr('id') + "\nscore: " + score + "\nevent: " + evt.type);
        }
    });
});