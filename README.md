# [type](https://github.com/careteenL/type)
[![](https://img.shields.io/badge/Powered%20by-type-brightgreen.svg)](https://github.com/careteenL/type)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/careteenL/type/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/careteenL/type.svg?branch=master)](https://travis-ci.org/careteenL/type)
[![npm](https://img.shields.io/badge/npm-0.1.2-orange.svg)](https://www.npmjs.com/package/@careteen/type)
[![NPM downloads](http://img.shields.io/npm/dm/@careteen/type.svg?style=flat-square)](http://www.npmtrends.com/@careteen/type)

[English Document](./README.en_US.md)

JavaScript类型检查，弥补`typeof`不足

## 快速使用

NPM
```shell
npm i -D @careteen/type
```

```js
import type from '@careteen/type'
type(null) // null
type(/a/) // regexp
type(new String('')) // string
type(new String(''), true) // String
```

or CDN
```js
<script src='https://unpkg.com/@careteen/type/dist/index.js'></script>
<script>
  var type = window['@careteen/type']
  type(null) // null
  type(/a/) // regexp
  type(new String('')) // string
  type(new String(''), true) // String  
</script>
```
更详细使用请查看[API](./doc/api.md)

## 兼容性

None

## 使用文档

- [API](./doc/api.md)
- [对该库的源码解析](xxx)

## issue模板

- [Issue Template](./ISSUETEMPLATE.md)

## 贡献者及指南

clone仓库并引入依赖
```shell
git clone git@github.com:careteenL/type.git
npm install
```
开始开发：）

...

编写详细使用文档介绍功能，可在本地查看`http://127.0.0.1:8880`
```shell
npm run doc
```
请编写单元测试覆盖所加功能
```shell
npm run test
```
启动本地服务器编写示例
```shell
npm run example
```
修改`package.json README.md CHANGELOG.md`版本号，再发布
```shell
npm run release
```

- [Contributors](https://github.com/careteenL/type/graphs/contributors)

## 更新日志

- [Changelog](./CHANGELOG.md)

## 计划

- [Todo](./TODO.md)
