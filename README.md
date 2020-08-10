### 如何安装依赖

第一次使用先`npm install`， 把依赖安装了。
主要使用了Ant.design和AntV.

### 如何运行

依赖安装好了之后，用`npm start`就可以直接运行了，就能看到结果了。

### 数据源

数据源在`data`目录下，文件名不能修改，直接把Excel内容转成json，然后粘贴到`data.json`里面，就可以直接运行了。
如果数据解析错误，就看`DataService.js`，可能是数据格式导致的。Excel的数据格式要和`DataService.js`保持完全一致。

Excel to Json 在线工具
http://beautifytools.com/excel-to-json-converter.php