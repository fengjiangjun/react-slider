import React from 'react';
import { render } from 'react-dom';
import SRC from '../SRC/src.js';
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
  },
  {
    text: 'https://aecpm.alicdn.com/simba/img/TB1JNHwKFXXXXafXVXXSutbFXXX.jpg',
    href: 'https://www.taobao.com/'
  }
]
const B = 2000;
const D = '500px';
const E = '300px';
const C = '2s';
const A = <div>
  <SRC list={list} B={B} C={C} D={D} E={E} />
</div>
render(A, document.getElementById('root'));