# react 轮播图组件

>前段时间使用原生 JS 实现了一个轮播图插件，现在在 React  的基础上，重新实现了一个组件。

* [源码](https://github.com/fengjiangjun/react-slider)

* [演示](https://fengjiangjun.github.io/react-slider/dist/index.html)
## 正文
本文介绍一个基于 React 框架实现的轮播图组件。
### 需求文档
* 需求
  * 能够实现自左往右规律性轮播。
  * 轮播到最后一张图时，能够无缝衔接到第一张图。
  * 缩略小圆点能够跟随相对的图片轮播。
  * 鼠标放到图片会停止轮播。
  * 鼠标点击缩略小圆点轮播图也会跳转的相应的图片。
  * 点击图片能够跳转到相对的地址。
* 开发需求
  * 如果没有传入 width 和height，那么取父容器的尺寸作为轮播容器的尺寸。
  * 支持图片和点击链接的配置。
  * 支持轮播过渡时间的配置。
  * 支持轮播间隔的配置。
  * 支持轮播图所在容器的配置。
  * 支持缩略圆点样式配置。

### 设计方案

* 定义一个轮播图组件类。
* 实例化一个轮播图对象，接收一些外部属性 props：
  * list
    * 图片对象数组
      * text：图片地址。
      * href：跳转链接。
  * intervalTime
    * 轮播的间隔时间。
  * transitionTime
    * 轮播过渡的间隔时间。
  * width 
    * 显示容器或图片的宽度。
  * height
    * 显示容器或图片的高度。
  * roundClassName
    * 默认圆点样式
  * roundActiveClassName
    * 激活圆点样式
### 初始化方法做的事
  * 定义一个state对象，用 index 属性计数。
### 第一次渲染前方法做的几件事情
  * 获取数组的长度
  * 定义显示容器的大小，
  * 定义图片容器的宽度和高度。
  * 添加一个定时器
  * 添加定时器执行的loop方法
  * 在轮播图容器中加一个过度动画结束的事件监听器，每当过渡动画结束时候再启动一个定时器，接着执行loop方法。当轮播到最后一张图片时，设置容器的过度时间为 0 秒，使得容器瞬间跳转到第一张图片所在的位置。index数据也会回到初始值，这样才能达到无缝滚动。
### loop方法做的事情
  * 定义了除最后一张图片其他图片的过渡时间。
  * 定义了除最后一张图片其他图片的平移方向大小。
  * 每次轮播完成后index数据就会加1。
### 渲染方法做的事情
  * 生成的显示容器、轮播图容器以及轮播的的图片。
  * 添加轮播图的点击事件，鼠标左键点击轮播图中的图片时会跳转相应地址链接。
  * 生成缩略小圆点，缩略小圆点会随着轮播图滚动。对应轮播图图片的小圆点为黄色，其余为红色。
  * 添加缩略小圆点的点击事件,当鼠标左键点击到红色缩略小圆点的时候，轮播图也会跳转到相应的图片。
### 编码实现
  * 定义react组件类的方法。
  * 利用react的componentDidMount生命周期。
  * 利用setTimeout定时器。
  * 利用this.props传递组件所需要的属性。
  * 利用addEventListener添加监听事件。
  * 利用CSS中transform和transition的使用方法。



  