const ejs = require('ejs');
const path = require('path');
const fs = require('fs')

class Inject {
  constructor(config = {}) {
    this.config = config;
    this.manifest = typeof this.config.manifest === 'string' ? require(this.config.manifest) : this.config.manifest;
  }

  inject(html, name, locals = {}, options = {}) {
    console.log(html)
    console.log(name)
    console.log(locals)
    console.log(options)
    console.log(this.manifest)
    const deps = this.manifest[name];
    console.log(deps)
    // if (deps) {
    //   const headInject = [];
    //   const bodyInject = [];
    //   if (this.config.injectCss && (options.injectCss === undefined || options.injectCss)) {
    //     deps.css.forEach(url => {
    //       headInject.push(this.createCssLinkTag(url));
    //     });
    //   } else if (locals.styles && this.isInjectInlineResouce()) {
    //     headInject.push(locals.styles);
    //   }
    //   if (this.config.injectJs) {
    //     deps.js.forEach(url => {
    //       bodyInject.push(this.createScriptSrcTag(url));
    //     });
    //     if (this.isInjectInlineResouce() && !/window.__INITIAL_STATE__/.test(html)) {
    //       bodyInject.unshift(`<script> window.__INITIAL_STATE__= ${serialize(locals.state || locals, { isJSON: true })};</script>`);
    //     }
    //   }
    //   this.injectHead(headInject);
    //   if (this.config.injectHeadRegex) {
    //     html = html.replace(this.config.injectHeadRegex, match => {
    //       return headInject.join('') + match;
    //     });
    //   }

    //   this.injectBody(bodyInject);
    //   if (this.config.injectBodyRegex) {
    //     html = html.replace(this.config.injectBodyRegex, match => {
    //       return bodyInject.join('') + match;
    //     });
    //   }
    // }
    // if (this.config.doctype) {
    //   html = this.config.doctype + html;
    // }
    // if (this.config.afterRender) {
    //   return this.config.afterRender(html, locals);
    // }
    const htmlTemp = fs.readFileSync(path.join(__dirname, './../index.ejs'), { encoding: "utf-8" });
    return ejs.render(htmlTemp, {
      title: 'hahahah',
      html: html
    })
    return html;
  }
}

module.exports = Inject;
