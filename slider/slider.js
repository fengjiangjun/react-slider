import React from 'react';
import './slider.css';
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 1
    }
  }
  componentDidMount () {
    this.refs.aa.style.width = this.props.width + "px";
    this.refs.aa.style.height = this.props.height + "px";
    this.refs.c.style.height = this.props.height + "px";
    const count = this.props.list.length;
    this.refs.c.style.width = count * this.props.width + 'px';
    this.time = setTimeout(this.loop.bind(this), this.props.intervalTime);
    this.refs.c.addEventListener('transitionend', () => {
      this.time = setTimeout(this.loop.bind(this), this.props.intervalTime);
      if (this.state.index == 4) {
        this.refs.c.style.transition = '0s';
        this.refs.c.style.transform = 'translateX(0px)';
        this.state.index = 1;
      }
    })
  }
  loop () {
    if (this.state.index < 4) {
      this.refs.c.style.transition = this.props.transitionTime;
      this.refs.c.style.transform = 'translateX(' + (-this.state.index * this.props.width) + 'px)';
    }
    this.setState(prevState => ({
      index: prevState.index + 1
    }))
  }
  render () {
    return <div className='a' ref='aa'><div className='b' ref='c'>
      {this.props.list.map(item => {
        return <img src={item.text} style={{ width: this.props.width }} className='d' onClick={() => { window.open(item.href); }} />

      })}
    </div>
      <div className="round-container">
        {this.props.list.map(
          (item, index) => {
            if (index == this.props.list.length - 1) {
              return null;
            }
            if (this.state.index - 1 === index && this.state.index !== (this.props.list.length)) {
              return <div className="yello"></div>
            }
            if (this.state.index == (this.props.list.length) && index == 0) {
              return <div className="yello"></div>
            }

            return <div className='red' onClick={() => { clearTimeout(this.time); this.setState({ index: index }); this.time = setTimeout(this.loop.bind(this), 0); }}>

            </div>
          })}
      </div>
    </div>

  }
}
