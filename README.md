
# FEC

# Atelier

> Aterlier is a front-end application displaying mock data from a real API to construct a user-friendly retail website. Based off of [this mockup](https://xd.adobe.com/view/e600dc0f-454c-44e3-5075-7872d04189ff-9031/?fullscreen) and [these business requirements](http://www.mks.io/catwalk-brd)

## [Our Github Organization](https://github.com/FEC3-perrier)

## Table of Contents

1. [Features](#Features)
1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Features

# Product Overview - Vinny
A view of the current product on display with image carousel and ability to select style, size, and quantity of product.

# Related Outfits and Your Outfits - Michael
- A section that displays information based on the related outfits for the main product being displayed
- Users can save the current product to an outfit or delete an existing product from the outfit.
![ezgif com-video-to-gif](https://github.com/mcuellar98/FEC/assets/100256151/e9cb6ca8-3e31-4ce8-b506-595f8091d16e)

# Quesetions and Ansers - Michael
- A section to display question about the product and answers to those question, sorted by helpfulness.
- Users may mark both questions and answers as reported or helpful.
- Users can collapse and expand questions and answers to see more of either.
- Contains modal for adding either question or answers and the ability to add images to an answer.
![ezgif com-video-to-gif (2)](https://github.com/mcuellar98/FEC/assets/100256151/fe384ddf-8e69-467e-a010-3985bdde39fb)
![ezgif com-video-to-gif (3)](https://github.com/mcuellar98/FEC/assets/100256151/1a0cad2b-1388-429f-82b6-7730c3cb23b9)
![ezgif com-video-to-gif (4)](https://github.com/mcuellar98/FEC/assets/100256151/22dba804-7746-43b9-b05b-827ee04d1334)

# Ratings and Reviews - Daniel
- A section to display the ratings and reviews for a product.
- User can interact with and add ratings and review for a product.

# Home Page - Daniel
- User can select initial product to display.

## Usage

1. To run this app, first fork and clone this repo
1. [Install the dependencies](#Installing_Dependencies)
1. In the root directory run `npm run start`
1. To have your webpack changes refresh on file change, run `npm run client` in another terminal
1. Open your browser to the hosted URL outputted in the terminal

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0

## Development

This App uses React with CSS to style and render product information given from the product API.

### Installing Dependencies

This app uses the npm packages Axios, Express, Bluebird and more. To install these, from within the root directory run:

```sh
npm install -g webpack
npm install
```
