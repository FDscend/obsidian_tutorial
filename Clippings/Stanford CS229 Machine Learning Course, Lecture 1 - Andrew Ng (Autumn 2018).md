---
title: "Stanford CS229: Machine Learning Course, Lecture 1 - Andrew Ng (Autumn 2018)"
source: "https://www.youtube.com/watch?v=4b4MUYve_U8&list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU&index=2"
author:
  - "[[@DeepakSingh-uf5vv]]"
published:
created: 2026-04-17
description: "For more information about Stanford’s Artificial Intelligence professional and graduate programs, visit: https://stanford.io/aiListen to the first lecture in..."
tags:
  - "clippings"
---
![](https://www.youtube.com/watch?v=4b4MUYve_U8)

## Transcript

### Intro

**0:03** · Morning and welcome back.

**0:06** · So what we'll see today in class is the first in-depth discussion of a learning algorithm, linear regression, and in particular, over the next, what, hour and a bit you'll see linear regression, batch and stochastic gradient descent is an algorithm for fitting linear regression models, and then the normal equations, um, uh, as a way of- as a very efficient way to let you fit linear models.

**0:34** · Um, and we're going to define notation, and a few concepts today that will lay the foundation for a lot of the work that we'll see the rest of this quarter.

**0:44** · Um, so to- to motivate linear regression, it's gonna be, uh, maybe the- maybe the simplest, one of the simplest learning algorithms.

### Motivate Linear Regression

**0:52** · Um, you remember the ALVINN video, the autonomous driving video that I had shown in class on Monday, um, for the self-driving car video, that was a supervised learning problem.

**1:04** · And the term supervised learning \[NOISE\] meant that you were given Xs which was a picture of what's in front of the car, and the algorithm \[NOISE\] had to map that to an output Y which was the steering direction.

**1:19** · And that was a regression problem, \[NOISE\] because the output Y that you want is a continuous value, right?

**1:28** · As opposed to a classification problem where Y is the speed.

**1:31** · And we'll talk about classification, um, next Monday, but supervised learning regression.

**1:36** · So I think the simplest, maybe the simplest possible learning algorithm, a supervised learning regression problem, is linear regression.

**1:44** · And to motivate that, rather than using a self-driving car example which is quite complicated, we'll- we'll build up a supervised learning algorithm using a simpler example.

**1:55** · Um, so let's say you want to predict or estimate the prices of houses.

**2:01** · So \[NOISE\] the way you build a learning algorithm is start by collecting a data-set of houses, and their prices.

**2:08** · Um, so this is a data-set that we collected off Craigslist a little bit back.

**2:12** · This is data from Portland, Oregon.

**2:15** · \[NOISE\] But so there's the size of a house in square feet, \[NOISE\] um, and there's the price of a house in thousands of dollars, \[NOISE\] right?

**2:25** · And so there's a house that is 2,104 square feet whose asking price was $400,000.

**2:32** · Um, \[NOISE\] house with, uh, that size, with that price, \[NOISE\] and so on.

**2:45** · Okay? Um, and maybe more conventionally if you plot this data, there's a size, there's a price.

**2:53** · So you have some dataset like that.

**2:56** · And what we'll end up doing today is fit a straight line to this data, right?

**3:00** · \[NOISE\] And go through how to do that.

### Supervised Learning

**3:01** · So in supervised learning, um, the \[NOISE\] process of supervised learning is that you have a training set such as the data-set that I drew on the left, and you feed this to a learning algorithm, \[NOISE\] right?

**3:19** · And the job of the learning algorithm is to output a function, uh, to make predictions about housing prices.

**3:26** · And by convention, um, I'm gonna call this a function that it outputs a hypothesis, \[NOISE\] right?

**3:35** · And the job of the hypothesis is, \[NOISE\] you know, it will- it can input the size of a new house, or the size of a different house that you haven't seen yet, \[NOISE\] and will output the estimated \[NOISE\] price.

**3:50** · Okay? Um, so the job of the learning algorithm is to input a training set, and output a hypothesis.

**3:56** · The job of the hypothesis is to take as input, any size of a house, and try to tell you what it thinks should be the price of that house.

**4:04** · Now, when designing a learning algorithm, um, and- and, you know, even though linear regression, right?

**4:11** · You may have seen it in a linear algebra class before, or some other class before, um, the way you go about structuring a machine learning algorithm is important.

**4:19** · And design choices of, you know, what is the workflow?

**4:22** · What is the data-set? What is the hypothesis?

**4:24** · How does this represent the hypothesis?

**4:25** · These are the key decisions you have to make in pretty much every supervised learning, every machine learning algorithm's design.

**4:31** · So, uh, as we go through linear regression, I will try to describe the concepts clearly as well because they'll lay the foundation for the rest of the algorithms.

**4:39** · Sometimes it's much more complicated with the algorithms you'll see later this quarter.

**4:43** · So when designing a learning algorithm the first thing we need to ask is, um, \[NOISE\] how- how do you represent the hypothesis, H, right?

### Designing a Learning Algorithm

**4:55** · And in linear regression, for the purpose of this lecture, \[NOISE\] we're going to say that, um, the hypothesis is going to be \[NOISE\] that.

**5:06** · Right? That the input, uh, size X, and output a number as a- as a linear function, um, of the size X, okay?

**5:15** · And then, the mathematicians in the room, you'll say technically this is an affine function.

**5:19** · It was a linear function, there's no theta 0, technically, you know, but- but the machine learning sometimes just calls this a linear function, but technically it's an affine function. Doesn't- doesn't matter.

**5:28** · Um, so more generally in- in this example we have just one input feature X.

**5:35** · More generally, if you have multiple input features, so if you have more data, more information about these houses, such as number of bedrooms \[NOISE\] Excuse me, my handwriting is not big.

**5:50** · That's the word bedrooms, \[NOISE\] right?

**5:55** · Then, I guess- \[NOISE\] All right.

**5:59** · Yeah. Cool. My- my- my father-in-law lives a little bit outside Portland, uh, and he's actually really into real estate.

**6:05** · So this is actually a real data-set from Portland.

**6:07** · \[LAUGHTER\] Um, so more generally, uh, if you know the size, as well as the number of bedrooms in these houses, then you may have two input features \[NOISE\] where X1 is the size, and X2 is the number of bedrooms.

**6:24** · \[NOISE\] Um, I'm using the pound sign bedrooms to denote number of bedrooms, and you might say that you estimate the size of a house as, um, h of x equals, theta 0 plus theta 1, \[NOISE\] X1, plus theta 2, X2, where X1 is the size of the house, and X2 is- \[NOISE\] is the number of bedrooms.

**6:48** · Okay? Um, so in order to- \[NOISE\] so in order to simplify the notation, \[NOISE\] um, \[NOISE\] in order to make that notation a little bit more compact, um, I'm also gonna introduce this other notation where, um, we want to write a hypothesis, as sum from J equals 0-2 of theta JXJ, so this is the summation, where for conciseness we define X0 to be equal to 1, okay?

**7:38** · See we define- if we define X0 to be a dummy feature that always takes on the value of 1, then you can write the hypothesis h of x this way, sum from J equals 0-2, or just theta JXJ, okay?

**7:51** · It's the same with that equation that you saw to the upper right.

**7:55** · And so here theta becomes a three-dimensional parameter, theta 0, theta 1, theta 2.

**8:03** · This index starting from 0, and the features become a three dimensional feature vector X0, X1, X2, where X0 is always 1, X1 is the size of the house, and X2 is the number of bedrooms of the house, okay?

**8:20** · So, um, to introduce a bit more terminology.

**8:24** · Theta \[NOISE\] is called the parameters, um, of the learning algorithm, and the job \[NOISE\] of the learning algorithm is to choose parameters theta, that allows you to make good predictions about your prices of houses, right?

### Parameters of the learning algorithm

**8:44** · Um, and just to lay out some more notation that we're gonna use throughout this quarter.

**8:51** · We're gonna use a standard that, uh, M, we'll define as the number of training examples.

**9:03** · So M is going to be the number of rows, \[NOISE\] right, in the table above, um, where, you know, each house you have in your training set.

**9:15** · This one training example.

**9:17** · Um, you've already seen \[NOISE\] me use X to denote the inputs, um, and often the inputs are called features.

**9:28** · Um, you know, I think, I don't know, as- as- as a- as a emerging discipline grows up, right, notation kind of emerges depending on what different scientists use for the first time when you write a paper.

**9:39** · So I think that, I don't know, I think that the fact that we call these things hypotheses, frankly, I don't think that's a great name.

**9:45** · But- but I think someone many decades ago wrote a few papers calling it a hypothesis, and then others followed, and we're kind of stuck with some of this terminology.

**9:52** · But X is called input features, or sometimes input attributes, um, and Y \[NOISE\] is the output, right?

**10:02** · And sometimes we call this the target variable.

**10:04** · \[NOISE\] Okay.

**10:07** · Uh, so x, y is, uh, one training example.

**10:13** · \[NOISE\] Um, and, uh, I'm going to use this notation, um, x\_i, y\_i in parentheses to denote the i\_th training example.

**10:37** · Okay. So the superscript parentheses i, that's not exponentiation.

**10:42** · Uh, I think that as suppo- uh, this is- um, this notation x\_i, y\_ i, this is just a way of, uh, writing an index into the table of training examples above.

**10:53** · Okay. So, so maybe, for example, if the first training example is, uh, the size- the house of size 2104, so x\_1\_1 would be equal to 2104, right, because this is the size of the first house in the training example.

**11:10** · And I guess, uh, x, um, second example, feature one would be 1416 with our example above.

**11:19** · So the superscript in parentheses is just some, uh, uh, yes, it's, it's just the, um, index into the different training examples where i- superscript i here would run from 1 through m, 1 through the number of training examples you have.

**11:36** · Um, and then one last bit of notation, um, I'm going to use n to denote the number of features you have for the supervised learning problem.

**11:48** · So in this example, uh, n is equal to 2, right?

**11:52** · Because we have two features which is, um, the size of house and the number of bedrooms, so two features.

**11:59** · Which is why you can take this and, and write this, um, as the sum from j equals 0 to n. Um, and so here, x and Theta are n plus 1 dimensional because we added the extra, um, x\_0 and Theta\_0.

**12:23** · Okay. So- so we have two features then these are three-dimensional vectors.

**12:27** · And more generally, if you have n features, uh, you, you end up with x and Theta being n plus 1 dimensional features. All right.

**12:36** · And, you know, uh, you see this notation in multiple times, in multiple algorithms throughout this quarter.

**12:42** · So if you, you know, don't manage to memorize all these symbols right now, don't worry about it.

**12:46** · You'll see them over and over and they become familiar. All right.

**12:51** · So, um, given the data set and given that this is the way you define the hypothesis, how do you choose the parameters, right?

**13:00** · So you- the learning algorithm's job is to choose values for the parameters Theta so that it can output a hypothesis.

**13:07** · So how do you choose parameters Theta?

**13:10** · Well, what we'll do, um, is let's choose Theta such that h of x is close to y, uh, for the training examples.

**13:34** · Okay. So, um, and I think the final bit of notation, um, I've been writing h of x as a function of the features of the house, as a function of the size and number of bedrooms of the house.

**13:48** · \[NOISE\] Um, sometimes we emphasize that h depends both on the parameters Theta and on the input features x. Um, we're going to use h\_Theta of x to emphasize that the hypothesis depends both on the parameters and on the, you know, input features x, right?

**14:07** · But, uh, sometimes for notational convenience, I just write this as h of x, sometimes I include the Theta there, and they mean the same thing.

**14:14** · It's just, uh, maybe a abbreviation in notation.

**14:17** · Okay. But so in order to, um, learn a set of parameters, what we'll want to do is choose a parameters Theta so that at least for the houses whose prices you know, that, you know, the learning algorithm outputs prices that are close to what you know where the correct price is for that set of houses, what the correct asking price is for those houses.

**14:41** · And so more formally, um, in the linear regression algorithm, also called ordinary least squares.

### Linear Regression Algorithm

**14:47** · With linear regression, um, we will want to minimize, I'm gonna build out this equation one piece at a time, okay?

**14:58** · Minimize the square difference between what the hypothesis outputs, h\_Theta of x minus y squared, right?

**15:14** · So let's say we wanna minimize the squared difference between the prediction, which is h of x and y, which is the correct price.

**15:21** · Um, and so what we want to do is choose values of Theta that minimizes that.

**15:30** · Um, to fill this out, you know, you have m training examples.

**15:34** · So I'm going to sum from i equals 1 through m of that square difference.

**15:43** · So this is sum over i equals 1 through all, say, 50 examples you have, right?

**15:48** · Um, of the square difference between what your algorithm predicts and what the true price of the house is.

**15:54** · Um, and then finally, by convention, we put a one-half there- put a one-half constant there because, uh, when we take derivatives to minimize this later, putting a one-half there would make some of the math a little bit simpler.

**16:07** · So, you know, changing one- adding a one-half.

**16:09** · Minimizing that formula should give you the same as minimizing one-half of that but we often put a one-half there so to make the math a little bit simpler later, okay?

**16:18** · And so in linear regression, we're gonna define the cost function J of Theta to be equal to that.

**16:28** · And, uh, \[NOISE\] we'll find parameters Theta that minimizes the cost function J of Theta, okay?

**16:39** · Um, and, the questions I've often gotten is, you know, why squared error?

**16:44** · Why not absolute error, or this error to the power of 4?

**16:47** · We'll talk more about that when we talk about, um, uh, when, when, when we talk about the generalization of, uh, linear regression.

**16:56** · Um, when we talk about generalized linear models, which we'll do next week, you'll see that, um, uh, linear regression is a special case of a bigger family of algorithms called generalizing your models.

**17:06** · And that, uh, using squared error corresponds to a Gaussian, but the- we, we, we'll justify maybe a little bit more why squared error rather than absolute error or errors to the power of 4, uh, next week.

**17:20** · So, um, let me just check, see if any questions, \[NOISE\] at this point. No, okay. Cool.

**17:41** · All right. So, um, so let's- next let's see how you can implement an algorithm to find the value of Theta that minimizes J of Theta.

**18:01** · That- that minimizes the cost function J of Theta.

**18:04** · Um, we're going to use an algorithm called gradient descent.

### Gradient Descent

**18:12** · And, um, you know, this is my first time teaching in this classroom, so trying to figure out logistics like this.

**18:20** · All right. Let's get rid of the chair.

**18:22** · Cool, um, all right.

**18:27** · And so with, uh, gradient descent we are going to start with some value of Theta, um, and it could be, you know, Theta equals the vector of all zeros would be a reasonable default.

**18:44** · We can initialize it randomly, the count doesn't really matter.

**18:46** · But, uh, Theta is this three-dimensional vector.

**18:49** · And I'm writing 0 with an arrow on top to denote the vector of all 0s.

**18:55** · So 0 with an arrow on top that's a vector that says 0, 0, 0, everywhere, right.

**18:58** · So, um, uh, so sought to some, you know, initial value of Theta and we're going to keep changing Theta, um, to reduce J of Theta, okay?

**19:20** · So let me show you a, um- vi- vis- let me show you a visualization of gradient descent, and then- and then we'll write out the math.

**19:34** · \[NOISE\] Um, so- all right.

**19:40** · Let's say you want to minimize some function J of Theta and, uh, it's important to get the axes right in this diagram, right?

**19:47** · So in this diagram the horizontal axes are Theta 0 and Theta 1.

**19:52** · And what you want to do is find values for Theta 0 and Theta 1.

**19:57** · In our- I- I- In our example it's actually Theta 0, Theta 1, Theta 2 because Theta's 3-dimensional but I can't plot that.

**20:03** · So I'm just using Theta 0 and Theta 1.

**20:05** · But what you want to do is find values for Theta 0 and Theta 1, right?

**20:10** · That's the, um, uh, right, you wanna find values of Theta 0 and Theta 1 that minimizes the height of the surface j of Theta.

**20:22** · So maybe this- this looks like a good- pretty good point or something, okay?

**20:26** · Um, and so in gradient descent you, you know, start off at some point on this surface and you do that by initializing Theta 0 and Theta 1 either randomly or to the value of all zeros or something doesn't- doesn't matter too much.

**20:40** · And, um, what you do is, uh, im- imagine that you are standing on this lower hill, right standing at the point of that little x or that little cross.

**20:49** · Um, what you do in gradient descent is, uh, turn on- turn around all 360 degrees and look all around you and see if you were to take a tiny little step, you know, take a tiny little baby step, in what direction should you take a little step to go downhill as fast as possible because you're trying to go downhill which is- goes to the lowest possible elevation, goes to the lowest possible point of J of Theta, okay?

**21:14** · So what gradient descent will do is, uh, stand at that point look around, look all- all around you and say, well, what direction should I take a little step in to go downhill as quickly as possible because you want to minimize, uh, J of Theta.

**21:27** · You wanna minim- reduce the value of J of Theta, you know, go to the lowest possible elevation on this hill.

**21:32** · Um, and so gradient descent will take that little baby step, right?

**21:38** · And then- and then repeat.

**21:40** · Uh, now you're a little bit lower on the surface.

**21:43** · So you again take a look all around you and say oh it looks like that hill, that- that little direction is the steepest direction or the steepest gradient downhill.

**21:51** · So you take another little step, take another step- another step and so on, until, um, uh, until you- until you get to a hopefully a local optimum.

**22:03** · Now one property of gradient descent is that, um, uh, depend on where you initialize parameters, you can get to local diff- different points, right?

**22:12** · So previously, you had started it at that lower point x.

**22:15** · But imagine if, uh, you had started it, you know, just a few steps over to the right, right?

**22:20** · At that- at that new x instead of the one on the left.

**22:23** · If you had run gradient descent from that new point then, uh, that would have been the first step, that would be the second step and so on.

**22:30** · And you would have gotten to a different local optimum- to a different local minima, okay?

**22:36** · Um, it turns out that when you run gradient descents on linear regression, it turns out that, uh, uh, uh, there will not be local optimum but we'll talk about that in a little bit, okay?

**22:49** · So let's formalize the \[NOISE\] gradient descent algorithm.

**23:03** · In gradient descent, um, each step of gradient descent, uh, is implemented as follows.

**23:15** · So- so remember, in- in this example, the training set is fixed, right?

**23:19** · You- You know you've collected the data set of housing prices from Portland, Oregon so you just have that stored in your computer memory.

**23:25** · And so the data set is fixed.

**23:27** · The cost function J is a fixed function there's function of parameters Theta, and the only thing you're gonna do is tweak or modify the parameters Theta.

**23:37** · One step of gradient descent, um, can be implemented as follows, which is Theta j gets updated as Theta j minus, I'll just write this out, okay?

**23:54** · Um, so bit more notation, I'm gonna use colon equals, I'm gonna use this notation to denote assignment.

**24:02** · So what this means is, we're gonna take the value on the right and assign it to Theta on the left, right?

**24:08** · And so, um, so in other words, in the notation we'll use this quarter, you know, a colon equals a plus 1.

**24:15** · This means increment the value of a by 1.

**24:18** · Um, whereas, you know, a equals b, if I write a equals b I'm asserting a statement of fact, right?

**24:25** · I'm asserting that the value of a is equal to the value of b. Um, and hopefully, I won't ever write a equals a plus 1, right because- cos that is rarely true, okay?

**24:37** · Um, all right. So, uh, in each step of gradient descent, you're going to- for each value of j, so you're gonna do this for j equals 0, 1 ,2 or 0, 1, up to n, where n is the number of features.

**24:55** · For each value of j takes either j and update it according to Theta j minus Alpha.

**25:01** · Um, which is called the learning rate.

**25:08** · Um, Alpha the learning rate times this formula.

**25:13** · And this formula is the partial derivative of the cost function J of Theta with respect to the parameter, um, Theta j, okay?

**25:22** · In- and this partial derivative notation.

**25:24** · Uh, for those of you that, um, haven't seen calculus for a while or haven't seen, you know, some of their prerequisites for a while.

**25:31** · We'll- we'll- we'll go over some more of this in a little bit greater detail in discussion section, but I'll- I'll- I'll do this, um, quickly now.

**25:46** · But, um, I don't know. If, if you've taken a calculus class a while back, you may remember that the derivative of a function is, you know, defines the direction of steepest descent.

**25:56** · So it defines the direction that allows you to go downhill as steeply as possible, uh, on the, on the hill like that. There's a question.

**26:04** · How do you determine the learning rate?

**26:06** · How do you determine the learning rate? Ah, let me get back to that. It's a good question.

**26:09** · Uh, for now, um, uh, you know, there's a theory and there's a practice.

**26:13** · Uh, in practice, you set to 0.01.

**26:15** · \[LAUGHTER\].

**26:19** · \[LAUGHTER\] Let me say a bit more about that later.

**26:20** · \[NOISE\].

**26:23** · Uh, if- if you actually- if- if you scale all the features between 0 and 1, you know, minus 1 and plus 1 or something like that, then, then, yeah.

**26:29** · Then, then try- you can try a few values and see what lets you minimize the function best, but if the feature is scaled to plus minus 1, I usually start with 0.01 and then, and then try increasing and decreasing it.

**26:40** · Say, say a little bit more about that.

**26:41** · \[NOISE\] Um, uh, all right, cool.

**26:48** · So, um, let's see.

**26:51** · Let me just quickly \[NOISE\] show how the derivative calculation is done.

**26:58** · Um, and you know, I'm, I'm gonna do a few more equations in this lecture, uh, and then, and then over time I think.

**27:04** · Um, all, all of these, all of these definitions and derivations are written out in full detail in the lecture notes, uh, posted on the course website.

**27:13** · So sometimes, I'll do more math in class when, um, we want you to see the steps of the derivation and sometimes to save time in class, we'll gloss over the mathematical details and leave you to read over, the full details in the lecture notes on the CS229 you know, course website.

**27:27** · Um, so partial derivative with respect to J of Theta, that's the partial derivative with respect to that of one-half H of Theta of X minus Y squared.

**27:42** · Uh, and so I'm going to do a slightly simpler version assuming we have just one training example, right?

**27:47** · The, the actual deriva- definition of J of Theta has a sum over I from 1 to M over all the training examples.

**27:55** · So I'm just forgetting that sum for now.

**27:58** · So if you have only one training example.

**28:00** · Um, and so from calculus, if you take the derivative of a square, you know, the 2 comes down and so that cancels out with the half.

**28:08** · So 2 times 1.5 times, um, uh, the thing inside, right?

**28:15** · Uh, and then by the, uh, chain rule of, uh, derivatives.

**28:19** · Uh, that's times the partial derivative of Theta J of X Theta X minus Y, right?

**28:26** · So if you take the derivative of a square, the two comes down and then you take the derivative of what's inside and multiply that, right?

**28:33** · \[NOISE\] Um, and so the two and one-half cancel out.

**28:39** · So this leaves you with H minus Y times partial derivative respect to Theta J of Theta 0X0 plus Theta 1X1 plus th- th- that plus Theta NXN minus Y, right?

**28:58** · Where I just took the definition of H of X and expanded it out to that, um, sum, right?

**29:06** · Because, uh, H of X is just equal to that.

**29:09** · So if you look at the partial derivative of each of these terms with respect to Theta J, the partial derivative of every one of these terms with respect to Theta J is going to z- be 0 except for, uh, the term corresponding to J, right?

**29:26** · Because, uh, if J was equal to 1, say, right?

**29:32** · Then this term doesn't depend on Theta 1.

**29:35** · Uh, this term, this term, all of them do not even depend on Theta 1.

**29:38** · The only term that depends on Theta 1 is this term over there.

**29:42** · Um, and the partial derivative of this term with respect to Theta 1 will be just X1, right?

**29:50** · And so, um, when you take the partial derivative of this big sum with respect to say the J, uh, in- in- in- instead of just J equals 1 and with respect to Theta J in general, then the only term that even depends on Theta J is the term Theta JXJ.

**30:08** · And so the partial derivative of all the other terms end up being 0 and partial derivative of this term with respect to Theta J is equal to XJ, okay?

**30:19** · And so this ends up being H Theta X minus Y times XJ, okay?

**30:28** · Um, and again, listen, if you haven't, if you haven't played with calculus for awhile, if you- you know, don't quite remember what a partial derivative is, or don't quite get what we just said. Don't worry too much about it.

**30:37** · We'll go over a bit more in the section and we- and, and then also read through the lecture notes which kind of goes over this in, in, in, um, in more detail and more slowly than, than, uh, we might do in class, okay?

**30:49** · \[NOISE\] So, um, so plugging this- let's see.

**31:06** · So we've just calculated that this partial derivative, right, is equal to this, and so plugging it back into that formula, one step of gradient descent is, um, is the following, which is that we will- that Theta J be updated according to Theta J minus the learning rate times H of X minus Y times XJ, okay?

**31:40** · Now, I'm, I'm gonna just add a few more things in this equation.

**31:43** · Um, so I did this with one training example, but, uh, this was- I kind of used definition of the cost function J of Theta defined using just one single training example, but you actually have M training examples.

**31:56** · And so, um, the, the correct formula for the derivative is actually if you take this thing and sum it over all M training examples, um, the derivative of- you know, the derivative of a sum is the sum of the derivatives, right?

**32:09** · So, um, so you actually- If, if, if you redo this derivation, you know, summing with the correct definition of J of Theta which sums over all M training examples.

**32:19** · If you just redo that little derivation, you end up with, uh, sum equals I through M of that, right?

**32:30** · Where remember XI is the Ith training examples input features, YI is the target label, is the, uh, price in the Ith training example, okay?

**32:40** · Um, and so this is the actual correct formula for the partial derivative with respect to that of the cost function J of Theta when it's defined using, um, uh, all of the, um, \[NOISE\] uh, on- when it's defined using all of the training examples, okay?

**33:00** · And so the gradient descent algorithm is to- \[NOISE\] Repeat until convergence, carry out this update, and in each iteration of gradient descent, uh, you do this update for j equals, uh, 0, 1 up to n. Uh, where n is the number of features.

### Gradient Descent Algorithm

**33:31** · So n was 2 in our example.

**33:34** · Okay. Um, and if you do this then, uh, uh, you know, actually let me see.

**33:40** · Then what will happen is, um, \[NOISE\] well, I'll show you the animation.

**33:46** · As you fit- hopefully, you find a pretty good value of the parameters Theta.

**33:52** · Okay. So, um, it turns out that when you plot the cost function j of Theta for a linear regression model, um, it turns out that, unlike the earlier diagram I had shown which has local optima, it turns out that if j of Theta is defined the way that, you know, we just defined it for linear regression, is the sum of squared terms, um, then j of Theta turns out to be a quadratic function, right?

**34:21** · It's a sum of these squares of terms, and so, j of Theta will always look like, look like a big bowl like this.

**34:27** · Okay. Um, another way to look at this, uh, uh, and so and so j of Theta does not have local optima, um, or the only local optima is also the global optimum.

**34:37** · The other way to look at the function like this is to look at the contours of this plot, right?

**34:42** · So you plot the contours by looking at the big bowl and taking horizontal slices and plotting where the, where the curves where, where the edges of the horizontal slice is.

**34:51** · So the contours of a big bowl or I guess a formal is, uh, of a bigger, uh, of of this quadratic function will be ellipsis, um, like these or these ovals or these ellipses like this.

**35:05** · And so if you run gradient descent on this algorithm, um, let's say I initialize, uh, my parameters at that little x, uh, shown over here, right.

**35:18** · And usually you initialize Theta degree with a 0, but but, you know, but it doesn't matter too much.

**35:22** · So let's reinitialize over there.

**35:24** · Then, um, with one step of gradient descent, the algorithm will take that step downhill, uh, and then with a second step, it'll take that step downhill whereby we, fun fact, uh, if you- if you think about the contours of the function, it turns out that the direction of steepest descent is always at 90 degrees, is always orthogonal, uh, to the contour direction, right.

**35:45** · So, I don't know, yeah.

**35:47** · I seem to remember that from my high-school something, I think it's true. All right.

**35:52** · And so as you, as you take steps downhill, uh, uh, because there's only one global minimum, um, this algorithm will eventually converge to the global minimum.

**36:03** · Okay. And so the question just now about the choice of the learning rate Alpha.

**36:08** · Um, if you set Alpha to be very very large, to be too large then they can overshoot, right.

**36:14** · The steps you take can be too large and you can run past the minimum.

**36:19** · Uh, if you set to be too small, then you need a lot of iterations and the algorithm will be slow.

**36:23** · And so what happens in practice is, uh, usually you try a few values and and and see what value of the learning rate allows you to most efficiently, you know, drive down the value of j of Theta.

**36:36** · Um, and if you see j of Theta increasing rather than decreasing, you see the cost function increasing rather than decreasing, then, there's a very strong sign that the learning rate is, uh, too large, and so, um.

**36:48** · \[NOISE\] Actually what what I often do is actually try out multiple values of, um, the learning rate Alpha, and, uh, uh, and and usually try them on an exponential scale.

**36:59** · So you try open O1, open O2, open O4, open O8 kinda like a doubling scale or some- uh, uh, or doubling or tripling scale and try a few values and see what value allows you to drive down to the learning rate fastest.

**37:12** · Okay. Um, let me just.

**37:14** · So I just want to visualize this in one other way, um, which is with the data.

**37:21** · So, uh, this is this is the actual dataset.

**37:23** · Uh, they're, um, there are actually 49 points in this dataset.

**37:27** · So m the number of training examples is 49, and so if you initialize the parameters to 0, that means, initializing your hypothesis or initializing your straight line fit to the data to be that horizontal line, right?

**37:40** · So, if you initialize Theta 0 equals 0, Theta 1 equals 0, then your hypothesis is, you know, for any input size of house or price, the estimated price is 0, right?

**37:51** · And so your hypothesis starts off with a horizontal line, that is whatever the input x the output y is 0.

**37:58** · And what you're doing, um, as you run gradient descent is you're changing the parameters Theta, right?

**38:06** · So the parameters went from this value to this value to this value to this value and so on.

**38:10** · And so, the other way of visualizing gradient descent is, if gradient descent starts off with this hypothesis, with each iteration of gradient descent, you are trying to find different values of the parameters Theta, uh, that allows this straight line to fit the data better.

**38:28** · So after one iteration of gradient descent, this is the new hypothesis, you now have different values of Theta 0 and Theta 1 that fits the data a little bit better.

**38:36** · Um, after two iterations, you end up with that hypothesis, uh, and with each iteration of gradient descent it's trying to minimize j of Theta.

**38:45** · Is trying to minimize one half of the sum of squares errors of the hypothesis or predictions on the different examples, right?

**38:52** · With three iterations of gradient descent, um, uh, four iterations and so on.

**38:57** · And then and then a bunch more iterations, uh, and eventually it converges to that hypothesis, which is a pretty, pretty decent straight line fit to the data.

**39:06** · Okay. Is there a question? Yeah, go for it.

**39:08** · \[inaudible\] Uh, sure.

**39:28** · Maybe, uh, just to repeat the question.

**39:30** · Why is the- why are you subtracting Alpha times the gradient rather than adding Alpha times the gradient?

**39:36** · Um, let me suggest, actually let me raise the screen.

**39:39** · Um, \[NOISE\] so let me suggest you work through one example.

**39:45** · Um, uh, it turns out that if you add multiple times in a gradient, you'll be going uphill rather than going downhill, and maybe one way to see that would be if, um, you know, take a quadratic function, um, excuse me.

**40:00** · Right. If you are here, the gradient is a positive direction and you want to reduce, so this would be Theta and this will be j I guess.

**40:08** · So you want Theta to decrease, so the gradient is positive.

**40:11** · You wanna decrease Theta, so you want to subtract a multiple times the gradient.

**40:14** · Um, I think maybe the best way to see that would be the work through an example yourself.

**40:18** · Uh, uh, set j of Theta equals Theta squared and set Theta equals 1.

**40:23** · So here at the quadratic function of the derivative is equal to 1.

**40:26** · So you want to subtract the value from Theta rather than add.

**40:28** · Okay? Cool. Um.

**40:33** · All right. Great. So you've now seen your first learning algorithm, um, and, you know, gradient descent and linear regression is definitely still one of the most widely used learning algorithms in the world today, and if you implement this- if you, if you, if you implement this today, right, you could use this for, for some actually pretty, pretty decent purposes.

**40:56** · Um, now, I wanna I give this algorithm one other name.

**41:05** · Uh, so our gradient descent algorithm here, um, calculates this derivative by summing over your entire training set m. And so sometimes this version of gradient descent, has another name, which is batch gradient descent.

**41:22** · Oops. All right and the term batch, um, you know- and again- I think in machine learning, uh, our whole committee, we just make up names and stuff and sometimes the names aren't great.

**41:41** · But the- the term batch gradient descent refers to that, you look at the entire training set, all 49 examples in the example I just had on, uh, PowerPoint.

**41:50** · You know, you- you think of all for 49 examples as one batch of data, I'm gonna process all the data as a batch, so hence the name batch gradient descent.

**42:00** · The disadvantage of batch gradient descent is that if you have a giant dataset, if you have, um, and- and in the era of big data we're really, moving to larger and larger datasets, so I've used, you know, we train machine learning models of like hundreds of millions of examples.

**42:16** · And- and if you are trying to- if you have, uh, if you download the US census database, if your data, the United States census, that's a very large dataset.

**42:25** · And you wanna predict housing prices, from all across the United States, um, that- that- that may have a dataset with many- many millions of examples.

**42:33** · And the disadvantage of batch gradient descent is that, in order to make one update, to your parameters, in order to even take a single step of gradient descent, you need to calculate, this sum.

### Batch Gradient Descent

**42:46** · And if m is say a million or 10 million or 100 million, you need to scan through your entire database, scan through your entire dataset and calculate this for, you know, 100 million examples and sum it up.

**43:01** · And so every single step of gradient descent becomes very slow because you're scanning over, you're reading over, right, like 100 million training examples, uh, uh, and uh, uh, before you can even, you know, make one tiny little step of gradient descent.

**43:15** · Okay, um, yeah, and by the way, I think- I feel like in today's era of big data people start to lose intuitions about what's a big data-set.

**43:23** · I think even by today's standards, like a hundred million examples is still very big, right, I- I rarely- only rarely use a hundred million examples.

**43:30** · Um, I don't know, maybe in a few years we'll look back on a hundred million examples and say that was really small, but at least today. Uh, yeah.

**43:39** · So the main disadvantage of batch gradient descent is, every single step of gradient descent requires that you read through, you know, your entire data-set, maybe terabytes of data-sets maybe- maybe- maybe, uh, tens or hundreds of terabytes of data, uh, before you can even update the parameters just once.

**43:56** · And if gradient descent needs, you know, hundreds of iterations to converge, then you'll be scanning through your entire data-set hundreds of times.

**44:05** · Right, or-or and then sometimes we train, our algorithms with thousands or tens of thousands of iterations.

**44:10** · And so- so this- this gets expensive.

**44:13** · So there's an alternative to batch gradient descent. Um, and let me just write out the algorithm here that we can talk about it, which is going to repeatedly do this.

**44:26** · \[NOISE\] Oops, okay. Um, so this algorithm,

**44:55** · which is called stochastic gradient descent.

### Stochastic Gradient Descent

**44:58** · \[NOISE\] Um, instead of scanning through all million examples before you update the parameters theta even a little bit, in stochastic gradient descent, instead, in the inner loop of the algorithm, you loop through j equals 1 through m of taking a gradient descent step using, the derivative of just one single example of just that, uh, one example, ah, oh, excuse me it's through i, right.

**45:32** · Yeah, so let i go from 1 to m, and update theta j for every j.

**45:37** · So you update this for j equals 1 through n, update theta j, using this derivative that when now this derivative is taken just with respect to one training example- example I.

**45:51** · Okay, um, I'll- I'll just- alright and I guess you update this for every j.

**46:02** · Okay, and so, let me just draw a picture of what this algorithm is doing.

**46:09** · If um, this is the contour, like the one you saw just now.

**46:16** · So the axes are, uh, theta 0 and theta 1, and the height of the surface right, denote the contours as j of theta.

**46:23** · With stochastic gradient descent, what you do is you initialize the parameters somewhere.

**46:28** · And then you will look at your first training example.

**46:31** · Hey, lets just look at one house, and see if you can predict that house as better, and you modify the parameters to increase the accuracy where you predict the price of that one house.

**46:40** · And because you're fitting the data just for one house, um, you know, maybe you end up improving the parameters a little bit, but not quite going in the most direct direction downhill.

**46:52** · And you go look at the second house and say, hey, let's try to fit that house better.

**46:56** · And then you update the parameters.

**46:57** · And you look at third house, fourth house.

**46:59** · Right, and so as you run stochastic gradient descent, it takes a slightly noisy, slightly random path.

**47:07** · Uh, but on average, it's headed toward the global minimum, okay.

**47:13** · So as you run stochastic gradient descent- stochastic gradient descent will actually, never quite converge.

**47:20** · In- with- with batch gradient descent, it kind of went to the global minimum and stopped right, uh, with stochastic gradient descent even as you won't run it, the parameters will oscillate and won't ever quite converge because you're always running around looking at different houses and trying to do better than just that one house- and that one house- and that one house.

**47:38** · Uh, but when you have a very large data-set, stochastic gradient descent, allows your implementation- allows you algorithm to make much faster progress.

**47:48** · Uh, and so, um, uh, uh- and so when you have very large data-sets, stochastic gradient descent is used much more in practice than batch gradient descent.

**47:58** · \[BACKGROUND\] Uh, yeah, is it possible to start with stochastic gradient descent and then switch over to batch gradient descent?

**48:15** · Yes, it is.

**48:17** · So, uh, boy, something that wasn't talked about in this class, it's talked about in CS230 is Mini-batch gradient descent, where, um, you don't- where you use say a hundred examples at a time rather than one example at a time.

**48:30** · And so- uh, so that's another algorithm that I should use more often in practice.

**48:35** · I think people rarely- actually, so- so in practice, you know, when your dataset is large, we rarely, ever switch to batch gradient descent, because batch gradient descent is just so slow, right.

**48:49** · So, I-I know I'm thinking through concrete examples of problems I've worked on.

**48:54** · And I think that what- maybe actually maybe- I think that uh, for a lot of- for- for modern machine learning, where you have- if you have very- very large data sets, right so you know, whether- if you're building a speech recognition system, you might have like a terabyte of data, right, and so, um, it's so expensive to scan through a terabyte of data just reading it from disk, right it's so expensive that you would probably never even run one iteration of batch gradient descent.

**49:23** · Uh, and it turns out the- the- there's one- one huge saving grace of stochastic gradient descent is, um, let's say you run stochastic gradient descent, right, and, you know, you end up with this parameter and that's the parameter you use, for your machine learning system, rather than the global optimum.

**49:42** · It turns out that parameter is actually not that bad, right, you- you probably make perfectly fine predictions even if you don't quite get to the like the global- global minimum.

**49:51** · So, uh, what you said I think it's a fine thing to do, no harm trying it.

**49:56** · Although in practice uh, uh, in practice we don't bother, I think in practice we usually use stochastic gradient descent.

**50:03** · The thing that actually is more common, is to slowly decrease the learning rate.

**50:07** · So just keep using stochastic gradient descent, but reduce the learning rate over time.

**50:11** · So it takes smaller and smaller steps.

**50:12** · So if you do that, then what happens is the size of the oscillations would decrease.

**50:17** · Uh, and so you end up oscillating or bouncing around the smaller region.

**50:21** · So wherever you end up, may not be the global- global minimum, but at least it'll- be it'll be closer to the global minimum.

**50:28** · Yeah, so decreasing the learning rate is used much more often.

**50:31** · Cool. Question. Yeah. \[BACKGROUND\] Oh sure, when do you stop with stochastic gradient descent?

**50:42** · Uh, uh, plot to j of theta, uh, over time.

**50:46** · So j of theta is a cost function that you're trying to drag down.

**50:49** · So monitor j of theta as, you know, is going down over time, and then if it looks like it stopped going down, then you can say, "Oh, it looks like it looks like it stopped going down," then you stop training.

**50:59** · Although- and then- ah, uh, you know, one nice thing about linear regression is that it has no local optimum and so, um, uh, it- you run into these convergence debugging types of issues less often.

**51:13** · Where you're training highly non-linear things like neural networks, we should talk about later in CS229 as well.

**51:18** · Uh, these issues become more acute.

**51:22** · Cool. Okay, great.

**51:27** · So, um, uh, yeah.

**51:30** · \[BACKGROUND\].

**51:35** · Oh, would your learning rate be 1 over n times linear regressions then? Not really, it's usually much bigger than that.

**51:40** · Uh, uh, yeah, because if your learning rate was 1 over n times that of what you'd use with batch gradient descent then it would end up being as slow as batch gradient descent, so it's usually much bigger.

**51:51** · Okay. So, um, so that's stochastic gradient descent and- and- so I'll tell you what I do.

**51:59** · If- if you have a relatively small dataset, you know, if you have- if you have, I don't know, like hundreds of examples maybe thousands of examples where, uh, it's computationally efficient to do batch gradient descent.

**52:10** · If batch gradient descent doesn't cost too much, I would almost always just use batch gradient descent because it's one less thing to fiddle with, right?

**52:16** · It's just one less thing to have to worry about, uh, the parameters oscillating, but your dataset is too large that batch gradient descent becomes prohibit- prohibitively slow, then almost everyone will use, you know, stochastic gradient descent or whatever more like stochastic gradient descent, okay?

**52:46** · All right, so, um, gradient descent, both batch gradient descent and stochastic gradient descent is an iterative algorithm meaning that you have to take multiple steps to get to, you know, get near hopefully the global optimum.

**53:04** · It turns out there is another algorithm, uh, and- and, um, for many other algorithms we'll talk about in this course including generalized linear models and neural networks and a few other algorithms, uh, you will have to use gradient descent and so- and so we'll see gradient descent, you know, as we develop multiple different algorithms later this quarter.

**53:25** · It turns out that for the special case of linear regression, uh, uh, and I mean linear regression but not the algorithm we'll talk about next Monday, not the algorithm we'll talk about next Wednesday, but if the algorithm you're using is linear regression and exactly linear regression.

**53:39** · It turns out that there's a way to, uh, solve for the optimal value of the parameters theta to just jump in one step to the global optimum without needing to use an iterative algorithm, right, and this- this one I'm gonna present next is called the normal equation.

**53:55** · It works only for linear regression, doesn't work for any of the other algorithms I talk about later this quarter.

**54:00** · But \[NOISE\] um, uh, let me quickly show you the derivation of that.

**54:12** · And, um, what I want to do is, uh, give you a flavor of how to derive the normal equation and where you end up with is you know, wha- what- what I hope to do is end up with a formula that lets you say theta equals some stuff where you just set theta equals to that and in one step with a few matrix multiplications you end up with the optimal value of theta that lands you right at the global optimum, right, just like that, just in one step.

**54:42** · Okay. Um, and if you've taken, you know, advanced linear algebra courses before or something, you may have seen, um, this formula for linear regression.

**54:53** · Wha- what a lot of linear algebra classes do is, what some linear algebra classes do is cover the board with, you know, pages and pages of matrix derivatives.

**55:03** · Um, what I wanna do is describe to you a matrix derivative notation that allows you to derive the normal equation in roughly four lines of linear algebra, uh, rather than some pages and pages of linear algebra and in the work I've done in machine learning you know, sometimes notation really matters, right.

**55:21** · If you have the right notation you can solve some problems much more easily and what I wanna do is, um, uh, define this uh, matrix linear algebra notation and then I don't wanna do all the steps of the derivation, I wanna give you- give you a sense of the flavor of what it looks like and then, um, I'll ask you to, uh, uh, get a lot of details yourself, um, in the- in the lecture notes where we work out everything in more detail than I want to do algebra in class.

**55:50** · And, um, in problem set one you'll get to practice using this yourself to- to- to-, you know, derive some additional things.

**55:57** · I've- I've found this notation really convenient, right, for deriving learning algorithms.

**56:02** · Okay. So, um, I'm going to use the following notation.

**56:08** · Um, so J, right.

**56:13** · There's a function mapping from parameters to the real numbers.

**56:16** · So I'm going to define this- this is the derivative of J of theta with respect to theta, where- remember theta is a three-dimensional vector says R3, or actually it's R n+1, right.

**56:34** · If you have, uh, two features to the house if n=2, then theta was 3 dimensional, it's n+1 dimensional so it's a vector.

**56:42** · And so I'm gonna define the derivative with respect to theta of J of theta as follows.

**56:48** · Um, this is going to be itself a 3 by 1 vector \[NOISE\].

**57:01** · Okay, so I hope this notation is clear.

**57:03** · So this is a three-dimensional vector with, uh, three components.

**57:12** · Alright so that's what I guess I'm.

**57:20** · So that's the first component is a vector, there's a second and there's a third.

**57:25** · It's the partial derivative of J with respect to each of the three elements.

**57:31** · Um, and more generally, in the notation we'll use, um, let me give you an example.

**57:52** · Um, uh, let's say that a is a matrix.

**57:57** · So let's say that a is a two-by-two matrix.

**58:02** · Then, um, you can have a function, right, so let's say a is, you know, A1-1, A1-2, A2-1 and A2-2, right.

**58:14** · So A is a two-by-two matrix.

**58:16** · Then you might have some function um, of a matrix A right, then that's a real number.

**58:23** · So maybe f maps from A 2-by-2 to, uh, excuse me, R 2-by-2, it's a real number.

**58:32** · So, um, uh, and so for example, if f of A equals A11 plus A12 squared, then f of, you know, 5, 6, 7, 8 would be equal to I guess 5 plus 6 squared, right.

**58:52** · So as we derive this, we'll be working a little bit with functions that map from matrices to real numbers and this is just one made up example of a function that inputs a matrix and maps the matrix, maps the values of matrix to a real number.

**59:05** · And when you have a matrix function like this, I'm going to define the derivative with respect to A of f of A to be equal to itself a matrix where the derivative of f of A with respect to the matrix A.

**59:24** · Uh, this itself will be a matrix with the same dimension of a and the elements of this are the derivative with respect to the individual elements.

**59:44** · Actually, let me just write it like this.

**59:47** · \[NOISE\] Okay. So if A was a 2-by-2 matrix then the derivative of F of A with respect to A is itself a 2-by-2 matrix and you compute this 2-by-2 matrix just by looking at F and taking, uh, derivatives with respect to the different elements and plugging them into the different, the different elements of this matrix.

**1:00:21** · Okay. Um, and so in this particular example, I guess the derivative respect to A of F of A.

**1:00:28** · This would be, um, \[NOISE\] right, it would be- it would be that.

**1:00:38** · Ah and I got these four numbers by taking, um, the definition of F and taking the derivative with respect to A\_1, 1 and plugging that here.

**1:00:51** · Ah, taking the derivative with respect to A\_1,2 and plugging that here and taking the derivative with respect to the remaining elements and plugging them here which- which was 0.

**1:01:03** · Okay? So that's the definition of a matrix derivative. Yeah?

**1:01:07** · \[inaudible\].

**1:01:12** · Oh, yes. We're just using the definition for a vector.

**1:01:14** · Ah, N by 1 or N by 1 matrix.

**1:01:16** · Yes. And in fact that definition and this definition for the derivative of J with respect to Theta these are consistent.

**1:01:23** · So if you apply that definition to a column vector, treating a column vector as an N by 1 matrix or N, I guess it would be N plus 1 by 1 matrix then that- that specializes to what we described here.

**1:01:35** · \[NOISE\] All right. So, um, let's see.

**1:01:57** · Okay. So, um, I want to leave the details of the lecture notes because there's more lines of algebra which I won't do but it'll give you an overview \[NOISE\] of what the derivation of the normal equation looks like.

**1:02:11** · Um, so onto this definition of a derivative of a- of a matrix, um, the broad outline of what we're going to do is we're going to take J of Theta.

**1:02:23** · Right. That's the cost function.

**1:02:25** · Um, take the derivative with respect to Theta.

**1:02:30** · Right. Ah, since Theta is a vector so you want to take the derivative with respect to Theta and you know well, how do you minimize a function?

**1:02:38** · You take derivatives with \[NOISE\] respect to Theta and set it equal to 0.

**1:02:43** · And then you solve for the value of Theta so that the derivative is 0.

**1:02:46** · Right. The- the minimum, you know, the maximum and minimum of a function is where the derivative is equal to 0.

**1:02:50** · So- so how you derive the normal equation is take this vector.

**1:02:54** · Ah, so J of Theta maps from a vector to a real number.

**1:02:58** · So we'll, take the derivatives respect to Theta set it to 0,0 and solve for Theta and then we end up with a formula for Theta that lets you just, um, ah, you know, immediately go to the global minimum of the- of the cost function J of Theta.

**1:03:13** · And, and a lot of the build up, a lot of this notation is, you know, is there- what does this mean and is there an easy way to compute the derivative of J of Theta?

**1:03:23** · Okay? So, um, ah, so I hope you understand the lecture notes when hopefully you take a look at them, ah, just a couple other derivations.

**1:03:35** · Um, if A \[NOISE\] is a square matrix.

**1:03:41** · So let's say A is a \[NOISE\] N, N by N matrix.

**1:03:45** · So number of rows equals number of columns.

**1:03:48** · Um, I'm going to denote the trace of A \[NOISE\] to be equal to \[NOISE\] the sum of the diagonal entries.

**1:03:57** · \[NOISE\] So sum of i of A\_ii.

**1:04:04** · And this is pronounced the trace of A, um, and, ah, and- and you can- you can also write this as trace operator like the trace function applied to A but by convention we often write trace of A without the parentheses.

**1:04:20** · And so this is called the trace of A.

**1:04:24** · \[NOISE\] So trace just means sum of diagonal entries and, um, some facts about the trace of a matrix.

**1:04:31** · You know, trace of A is equal to the trace of A transpose because if you transpose a matrix, right, you're just flipping it along the- the 45 degree axis.

**1:04:41** · And so the the diagonal entries actually stay the same when you transpose the matrix.

**1:04:44** · So the trace of A is equal to trace of A transpose, um, and then, ah, there-there are some other useful properties of, um, the trace operator.

**1:04:56** · Um, here's one that I don't want to prove but that you could go home and prove yourself with a-with a few with- with a little bit of work, maybe not, not too much which is, ah, if you define, um, F of A \[NOISE\] equals trace of A times B.

**1:05:16** · So here if B is some fixed matrix, right, ah, and what F of A does is it multiplies A and B and then it takes the sum of diagonal entries.

**1:05:25** · Then it turns out that the derivative with respect to A of F of A is equal to, um, B transpose \[NOISE\].

**1:05:38** · Um, and this is, ah, you could prove this yourself.

**1:05:40** · For any matrix B, if F of A is defined this way, the de- the derivative is equal to B transpose.

**1:05:46** · Um, the trace function or the trace operator has other interesting properties.

**1:05:51** · The trace of AB is equal to the trace of BA.

**1:05:56** · Ah, um, you could- you could prove this from past principles, it's a little bit of work to prove, ah, ah, that- that you, if you expand out the definition of A and B it should prove that \[NOISE\] and the trace of A times B times C is equal to \[NOISE\] the trace of C times A times B. Ah, this is a cyclic permutation property.

**1:06:15** · If you have a multiply, you know, multiply several matrices together you can always take one from the end and move it to the front and the trace will remain the same.

**1:06:23** · \[NOISE\] And, um, another one that is a little bit harder to prove is that the trace, excuse me, the derivative of A trans- of AA transpose C is \[NOISE\] Okay.

**1:06:47** · Yeah. So I think just as- just as for you know, ordinary, um, calculus we know the derivative of X squared is 2\_X.

**1:06:55** · Right. And so we all figured out that very well.

**1:06:57** · We just use it too much without- without having to re-derive it every time.

**1:07:01** · Ah, this is a little bit like that.

**1:07:03** · The trace of A squared C is, you know, two times CA.

**1:07:07** · Right. It's a little bit like that but- but with- with matrix notation as there.

**1:07:11** · So think of this as analogous to D, DA of A squared C equals 2AC.

**1:07:19** · Right. But that is like the matrix version of that.

**1:07:22** · \[NOISE\]

**1:07:44** · All right. So finally, um, what I'd like to do is take J of Theta and express it in this, uh, you know, matrix vector notation.

**1:08:01** · So we can take derivatives with respect to Theta, and set the derivatives equal to 0, and just solve for the value of Theta, right?

**1:08:07** · And so, um, let me just write out the definition of J of Theta.

**1:08:12** · So J of Theta was one-half sum from i equals 1 through m of h of x i minus y i squared.

**1:08:24** · Um, and it turns out that, um, all right.

**1:08:39** · It turns out that, um, if it is, if you define a matrix capital X as follows.

**1:08:46** · Which is, I'm going to take the matrix capital X and take the training examples we have, you know, and stack them up in rows.

**1:09:00** · So we have m training examples, right?

**1:09:04** · So so the X's were column vectors.

**1:09:06** · So I'm taking transpose to just stack up the training examples in, uh, in rows here.

**1:09:11** · So let me call this the design matrix.

**1:09:13** · So the capital X called the design matrix.

**1:09:15** · And, uh, it turns out that if you define X this way, then X times Theta, there's this thing times Theta.

**1:09:29** · And the way a matrix vector multiplication works is your Theta is now a column vector, right?

**1:09:35** · So Theta is, you know, Theta\_0, Theta\_1, Theta\_2.

**1:09:39** · So the way that, um, matrix-vector multiplication works is you multiply this column vector with each of these in in turn.

**1:09:48** · And so this ends up being X1 transpose Theta, X2 transpose Theta, down to X\_m transpose Theta, which is of course just the vector of all of the predictions of the algorithm.

**1:10:29** · And so if, um, now let me also define a vector y to be taking all of the, uh, labels from your training example, and stacking them up into a big column vector, right.

**1:10:49** · Let me define y that way.

**1:10:51** · Um, it turns out that, um, J of Theta can then be written as one-half of X Theta minus y transpose X Theta minus y.

**1:11:12** · Okay. Um, and let me see.

**1:11:16** · Yeah. Let me just, uh, uh, outline the proof, but I won't do this in great detail.

**1:11:22** · So X Theta minus y is going to be, right, so this is X Theta, this is y.

**1:11:29** · So, you know, X Theta minus y is going to be this vector of h of x1 minus y1 down to h of xm minus ym, right.

**1:11:45** · So it's just all the errors your learning algorithm is making on the m examples.

**1:11:49** · It's the difference between predictions and the actual labels.

**1:11:51** · And if you you remember, so Z transpose Z is equal to sum over i Z squared, right.

**1:11:59** · A vector transpose itself is a sum of squares of elements.

**1:12:02** · And so this vector transpose itself is the sum of squares of the elements, right.

**1:12:09** · So so which is why, uh, so so the cost function J of Theta is computed by taking the sum of squares of all of these elements, of all of these errors, and and the way you do that is to take this vector, your X Theta minus y transpose itself, is the sum of squares of these, which is exactly the error.

**1:12:28** · So that's why you end up with a, this as the sum of squares of the, those error terms.

**1:12:36** · Okay. And, um, if some of the steps don't quite make sense, really don't worry about it.

**1:12:45** · All this is written out more slowly and carefully in the lecture notes.

**1:12:49** · But I wanted you to have a sense of the, uh, broad arc of the of the big picture of their derivation before you go through them yourself in greater detail in the lecture notes elsewhere.

**1:13:08** · So finally, what we want to do is take the derivative with respect to Theta of J of Theta, and set that to 0.

**1:13:18** · And so this is going to be equal to the derivative of one-half X Theta minus y transpose X Theta minus y. Um, and so I'm gonna, I'm gonna do the steps really quickly, right.

**1:13:34** · So the steps require some of the little properties of traces and matrix derivatives I wrote down briefly just now.

**1:13:40** · But so I'm gonna do these very quickly without getting into the details, but, uh, so this is equal to one-half derivative of Theta of, um.

**1:13:50** · So take transposes of these things.

**1:13:52** · So this becomes Theta transpose X transpose minus y transpose.

**1:13:58** · Right. Um, and then, uh, kind of like expanding out a quadratic function, right.

**1:14:06** · This is, you know, A minus B times C minus D. So you can just AC minus AD this and so on.

**1:14:12** · So I'll just write this out.

**1:14:28** · All right. And so, uh, what I just did here this is similar to how, you know, ax minus b times ax minus b, is equal to a squared x squared minus axb minus bax plus b squared.

**1:14:46** · Is it's kind of, it's just expanding out a quadratic function.

**1:14:50** · Um, and then the final step is, yeah, go ahead.

**1:15:08** · \[BACKGROUND\] Oh, is that right?

**1:15:15** · Oh yes, thank you. Thank you.

**1:15:19** · Um, and then the final step is, you know, for each of these four terms; first, second, third, and fourth terms, to take the derivative with respect to Theta.

**1:15:28** · And if you use some of the formulas I was alluding to over there, you find that the derivative, um, which which I don't want to show the derivation of, but it turns out that the derivative is, um, X transpose X Theta plus X transpose X Theta minus, um, X transpose y minus X transpose y, um, and we're going to set this derivative.

**1:15:58** · Actually not, let me just do this.

**1:16:00** · And so this simplifies to X transpose X Theta minus X transpose y.

**1:16:07** · And so as as described earlier, I'm gonna set this derivative to 0.

**1:16:13** · And how to go from this step to that step is using the matrix derivatives, uh, explained in more detail in the lecture notes.

**1:16:19** · And so the final step is, you know, having set this to 0, this implies that X transpose X Theta equals X transpose y.

**1:16:27** · Uh, so this is called the normal equations.

**1:16:34** · And the optimum value for Theta is Theta equals X transpose X inverse, X transpose y.

**1:16:48** · Okay. Um, and if you implement this, um, then, you know, you can in basically one step, get the value of Theta that corresponds to the global minimum.

**1:17:01** · Okay. Um, and and and again, common question I get is one is, well, what if X is non-invertible?

**1:17:11** · Uh, what that usually means is you have have redundant features, uh, that your features are linearly dependent.

**1:17:16** · Uh, but if you use something called the pseudo inverse, you kind of get the right answer if that's the case.

**1:17:21** · Although I think the, uh, even more right answer is if you have linearly dependent features, probably means you have the same feature repeated twice, and I will usually go and figure out what features are actually repeated, leading to this problem.

**1:17:32** · Okay. All right.

**1:17:35** · Uh, any last questions before- so that so that's the normal equations.

**1:17:38** · Hope you read through the detailed derivations in the lecture notes.

**1:17:41** · Any last questions before we break?

**1:17:42** · Okay.

**1:17:43** · \[BACKGROUND\] Oh, yeah.

**1:17:57** · How do you choose a learning rate?

**1:17:58** · It's, it's, it's quite empirical, I think.

**1:18:00** · So most people would try different values, and then just pick one. All right.

**1:18:05** · I think let's let's break.

**1:18:06** · If, if people have more questions, when the TAs come up, we're going to keep taking questions.

**1:18:10** · Well, let's break for the day. Thanks everyone.