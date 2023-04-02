# 手写reduce
- reduce
    注释：对没有值的数组元素，不执行 reduce() 方法。reduce() 方法不会改变原始数组。  
    array.reduce(function(total, currentValue, currentIndex, arr), initialValue)  
        function(total, currentValue, index, arr) 必需，为数组中的每个元素运行的函数。  
        total	必需，或函数先前返回的值。  
        currentValue	必需，当前元素的值。  
        index	可选，当前元素的数组索引。  
        arr	可选，原数组对象 
        initialValue 可选，起始下标 