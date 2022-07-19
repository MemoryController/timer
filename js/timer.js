// 指定时间转换为时间戳
function toTimeStamp(dateString){
      // dateString例如:'2022-03-05'
        // 例如返回:1646611200000
        return new Date(dateString) - 0
}
// 计算两个日期距离的天数
function getDistanceDays(date1,date2){
      // date1例如:'2022-03-05',date2例如:'2022-03-06'
     const date1_timeStamp = toTimeStamp(date1)
     const date2_timeStamp = toTimeStamp(date2)
     let max = '', min = ''
    if(date1_timeStamp>date2_timeStamp){
        max = date1_timeStamp
        min = date2_timeStamp
    }else{
        max = date2_timeStamp
        min = date1_timeStamp
    } // 例如返回:'1'
    return (max-min)/(24*60*60*1000)
}