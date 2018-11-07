1、  JS 字符串对象 str 

    ★★★ 字符串的长度
    
        str.length
        
    ★★★ indexOf 方法
    
        str.indexOf(searchValue,startIndex); 
            searchValue 表示要搜索的字符串
            startIndex 开始搜索的位置
            
            -1表示没有搜索到，不包含
            其余数字则表示搜索到的字符串所在的首位
    
    ★★★ lastIndexOf 方法
    
        str.lastIndexOf(searchValue,startIndex);
        
            与indexOf类似，但是它是从右向左找
            
    ★★★ 字符串 search 方法
     
        str.search(string); 检查字符串中是否含有字符串，返回值和 indexOf 一样    
            
    ★★★ 字符串之间的比较，比较的是字符的 unicode 编码值
    
    ★★★ 字符串的截取 substring
    
        str.substring(startIndex,endIndex);
        
            startIndex 开始截取的位置
            endIndex 截取到的字符位置 + 1
            两个参数都是正数
            
    ★★★ 字符串截取 slice
    
        str.slice(startIndex,endIndex);
        
            两个参数可以是负数
            负数代表是从右边开始 截取
            
    ★★★ 字符串分隔 split
    
    ★★★ 字符串拼接 join
    
    ★★★ 字符串替换 replace
    
    ★★★ 字符串编码
    
        str.charAt(index);
        str.charCodeAt(index);
        str.fromCharCode(unicode);
    
    ★★★ 字符串大小写
    
        str.toUpperCase();
        str.toLowerCase();
    
    ★★★ 字符串匹配 test
        
        RegExpObject.test(str);
        检查str字符串中是否含有RegExpObject正则对象；
        如果含有则，返回true,否则返回false
        
    ★★★ 字符串匹配 exec
    
        RegExpObject.exec(string);
        RegExpObject 对象 如果有修饰符 g ，则会全局继续匹配，只不过，每执行一次，开始匹配的位置从上次结束的位置开始
        匹配不到返回null,
        匹配到返回一个数组 
        数组有一个值表示匹配到的字符串
        数组的属性 .length 为 1
        数组的属性 .index 为匹配到的字符串的首位 index
        数组的属性 .input 为被检索的字符串
        
    ★★★ 字符串匹配 match
    
        str.match(RegExpObject);
        
        如果没有匹配到返回null
        如果没有 g 返回 值和 exec 一样
        如果有 g 返回的 数组，只含有匹配到的 字符串组成的数组
        
        
                   
