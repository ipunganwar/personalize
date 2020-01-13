---
name: 'Second Content'
title: How Vuex works and how I used it wrong
year: 23 January 2019
color: '#edece7'
isTextColorDark: true
trans: 'vuex-que-es-cuando-utilizarlo'
id: 'second-content'
description: |
  Vuex basics, how I make my website's performance worse using it and why
---

## What is Vuex?
In short, [Vuex](https://vuex.vuejs.org/) allows you to centralize information and features of the app that are accessible through any component.

## What problem does it solve?

When you work with a library like Vue, the component information is transported from a parent component to a child component through "props" and vice versa through emiting an event that the parent component will hear. Sometimes you need to access information from one component to another which don't have the father-son relationship. How are you going to get them to comunicate then? Technically it can be done, but it can be very complicated ending up with business logic spread all over the app which it's likely to repeat itself. This is where the centralization of that information comes in with tools such as Vuex, in Vue, or Redux, in React. You can not only centralize information but also functions.
