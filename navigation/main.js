




var keys = {
        '0': {0:'q',1:'w',2:'e',3:'r',4:'t',5:'y',6:'u',7:'i',8:'o',9:'p',length:10},
        '1': {0:'a',1:'s',2:'d',3:'f',4:'g',5:'h',6:'j',7:'k',8:'l',length:9},
        '2': {0:'z',1:'x',2:'c',3:'v',4:'b',5:'n',6:'m',length:7},
        'length': 3
}


        var hash = {'q': 'qq.com',
        'w': 'weibo.com', 
        'e': 'ele.me', 
        'r': 'renren.com', 
        't': 'tianya.com',
        'y': 'youtube.com', 
        'u': 'uc.com' , 
        'i': 'iqiyi.com',
        'o': 'opera.com', 
        'p': undefined, 
        'a': 'acfun.tv', 
        's': 'sohu.com', 
        'z': 'zhihu.com',
        'm': 'www.mcdonalds.com.cn'
        }

for(var index=0;index<keys['length'];index++){
var div=document.createElement('div');
div.className='row';
main.appendChild(div)
row=key[index]
for(var index2=0;index2<row['length'];index2++)
kbd=document.createElement(KeyboardEvent)
kbd.className='key'
var button=document.createElement(button)
button.id=row[index2]
button.textContent='编辑'
kbd.appendChild(button)
div.appendChild(kbd)
button.onclick=function(a){
        console.log(a)
        }

        
        
        
        
        








}
