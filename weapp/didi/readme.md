- 地图功能 定位 标点
    1. 组件 
        view div UI 组件  
    2. swiper scroll-view  map 组件 
    3. map 组件
        <map latitude longitude markers show-location>  
            <cover-view></cover-view>     
            <cover-image></cover-image>  
        </map>  
    4. 获得当前的位置 
        wx.getLocation({})  
    5. 创建map实例
        id="myMap"
        wx.createMapContext('myMap')  
    6. 移动地图回到定位点
        map.moveToLocation()   