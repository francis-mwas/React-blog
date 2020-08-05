import { Component } from "react";
import Prism from "prismjs";

import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js";

import Header from "../../components/header.js";
import Footer from "../../components/footer.js";

export default class extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    return (
      <div className="layout-wrapper">
        <Header />
        <div className="blog-post-container">
          <div className="blog-post-top-section">
            <h1>Your Blog Post Title</h1>
            <div className="blog-post-top-meta">
              <span>5/1/2020</span>
              <a className="blog-post-top-tag-btn" href="/blog/tags/javascript">
                <span>javascript</span>
              </a>
              <a className="blog-post-top-tag-btn" href="/blog/tags/css">
                <span>css</span>
              </a>
            </div>
          </div>
          <div className="blog-post-body-content">
            <p>Blog post content will go here!</p>

            <h2>h2 Section Heading</h2>
            <h3>h3 Section Heading</h3>
            <h4>h4 Section Heading</h4>
            <h5>h5 Section Heading</h5>
            <hr />
            <p>
              A short paragraph with a link to{" "}
              <a href="https://www.google.com">Google</a>.
            </p>
            <p>
              An example of a longer paragraph that will be used in your blog
              posts when you create your own website or blog. And add as much
              additional content here as you want. An example of a longer
              paragraph that will be used in your blog posts when you create
              your own website or blog. Also an example of a{" "}
              <a href="https://www.google.com">link could go here</a>.
            </p>
            <p>
              An example of a longer paragraph that will be used in your blog
              posts when you create your own website or blog. And add as much
              additional content here as you want. An example of a longer
              paragraph that will be used in your blog posts when you create
              your own website or blog. Also an example of a{" "}
              <a href="https://www.google.com">link could go here</a>.
            </p>
            <hr />
            <p>Ordered List:</p>
            <ol>
              <li>A sentence goes here.</li>
              <li>
                A short code snippet: <code>code snippet</code>
              </li>
              <li>
                A link inside a unordered list bullet{" "}
                <a href="https://www.google.com">Google</a>
              </li>
            </ol>
            <hr />
            <h2>HTML5</h2>
            <div className="blog-post-body-code-snippet">
              <nav className="blog-post-body-code-snippet-header">
                <span>example.html</span>
              </nav>
              <pre className="line-numbers language-html">
                <code className="html language-html">
                  {`
          <div>
            <p>Html code example</p>
          </div>
        `}
                </code>
              </pre>
            </div>
            <hr />
            <h2>CSS3</h2>
            <div className="blog-post-body-code-snippet">
              <nav className="blog-post-body-code-snippet-header">
                <span>example.css</span>
              </nav>
              <pre className="line-numbers language-css">
                <code className="css language-css">
                  {`
          body {
            text-transform: uppercase;
            margin: 0;
          }
        `}
                </code>
              </pre>
            </div>
            <hr />
            <h2>JAVASCRIPT</h2>
            <div className="blog-post-body-code-snippet">
              <nav className="blog-post-body-code-snippet-header">
                <span>example.js</span>
              </nav>
              <pre className="line-numbers language-js">
                <code className="js language-js">
                  {`
          // Set your secret key: remember to switch to your live secret key in production
          // See your keys here: https://dashboard.stripe.com/account/apikeys

          const stripe = require('stripe')('sk_test_hZIksNuZZMXLLFn8q5LtPDAm00Y6r5kUg7')

          (async () => {
            const paymentIntent = await stripe.paymentIntents.create({
              amount: 1099,
              currency: 'usd',
            })
          })()
        `}
                </code>
              </pre>
            </div>
            <hr />
            <h2>BASH/TERMINAL</h2>
            <div className="blog-post-body-code-snippet">
              <nav className="blog-post-body-code-snippet-header">
                <span>Terminal</span>
              </nav>
              <pre className="line-numbers language-bash">
                <code className="bash language-bash">
                  {`
                    npm install react
                    sudo apt install nginx
                    sudo systemctl restart nginx
                    sudo nano /etc/nginx/sites-available/default
                    sudo nginx -t
                    sudo service nginx restart
                    `}
                </code>
              </pre>
            </div>
            <hr />
            <h2>IMAGES</h2>
            <img src="https://assets.coderrocketfuel.com/css-article-image.png" />
            <hr />
            <h2>BLOCKQUOTE</h2>
            <blockquote>
              Warning or special message that you want to stand out should be
              placed in this blockquote element.
            </blockquote>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
