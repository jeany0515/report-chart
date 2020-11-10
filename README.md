### 如何安装依赖

第一次使用先`npm install`， 把依赖安装了。
主要使用了Ant.design和AntV.

### 如何运行

依赖安装好了之后，用`npm start`就可以直接运行了，就能看到结果了。

### 数据源

数据源在`data`目录下，文件名不能修改，直接把Excel内容转成json，然后粘贴到`data.json`里面，就可以直接运行了。
如果数据解析错误，就看`DataService.js`，可能是数据格式导致的。Excel的数据格式要和`DataService.js`保持完全一致。

Excel to Json 在线工具
<http://beautifytools.com/excel-to-json-converter.php>

### 生成报告步骤：
1. 使用chrome插件截图报告
2. 把图片按人截取成一张一张的图片
3. 使用在线拼图把截断的图片拼好<https://www.toolnb.com/tools/tppj.html>
4. 用Mac的Preview把所有图片转成PDF
5. 使用在线工具合并所有PDF为一个PDF
   <https://smallpdf.com/>

### 注意事项

- 所有地方学生的名字必须保持一致，包括tab的名字
- 总分tab的内容不能有额外的内容，不然会解析不准确
