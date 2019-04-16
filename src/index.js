import React from 'react';
import './index.css';
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 1,
      width: 0,
      height: 0
    }
    this.container = React.createRef();
    this.imgWrapper = React.createRef();
    this.list = this.props.list;

    this.list.push(this.props.list[0]);

  }
  componentDidMount () {
    if (!this.list) {
      return;
    }
    const parent = this.container.current.parentNode;
    this.setState({
      width: this.props.width || parent.clientWidth,
      height: this.props.height || parent.clientHeight
    }, () => {
      this.container.current.style.width = this.state.width + "px";
      this.container.current.style.height = this.state.height + "px";
      this.imgWrapper.current.style.height = this.state.height + "px";
      const count = this.list.length;
      this.imgWrapper.current.style.width = count * this.state.width + 'px';
      this.time = setTimeout(this.loop.bind(this), this.props.intervalTime || 2000);
      this.imgWrapper.current.addEventListener('transitionend', () => {
        this.time = setTimeout(this.loop.bind(this), this.props.intervalTime || 2000);
        if (this.state.index == count) {
          this.imgWrapper.current.style.transition = '0s';
          this.imgWrapper.current.style.transform = 'translateX(0px)';
          this.state.index = 1;
        }
      })
    });

  }
  loop () {
    if (this.state.index < this.list.length) {
      this.imgWrapper.current.style.transition = this.props.transitionTime || '2s';
      this.imgWrapper.current.style.transform = 'translateX(' + (-this.state.index * this.state.width) + 'px)';
    }
    this.setState(prevState => ({
      index: prevState.index + 1
    }))
  }
  render () {
    return <div className='container' ref={this.container}><div className='img-wrapper' ref={this.imgWrapper}>
      {this.list.map(item => {
        return <img src={item.text} style={{ width: this.state.width }} className='img-item' onClick={() => { window.open(item.href); }} />

      })}
    </div>
      <div className="round-container">
        {this.list.map(
          (item, index) => {
            if (index == this.list.length - 1) {
              return null;
            }
            if (this.state.index - 1 === index && this.state.index !== (this.list.length)) {
              return <div className={(this.props.roundActiveClassName || '') + " yello"}></div>
            }
            if (this.state.index == (this.list.length) && index == 0) {
              return <div className={(this.props.roundActiveClassName || '') + " yello"}></div>
            }

            return <div className={(this.props.roundClassName || '') + " red"} onClick={() => { clearTimeout(this.time); this.setState({ index: index }); this.time = setTimeout(this.loop.bind(this), 0); }}>
            </div>
          })}
      </div>
    </div>

  }
}
