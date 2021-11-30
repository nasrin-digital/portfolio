# portfolio
Welcome!

This project is my portfolio.

Site has below sections: 
 Navigation Bar
 Slides
 About me
 Experiences
 Projects
 Contact me

Deployed
Please see my website at  https://nasrinmostajeran.com/ 

Usage
It’s a single-page (index.html) website. Users can scroll or click on each section on the navbar and it jumps to the proper section.

How my website’s built
1.	My website is built by using HTML, CSS, bootstrap, JavaScript, and Jquery.
Index.html
assets/style.css -> custom css file
assets/portfolio.js ->javascript file
assets/img -> contains all images
2.	For the Icons I used Bootstrap icons. This is how I called it in index.html file
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css">

3.	Slideshow component is from bootstrap Carousel 
    https://getbootstrap.com/docs/5.0/components/carousel/
    It needs a  bootstrap js file to make it to slide.
    To automatically cycle to the next element with a delay I set it to 2000 in portfolio.js
        var myCarousel = document.querySelector('#myCarousel')
        var carousel = new bootstrap.Carousel(myCarousel, {
            interval: 2000,
            wrap: false
        })

4.	For the contact form I used jquery to validate user inputs and called “isEmail” method to verify is a valid email address. If would show a message when it’s not a valid address. Also, it shows a message when there is no error. I didn’t make a backend to save user inputs or send an email to me. I’ll do that later on.


To deploy
Simply download the project and run the index.html file. 
