import React from 'react';
import { render } from 'react-dom';
import Slider from '../src/index.js';
const list = [
  {
    text: 'https://aecpm.alicdn.com/simba/img/TB1JNHwKFXXXXafXVXXSutbFXXX.jpg',
    href: 'https://www.taobao.com/'
  },
  {
    text: 'http://img1.360buyimg.com/pop/jfs/t1/28969/25/13731/78443/5ca0b9caEd453c5d7/8456ec356363a406.jpg',
    href: 'https://www.jd.com/'
  },
  {
    text: 'http://img1.360buyimg.com/da/jfs/t1/28375/32/13056/100159/5c9c1a76E968a87f6/86fd143c9dfc1d0c.jpg',
    href: 'http://www.baidu.com/'
  }
]
const intervalTime = 2000;
const width = 500;
const height = 300;
const transitionTime = '2s';
const A = <div>
  <Slider list={list} intervalTime={intervalTime} width={width} height={height} transitionTime={transitionTime} />
</div>
render(A, document.getElementById('root'));
