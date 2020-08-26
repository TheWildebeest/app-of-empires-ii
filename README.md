The app that I was sure someone else would have made by now, but which I had the pleasure of making myself. (For personal use only.)

## Why App Of Empires II?

I play Age Of Empires II HD Edition with friends and family on occasion.

We usually play "random civiliations" so that noone has an unfair advantage.

However, one person in particular seems to receive the favour of the odds rather regularly.

I never remember which civs have which strengths—so rather than learn them all off by heart (it is just a game after all), I thought
it'd be nice to be able to look them up quickly on my phone.

## What about App Of Empires I?

What about it?

App Of Empires II is for Age Of Empires II. There was never an App Of Empires I.

Do you want to make a prequel app?

If you do, let me know!


## How does it work?

It was supposed to be so simple! A glorified API call with beautiful styling, if I do say so myself.

But then, horror of horrors, the API I was using stopped working!

ITo be honest though, it had been an almighty faff anyway, using less than satisfactory methods to get around CORS restrictions and whatnot.

So, after a weekend building the front-end, the backend broke and I was put in the actually rather useful position of having to build my own.

As luck would have it, that was the very week that I learned Node on the \_nology software development bootcamp.

I built the API as a separate project, "Api Of Empires II", which I built in Node Express and deployed with Firebase Functions.

### Setting up your own "App of Empires II"

If you *really* must have an App of Empires to call your own, just clone down the repo and add the dependencies.

```
$ git clone https://github.com/TheWildebeest/app-of-empires-ii.git
$ yarn install
$ yarn start
```
You can either link this to the static data file, or to the Api Of Empires, for making the app functional. If you are cloning both repos, add them to the same firebase project so you have the hosting and firebase functions all in one place on the firebase console.
