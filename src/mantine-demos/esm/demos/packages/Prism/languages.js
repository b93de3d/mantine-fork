import React from 'react';
import { Tabs, Tab } from '@mantine/core';
import { Prism } from '@mantine/prism';

const go = `
package main

import "fmt"

func main() {
    ch := make(chan float64)
    ch <- 1.0e10    // magic number
    x, ok := <- ch
    defer fmt.Println(\`exitting now\`)
    go println(len("hello world!"))
    return
}
`.trim();
const py = `
@requires_authorization
def somefunc(param1='', param2=0):
    r'''A docstring'''
    if param1 > param2: # interesting
        print 'Gre\\'ater'
    return (param2 - param1 + 1 + 0b10l) or None

class SomeClass:
    pass

>>> message = '''interpreter
... prompt'''
`.trim();
const css = `
@font-face {
  font-family: Chunkfive; src: url('Chunkfive.otf');
}

body, .usertext {
  color: #F0F0F0; background: #600;
  font-family: Chunkfive, sans;
  --heading-1: 30px/32px Helvetica, sans-serif;
}

@import url(print.css);
@media print {
  a[href^=http]::after {
    content: attr(href)
  }
}
`.trim();
const sql = `
CREATE TABLE "topic" (
  "id" serial NOT NULL PRIMARY KEY,
  "forum_id" integer NOT NULL,
  "subject" varchar(255) NOT NULL
);
ALTER TABLE "topic"
ADD CONSTRAINT forum_id FOREIGN KEY ("forum_id")
REFERENCES "forum" ("id");

-- Initials
insert into "topic" ("forum_id", "subject")
values (2, 'D''artagnian');
`.trim();
function Demo() {
  const prismStyles = {
    code: { borderRadius: 0 }
  };
  return /* @__PURE__ */ React.createElement(Tabs, {
    tabPadding: 0
  }, /* @__PURE__ */ React.createElement(Tab, {
    label: "Go"
  }, /* @__PURE__ */ React.createElement(Prism, {
    language: "go",
    styles: prismStyles
  }, go)), /* @__PURE__ */ React.createElement(Tab, {
    label: "SQL"
  }, /* @__PURE__ */ React.createElement(Prism, {
    language: "sql",
    styles: prismStyles
  }, sql)), /* @__PURE__ */ React.createElement(Tab, {
    label: "Python"
  }, /* @__PURE__ */ React.createElement(Prism, {
    language: "python",
    styles: prismStyles
  }, py)), /* @__PURE__ */ React.createElement(Tab, {
    label: "CSS"
  }, /* @__PURE__ */ React.createElement(Prism, {
    language: "css",
    styles: prismStyles
  }, css)));
}
const languages = {
  type: "demo",
  component: Demo
};

export { css, go, languages, py };
//# sourceMappingURL=languages.js.map
