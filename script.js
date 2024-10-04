
var i = 0;

function changer()
{
   
if(i==0)
{
document.getElementById('img1').src="pexels-elly-fairytale-3810967.jpg";
i=1;
}
else if ( i==1)
{
    document.getElementById('img1').src="pexels-hinso-698508.jpg";
    i=2;
}
else if ( i==2)
    {
        document.getElementById('img1').src="pexels-igor-starkov-233202-785538.jpg";
        i=3;
    }
    else if ( i==3)
        {
            document.getElementById('img1').src="pexels-juanpphotoandvideo-813788.jpg";
            i=4;
        }
        else if ( i==4)
            {
                document.getElementById('img1').src="pexels-vlasceanu-1403653.jpg";
                i=0;
            }
            

            setTimeout(()=>{
             changer();
            },3000);
        
}