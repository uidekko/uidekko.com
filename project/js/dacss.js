function getCSS() 
{ 
        datetoday = new Date(); 
        timenow=datetoday.getTime(); 
        datetoday.setTime(timenow); 
        thehour = datetoday.getHours(); 
        if (thehour<8) 
            display = "night.css"; 
        else if (thehour>18) 
            //样式表的名称，或者你可以加上路径 
            display = "night.css"; 
        else 
            display = "day.css"; 
        //（...想要更多再加即可...） 

        var css = '<'; 
        css+='link rel="stylesheet" href=css/'+display+' \/'; 
        css+='>'; 
        document.write(css); 
} 