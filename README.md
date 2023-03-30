# MRE

This repository aims to be a minimal reproducing example for these and related issues:

- https://github.com/framer/motion/issues/1850
- https://github.com/framer/motion/issues/1375

In particular, this repository implements the approach suggested in [this comment](https://github.com/framer/motion/issues/1850#issuecomment-1445239322), which turns out to not work correctly, namely Next.js ["replaces the contents before the exit animation plays"](https://github.com/framer/motion/issues/1850#issuecomment-1446814292).

To reproduce the bad behaviour, start the application with `npm run dev` and visit `localhost:3000/foo`, then click on `link to bar`. You'll see that the box turns grey before it flies away.
