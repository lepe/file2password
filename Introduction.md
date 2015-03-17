#Reasoning behind this library.

# Introduction #

Do you think your password is good enough? Think again...
With current technology, any password of 8 or less characters (including uppercase and numbers), can be cracked in less than 10 minutes.

Fragment from [Wikipedia](http://en.wikipedia.org/wiki/Password_strength):

> ... Users rarely make full use of larger characters sets in forming passwords. For example, hacking results obtained from a MySpace phishing scheme in 2006 revealed 34,000 passwords, of which only 8.3% used mixed case, numbers, and symbols.

> Note that the full strength associated with using the entire ASCII character set (numerals, mixed case letters and special characters) is only achieved if each character in the password is chosen randomly from that set. Capitalizing a letter and adding a couple of numbers and a special character to a password will not achieve the same strength. If the numbers and special character are added in predictable ways, say at the beginning and end of the password, they could even lower password strength compared to an all letter random password of the same length.

As system engineer, I have seen myself how most users prefer easy-to-remember passwords against hard-to-guess ones.

A [2010 Georgia Tech Research Institute study](http://en.wikipedia.org/wiki/Password_strength#cite_note-msnbc-19) recommended a 12-character random password as a minimum length requirement; and many other have suggested to replace passwords with paraphrases.

... And it has been suggested that the best way to keep your accounts safe is to write down your passwords on a [piece of paper](http://www.youtube.com/watch?v=VldMq4NyKWY).

One big problem is that we use many online services and remembering so many passwords is not easy nor practical.

My wife always complains to me when, for any reason, she asks me any of my online passwords... the reason is because I don't even know them!

## Why is important to have a strong password? ##

I thought it would be important to explain it with the following example:

Let's suppose that a hacker named Cypher opens a new account on easy-target.com and set as his password: "hackme". Later, using his skills, gain access to that server and he downloads what he was looking for: the database.

The good thing is that "easy-target.com" encrypted the user's passwords. However that won't stop Cypher. With his own created account, he can determine which algorithm was used. For example:

"hackme" = "75eb52c3b2515d8aafe641c29a1028a4"

Because the length is 32, he may think is MD5 (the most common algorithm), but it is not. Testing his password against several algorithms, it discovers that they actually are using "ripemd128".[Try it yourself](http://security.alepe.com/hash.php)

Now, the rest is not that hard. He needs to crack as many passwords as possible. Using his no-so-new video card with 10GPUs he may crack one password, of 6 to 10 characters, in less than 5 minutes (now imagine if he has 10 or more computers like that). He can highly reduce that time if he uses a dictionary (picking the very easy ones first). [Try it yourself](http://security.alepe.com/passchk.php)

If the rest of the user's information is not encrypted (i.e., names, email addresses, phone numbers), he may first try to get additional information of those people in google to target "more interesting" ones first: government, managers, IT engineers, celebrities, people outside the matrix, etc.

Eureka! he finds Neo's password! Cypher will check if Neo's password is the same for the email specified in his account. He succeed to login (Neo wasn't that smart after all). Cypher then find login information of other online services (as often they send user's passwords on suscribe), his company's servers credentials, and even the NIP that Morpheus sent him in order to use the public phones for free!.

Now the world belongs to Chyper! (ok, not that much)

How could all that be prevented? If Neo's had set a _Very10ng&hard-pazZwrd_, it wouldn't be that easy for Cypher to get it (probably impossible in time perspective).

## Conclusion ##

I always carry files with me (in my phone, in my usb), and I have some more on the cloud... Files have enough entropy to generate passwords, why not use that entropy to forget about passwords? That is how I came with the idea of using files to generate passwords long enough to keep Cypher out of business (until Quantum computers arrive).