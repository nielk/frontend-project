# Gojob Frontend

## Intro

__Hello you kind sir/madam !__

And welcome to this little project which is meant for you to show us your skills and abilities and this document will be your guide into this task.

The objective of this project is to create an `Authentication page` (which will be introduced later) and to present it to us in about an hour. It's quite short, but do not worry, we'll help you to bootstrap almost everything!

> Please take your time to create/test/take care of the architecture/etc. ! We are here to assess your coding and problem solving skills so a fully functionnal project is a bonus, not an objective ;)

## Objectives

### Technical intro

We took care of creating a stable boilerplate, based on the excellent [wmonk's create-react-app-ts](https://github.com/wmonk/create-react-app-typescript) with extra components, configuration, and love! ♥️

You'll have to use the following libraries (already included in package.json) in order to achieve your objectives:

 - [REQUIRED] First of all, the one and only [`react`@16.4](https://reactjs.org/).
 - [REQUIRED] [`redux`](https://redux.js.org/) (vanilla or not), with [`react-redux`](https://github.com/reduxjs/react-redux).
 - [OPTIONAL] The usage of [`typescript`](http://www.typescriptlang.org/) is optional, but is encouraged. You can use javascript files in our boilerplate without troubles ;).
 - [OPTIONAL] Some CSS-in-JS would be great but it's not required (we use [`emotion`](https://emotion.sh/) and are quite happy about it).

### Visual support and styling of `Authentication page`

Our best friends, UI/UX of Gojob, and namely Jordane are creating beautyful visual aids for us, complete with layout grid and css for the best dev experience possible.

You can find the visual you'll have to create for the `Authentication page` right [here, on Zeplin.io](https://app.zeplin.io/project/5b914c8905575c52ba17c7cc) with credentials you've received by email.

> [OPTIONAL] Please, focus on the `mobile-first` approach, but we still want to see _some_ responsiveness ;)

> (Please do not care about the "`< Retour`" button).

### API

In order to be able to login into something, you'll surely need an API to respond to your queries 😛. We have an specially emitted API, with the `/foc/login` - this is the one (obviously) that you'll have to POST to in order to login.

You'll find the [Swagger](https://swagger.io/) here - [`https://gojob-api-review-foc-api-li-4ylolh.gojob.tech/docs/`](https://gojob-api-review-foc-api-li-4ylolh.gojob.tech/docs/).

 - [REQUIRED] You must be able to log in to `/foc/login` with credentials you've received by email. 
 - [REQUIRED] You must display an error message if something goes wrong.
 - [REQUIRED] You must store and retrieve at least the `authentication token` (`res.auth.token`) value in browser's persistant storage in order to create a persistant connection.

## Existing components

It's quite a task we are asking you to accomplish, so in order to help you, we've included some hand made and production ready components we are currently using in our developments.

> `src/components/*` is the path which contains some components that you'll find useful for your dev.

We also have some interactive demo for you which is powered by [`react-styleguidist`](https://react-styleguidist.js.org/) that you can launch with the following cmd:

```bash
  > yarn styleguidist
```

## Submitting your work

In order to submit your work, you must simply fork this project or send us your code in any other way.

## Final thoughts

Please, let us know if you miss something or you have some issues with launching of this boilerplate, visual Zeplin guide or entirely something else ;)

__Happy coding!!__

## TL;DR

```bash
  > yarn start
  > yarn styleguidist
  > # ???
  > # profit!!
```