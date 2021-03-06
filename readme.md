# 微信小程序字母检索-indexList

>两年前小程序刚出来的时候，领导就让我做一个小程序，中间有个字母索引的功能，在H5页面里，比较常见，原理就是通过touch事件来更新dom，使视图有所变化。
>
>但是在小程序里，并没有dom的操作，只能通过现有的组件实现效果，在17年的时候，第一版里，做出来的效果在安卓手机还有点卡，经过2年，小程序也不断更新，现在ios和android表现都比较流畅了。



### 动图效果gif



![](./demo.gif)

### indexList详细内容

* github地址:<https://github.com/petsgre/indexList>
* 开发工具：微信开发者工具
* 初始版本：v1.0.0
* 当前版本：v2.0.1

### 功能要点

* 触摸右侧字母，左侧scrollview滚动到目标位置
* 可在search.wxss中自定义样式
* ![](./css.jpg)
* **注意:** 这里的右侧字母所在的view高度,也就是 .index-english view  高度固定为15px不可修改,如果有需要以后的版本再改善,其他部分样式可以自定义

### 下载地址

> bower install indexList（停止更新bower）
>
> npm install wx-index (从node_modules目录下面拷贝出项目代码即可)

### 如何使用



1. 直接使用 page/search/search 这是page形式的代码，可修改性比较强，可以直接拷贝来使用
2. 使用component方式使用 拷贝 component文件到项目根目录中，在需要调用组件的页面中调用(暂不支持自定义样式，如果需要修改请使用方法1)

```
// xxx.wxml
<zx-index list="{{list}}"></zx-index>

// xxx.json
{
  "usingComponents": {
    "zx-index": "../../component/index/index"
  }
}
```



### 最后

如果觉得此组件可以帮助到你，请给个star以资鼓励，谢谢。

如果此组件有什么不足之处，欢迎提出issue或有好的方案直接PR。
