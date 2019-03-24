import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="wrapper-bg">
        <div id="wrapper">
          <div id="header" class="container">

            <div id="logo">
              <h1><a href="#"><span>{this.props.content.logo[0]}</span>{this.props.content.logo[1]}</a></h1>
            </div>

            <div id="menu">
              <ul>
                {
                  this.props.content.menu.map(
                    e => <li><a href="#" accessKey={this.props.content.menu.indexOf(e) + 1} title="">{e}</a></li>
                  )
                }
              </ul>
            </div>

          </div>

          <div id="banner" class="container"><img src="./images/header-photo.jpg" width="1200" height="400" alt="" /></div>

          <div id="three-column" class="container">
            <header>
              <h2>Three columns</h2>
            </header>{
              this.props.content.columnContent.map(
                e =>
                  <div className={"tbox" + (this.props.content.columnContent.indexOf(e) + 1)}>
                    <div class={"box-style box-style0" + (this.props.content.columnContent.indexOf(e) + 1)}>
                      <div class="content">
                        <a href="#" class="image image-full">
                          <img src={"./images/img0" + (this.props.content.columnContent.indexOf(e) + 1) + ".jpg"} alt="" />
                        </a>
                        <h2>{e["header"]}</h2>
                        <p>{e["content"]}</p>
                        <a href="#" class="button-style">Learn More</a>
                      </div>
                    </div>
                  </div>
              )
            }
          </div>

          <div id="page">
            <div id="content"></div>
            <div id="sidebar"></div>
          </div>
        </div>

        <div id="footer-content" class="container">
          <div id="fbox1">
            <h2>Recent Updates</h2>
            <ul class="style3">{
              this.props.content.updateList.map(
                e => {

                  let isFirst = (this.props.content.updateList.indexOf(e) === 0);
                  let liNode;

                  //Can't find a better way to add class dynamically at this time.
                  if (isFirst)
                    liNode =
                      <li className="first">
                        <p class="date"><a href="#">{e["month"]}<b>{e["date"]}</b></a></p>
                        <h3>{e["header"]}</h3>
                        <p><a href="#">{e["content"]}</a></p>
                      </li>;
                  else
                    liNode =
                      <li>
                        <p class="date"><a href="#">{e["month"]}<b>{e["date"]}</b></a></p>
                        <h3>{e["header"]}</h3>
                        <p><a href="#">{e["content"]}</a></p>
                      </li>;

                  return liNode;
                }
              )
            }
            </ul>
          </div>
          <div id="fbox2">
            <h2>About</h2>
            <p>This is<strong> Endearing Green</strong>, a free, fully standards-compliant CSS template designed by <a href="http://templated.co" rel="nofollow">TEMPLATED</a>. This free template is released under the <a href="http://creativecommons.org/licenses/by/3/">Creative Commons Attribution</a> license, so you're pretty much free to do whatever you want with it (even use it commercially) provided you give us credit for it. Have fun :)</p>
            <a href="#" class="button-style">Ipsum feugiat consequat</a> </div>
          <div id="fbox3">
            <h2>Contact</h2>
            <p>Nam erat a posuere laoreet eget nibh sodales adipiscing. Phasellus tristique dui.</p>
            <ul class="style5">{
              this.props.content.contactList.map(
                e => {

                  let isFirst = (this.props.content.contactList.indexOf(e) === 0);
                  let liNode;

                  //Can't find a better way to add class dynamically at this time.
                  if (isFirst)
                    liNode =
                      <li className="first">
                        <span class={e[0]}>{e[0].charAt(0).toUpperCase() + e[0].slice(1)}</span>
                        <span class={e[0] + "-01"}>
                          <a href="#">{e[1]}</a>
                        </span>
                      </li>;
                  else
                    liNode =
                      <li>
                        <span class={e[0]}>{e[0].charAt(0).toUpperCase() + e[0].slice(1)}</span>
                        <span class={e[0] + "-01"}>
                          <a href="#">{e[1]}</a>
                        </span>
                      </li>;

                  return liNode;
                }
              )
            }
            </ul>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
