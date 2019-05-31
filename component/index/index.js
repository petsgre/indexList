// component/index.js
//定义索引字母数组
var indexArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var y = 0;
//获取touchstart字母数组角标
function getArrIndex(english) {
  // console.log(Page)
  for (var x = 0; x < indexArr.length; x++) {
    if (english == indexArr[x]) {
      return x;
    }
  }
}
//num 移动了多少位 index 当前字母,返回当前触摸位置节点的字母
function getArrEnglish(num, index) {
  var english = indexArr[index + num];
  if (!(1 > num + index > 26)) {
    return english;
  } else {
    return AAA;
  }
}
Component({
  externalClasses: ['my-class'],
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      var that = this;
      wx.getSystemInfo({
        success: function(res) {
          that.setData({
            windowHeight: res.windowHeight,
            indexTop: res.windowHeight / 2 - 200
          });
        }
      })
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    rightShow: false,
    dropShow: false,
    indexShow: false,
    toView: "e",
    scrollTop: 1000,
    indexId: "",
    indexy: "",
    indexEnglish: "",
    arrId: indexArr
  },

  /**
   * 组件的方法列表
   */
  methods: {
    touchstart: function(e) {
      this.setData({
        indexId: e.target.id,
        toView: e.target.id.toLowerCase(),
        indexy: e.touches[0].pageY,
        indexShow: true,
        indexEnglish: e.target.id
      })
    },
    touchmove: function(e) {
      y = getArrIndex(e.target.id);
      var indexY = e.touches[0].pageY;
      if (getArrEnglish(Math.round((indexY - this.data.indexy) / 15), y)) {
        this.setData({
          toView: getArrEnglish(Math.round((indexY - this.data.indexy) / 15), y).toLowerCase(),
          indexEnglish: getArrEnglish(Math.round((indexY - this.data.indexy) / 15), y)
        })
      }
    },
    touchend: function(e) {
      this.setData({
        indexShow: false
      })
    },

  },
})