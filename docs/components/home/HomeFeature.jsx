/* jshint node: true, esnext: true */
"use strict";

var React = require('react');
var ReactCSS = require('reactcss');
var context = require('react-context');

var Container = require('../layout/Container');
var Grid = require('../layout/Grid');
var { Raised } = require('react-material-design');
var Code = require('../common/Code');


class HomeFeature extends ReactCSS.Component {

  classes() {
    return {
      'default': {
        feature: {
          boxShadow: 'inset 0 -1px 0 0 rgba(255,255,255,.2), inset 0 1px 0 0 rgba(255,255,255,.2)'
        },
        title: {
          paddingTop: '100px',
          paddingBottom: '35px',
          fontSize: '40px',
          color: '#fff'
        },
        Snippet: {
          radius: '2px 2px 0 0',
          background: '#EEEEEE'
        },
      }
    };
  }

  render() {

    var snippet =
`this.context \= \{
  pointer: '${ this.context.pointer }', // the device's primary input
  adBlock: ${ this.context.adBlock && this.context.adBlock.toString() } // There is an adblocker enabled
  focus: ${ this.context.focus && this.context.focus.toString() } // Window is focused (click your desktop)
  density: ${ this.context.density }, // The screen pixel density
  scroll: ${ this.context.scroll } // The window scroll position
  width: ${ this.context.width }, // The screen width (try resizing)
  height: ${ this.context.height }, // The screen height (try resizing)
  language: '${ this.context.language }', // The language thats set
  os: '${ this.context.os }' // The devices operating system
  browser: '${ this.context.browser }' // The devices browser
  browserVersion: '${ this.context.browserVersion }'
\}
`;

    var bg, transition;
    if (this.context.focus) {
      bg = '#2A5881';
      transition = 'background 400ms linear';
    } else {
      bg = '#666';
      transition = 'background 1000ms linear';
    }

    return (
      <div is="feature">
        <style>{`
          html, body {
            background: ${ bg };
            transition: ${ transition };
          }
          .snippet .hljs-literal {
            color: #666;
          }
          .snippet .hljs-number {
            color: #9F6EC9;
          }
        `}</style>

        <Container>
          <Grid>
            <div />
            <div className="snippet">
              <div is="title">React Context</div>
              <Raised is="Snippet">
                <Code file={ snippet } />
              </Raised>
            </div>
          </Grid>
        </Container>
      </div>
    )
  }
}


HomeFeature.contextTypes = context.subscribe();

module.exports = HomeFeature
