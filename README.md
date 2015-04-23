## Generator-NF

[![Build Status](https://travis-ci.org/krzysztofantczak/generator-nf.png)](https://travis-ci.org/krzysztofantczak/generator-nf)

Generator is a language agnostic project bootstrapping tool, more about this project on [Generator](https://github.com/thisandagain/generator) site.

### Installation

Dependencies

```bash
npm install -g generator; generate --setup
```

Installing template into generator directory

```bash
git clone https://github.com/krzysztofantczak/generator-nf.git ~/.generator/nf
```

Using our template

```bash
generator -t nf -n myProject
cd myProject
npm install -d
gulp dev
```

# License

(The MIT License)

Copyright (c) 2013 Krzysztof Antczak

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
