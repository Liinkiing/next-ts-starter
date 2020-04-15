// https://github.com/sergiodxa/next-nprogress/blob/master/src/component.js
// Was not working with last Styled Component version, so adapted it as a component directly
import { Component } from 'react'
import NProgressLib, { NProgressOptions } from 'nprogress'
import Router from 'next/router'

interface Props {
  color?: string
  options?: Partial<NProgressOptions>
  showAfterMs?: number
  spinner?: boolean
}

export default class NProgress extends Component<Props> {
  static defaultProps = {
    color: '#2299DD',
    showAfterMs: 300,
    spinner: true,
  }

  timer = null

  routeChangeStart = () => {
    const { showAfterMs } = this.props
    clearTimeout(this.timer)
    this.timer = setTimeout(NProgressLib.start, showAfterMs)
  }

  routeChangeEnd = () => {
    clearTimeout(this.timer)
    NProgressLib.done()
  }

  componentDidMount() {
    const { options } = this.props

    if (options) {
      NProgressLib.configure(options)
    }

    Router.events.on('routeChangeStart', this.routeChangeStart)
    Router.events.on('routeChangeComplete', this.routeChangeEnd)
    Router.events.on('routeChangeError', this.routeChangeEnd)
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
    Router.events.off('routeChangeStart', this.routeChangeStart)
    Router.events.off('routeChangeComplete', this.routeChangeEnd)
    Router.events.off('routeChangeError', this.routeChangeEnd)
  }

  render() {
    const { color, spinner } = this.props

    return (
      <style jsx global>{`
        #nprogress {
          pointer-events: none;
        }
        #nprogress .bar {
          background: ${color};
          position: fixed;
          z-index: 1031;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
        }
        #nprogress .peg {
          display: block;
          position: absolute;
          right: 0px;
          width: 100px;
          height: 100%;
          box-shadow: 0 0 10px ${color}, 0 0 5px ${color};
          opacity: 1;
          -webkit-transform: rotate(3deg) translate(0px, -4px);
          -ms-transform: rotate(3deg) translate(0px, -4px);
          transform: rotate(3deg) translate(0px, -4px);
        }
        #nprogress .spinner {
          display: ${spinner ? 'block' : 'none'};
          position: fixed;
          z-index: 1031;
          top: 15px;
          right: 15px;
        }
        #nprogress .spinner-icon {
          width: 18px;
          height: 18px;
          box-sizing: border-box;
          border: solid 2px transparent;
          border-top-color: ${color};
          border-left-color: ${color};
          border-radius: 50%;
          -webkit-animation: nprogresss-spinner 400ms linear infinite;
          animation: nprogress-spinner 400ms linear infinite;
        }
        .nprogress-custom-parent {
          overflow: hidden;
          position: relative;
        }
        .nprogress-custom-parent #nprogress .spinner,
        .nprogress-custom-parent #nprogress .bar {
          position: absolute;
        }
        @-webkit-keyframes nprogress-spinner {
          0% {
            -webkit-transform: rotate(0deg);
          }
          100% {
            -webkit-transform: rotate(360deg);
          }
        }
        @keyframes nprogress-spinner {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    )
  }
}
