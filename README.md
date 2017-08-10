# io-monitoring-dashboard
> Real-time dashboard for interacting with monitoring APIs

![React SocketIO dashboard](https://www.valentinog.com/img/socket-io-monitoring-dashboard.png)

**io-monitoring-dashboard** is a minimal React dashboard for interacting with both Icinga2 and the WHM APIs. The application contacts the underlying [io-monitoring-proxy](https://github.com/valentinogagliardi/io-monitoring-proxy), gets the data by the means of a Socket.IO client and updates its state. Check out [Going real time with Socket.IO, Node.Js and React](https://www.valentinog.com/blog/socket-io-node-js-react/) for an introduction.

Companion proxy: [io-monitoring-proxy](https://github.com/valentinogagliardi/io-monitoring-proxy)

The project is mainly experimental and for demo purposes, not suitable for production use.

## Installation

1. Clone the repo

2. Install the dependencies with `npm i`

## Configuration

Follow the instructions on [io-monitoring-proxy](https://github.com/valentinogagliardi/io-monitoring-proxy) for configuring and setting up the proxy

## Usage

Start the app by running:

```bash
npm start
```

## Development

Start the app in development mode by running:

```
npm start
```

## Meta

Valentino Gagliardi - [valentinog.com](https://www.valentinog.com) - valentino@valentinog.com