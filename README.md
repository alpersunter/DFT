# Discrete Fourier Transform

_This project will be resumed after I read "Mastering the Discrete Fourier Transform in One, Two or Several Dimensions: Pitfalls and Artifacts" by Isaac Amidror_

Wrap the signal around unit complex circle!

This is inspired by 3B1B's Fourier transform video.

You can find .gif files under folder called *gifs* and p5 sketches used to create them under folder called *animations*. 
I am using ezgif.com for editing gifs and codecogs.com to create latex equations.

## How it works?

Imagine taking a function and wrapping it around a circle. What! What does "wrapping" even mean in this context? 
It might surprise you how useful it is to roll signals around a circle and observe the distribution of the wrapped signal on complex plane. This is called the Fourier (pronounced FOUR' - EE - AYE) Transform.<sup>1</sup> It is mainly used in frequency analysis and I do not want to bore you with ugly language.

For convenience let's pick a unit circle on the complex plane. (We could have used, esentially, any 2-dimensional vector space but math books and everyone I know uses complex form for some reason -It works though, I shouldn't complain)

![Complex Unit Circle Animation](gifs/Complex%20Unit%20Circle.gif)

<a href="https://editor.p5js.org/alpersunter1@gmail.com/present/cX1xOPs8w" target="_blank">Interactive version of this gif?</a>


# I will continue later ...


<a href="https://www.codecogs.com/eqnedit.php?latex=\dpi{150}&space;\large&space;y[n]=\sum_{k}x[n]\cdot&space;e^{i2\pi&space;kn/N}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?\dpi{150}&space;\large&space;y[n]=\sum_{k}x[n]\cdot&space;e^{i2\pi&space;kn/N}" title="\large y[n]=\sum_{k}x[n]\cdot e^{i2\pi kn/N}" /></a>

--------
<sup>1</sup>:post by Bruce Bates at https://forums.parallax.com/discussion/87669/how-do-you-pronounce-fourier-as-in-fourier-transform
