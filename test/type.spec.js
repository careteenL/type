import 'mocha'
import { expect } from 'chai'

import type from '../src/index'

describe('type not strict mode', () => {
  it('type(1) => number', () => {
    expect(type(1)).to.equal('number')
    expect(typeof 1).to.equal('number')
  })

  it('type("") => string', () => {
    expect(type('')).to.equal('string')
    expect(typeof '').to.equal('string')
  })

  it('type(true) => boolean', () => {
    expect(type(true)).to.equal('boolean')
    expect(typeof true).to.equal('boolean')
  })

  it('type(undefined) => undefined', () => {
    expect(type(undefined)).to.equal('undefined')
    expect(typeof undefined).to.equal('undefined')
  })

  it('type(null) => null', () => {
    expect(type(null)).to.equal('null')
    expect(typeof null).to.equal('object')
  })

  it('type(Symbol()) => symbol', () => {
    expect(type(Symbol())).to.equal('symbol')
    expect(typeof Symbol()).to.equal('symbol')
  })

  it('type([]) => array', () => {
    expect(type([])).to.equal('array')
    expect(typeof []).to.equal('object')
  })

  it('type({}) => object', () => {
    expect(type({})).to.equal('object')
    expect(typeof {}).to.equal('object')
  })

  it('type(new Set()) => set', () => {
    expect(type(new Set())).to.equal('set')
    expect(typeof new Set()).to.equal('object')
  })

  it('type(new Map()) => map', () => {
    expect(type(new Map())).to.equal('map')
    expect(typeof new Map()).to.equal('object')
  })

  it('type(new WeakSet()) => weakset', () => {
    expect(type(new WeakSet())).to.equal('weakset')
    expect(typeof new WeakSet()).to.equal('object')
  })

  it('type(new WeakMap()) => weakmap', () => {
    expect(type(new WeakMap())).to.equal('weakmap')
    expect(typeof new WeakMap()).to.equal('object')
  })

  it('type(function() {}) => function', () => {
    expect(type(function() {})).to.equal('function')
    expect(typeof function() {}).to.equal('function')
  })

  it('type(class A {}) => function', () => {
    expect(type(class A {})).to.equal('function')
    expect(typeof class A {}).to.equal('function')
  })

  it('type(/a/) => regexp', () => {
    expect(type(/a/)).to.equal('regexp')
    expect(typeof /a/).to.equal('object')
  })

  it('type(new Date()) => date', () => {
    expect(type(new Date())).to.equal('date')
    expect(typeof new Date()).to.equal('object')
  })
  
  it('type(Math) => math', () => {
    expect(type(Math)).to.equal('math')
    expect(typeof Math).to.equal('object')
  })
  
  it('type(new Promise(function(){})) => promise', () => {
    expect(type(new Promise(function(){}))).to.equal('promise')
    expect(typeof new Promise(function(){})).to.equal('object')
  })  
})

describe('type in strict mode', () => {
  it('type(new Number(1), true) => Number', () => {
    expect(type(1)).to.equal('number')
    expect(type(new Number(1))).to.equal('number')
    expect(type(new Number(1), true)).to.equal('Number')
    expect(typeof new Number(1)).to.equal('object')
  })

  it('type(new String(""), true) => String', () => {
    expect(type('')).to.equal('string')
    expect(type(new String(''))).to.equal('string')
    expect(type(new String(''), true)).to.equal('String')
    expect(typeof new String('')).to.equal('object')
  })
  
  it('type(new Boolean(true), true) => Boolean', () => {
    expect(type(true)).to.equal('boolean')
    expect(type(new Boolean(true))).to.equal('boolean')
    expect(type(new Boolean(true), true)).to.equal('Boolean')
    expect(typeof new Boolean(true)).to.equal('object')
  })  
})