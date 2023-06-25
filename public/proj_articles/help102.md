Help102 is a web app built for the ENGR102 course at Texas A&M, an introductory Python course that's required for all incoming engineering freshmen. The web app provides two main features: a learning page that teaches the course content in a simplified form, and the review page populated with resources to prepare students for exams or help them with any assignments/labs.

# Purpose

For many students at A&M, freshmen year is one of the most stressful periods of their university life. Due to ETAM, many students who want to get into a popular major like computer science or mechanical engineering aim for a 3.75 or higher GPA in order to be auto admitted into their intended major. Those who aren't able to meet the auto GPA threshold face a bleak reality of having to choose a different major. While I personally wasn't worried about not getting a 3.75 GPA (obviously 😜), I understand how incredibly stressful it can be. As such, I wanted to lessen the burden for at least one required class. While I may not be a chemistry or physics whizz, I am pretty damn good at this programming thing, so I set my sights on helping people get through the ENGR102 course. Specifically I wanted to target two problems that I thought the course had. Number 1 was that there was too much bloated content that was sometimes really confusing. Number 2 was the lack of academic resoucres like a cheat sheet for a list of important functions or practice tests to help prepare for exams.

# Design

The first steps in any project is planning and brainstorming... which I didn't do. I started this project as I was entering college and I was incredibly inexperienced with anything web related. As such, my original goal was mainly to do a little something in order to get my feet wet with web development. I had a general idea of some functions I wanted to implement like adding a lab help section or a review video section. However, I ignored all the functionality thinking making a cool design was all that I needed. Thus, I downloaded Figma and started hacking away at a couple of designs.

### First Try

![design 1](/proj_img/help102/help102_1_design1.png)

The above image was my first ever prototype of the help102 home page. Needless to say it was a UI/UX horror. The navigation buttons were too small, the logo looked weird paired with the "ENGR102" text, and the spacing as well as size was a complete mess. I don't think the overall idea in my head was too bad, but the industrial nature of it simply didn't fit an educational website about software nor did it translate well to other parts of the website. Perhaps a more talented web designer could make it work, but as a complete noob, I knew that I had to scrap the idea.

### A Different Vibe

![design2](/proj_img/help102/help102_2_design2.png)

After looking at a couple of different websites, I saw a website that had a really cool parallax effect and I thought that it would be perfect (it wasn't) for the new help102 design. Looking back on it, there were also a ton of UI/UX issues with the design that I completely ignored at the time. Anyways, after I finished coding it, I realized that it was a terrible experience and so I once again had to scrap the idea.

### Adding Some Flare

![design3](/proj_img/help102/help102_3_design3.png)

For the 3rd (ish) design I took a lot of inspiration from themes common in Saas websites like massive text in the hero section. I honestly didn't think the design was too bad, I just struggled finding the proper spacing between each section. I also thought that besides the landing page, the rest of the design for the learn, review, about, etc. pages was incredibly boring and mundane leading me to redesign those pages a couple more times before realizing I needed to change the overall theme of the website to add more dynamic visuals.

### Landing a Look

![design4](/proj_img/help102/help102_4_design4.png)

After a long, long, long, very long period of designing and redesigning (I'll spare you from witnessing all my other designs) I finally landed on something that I felt was just right. It was simple, yet had enough visual dynamics to keep the audiences' attention. Additionally, I actually made a design system 🤯🤯🤯 (I know), so creating a similar theme with other pages was pretty simple.

# The Coding Part

This article is getting kinda long so I'll skip a lot of the coding portion of it. I didn't face any serious issues, although I did have to figure out things like dynamic routing, user authentication, querying a database, and storage issues **FOR THE FIRST TIME**. However, I was fortunate enough to not have any massive problems that took months to resolve (like the design 💀).

### Brief Tech Stack Overview

I started this project in ViteJS since it was easy to navigate, but then things became more complicated and I thought about switching to NextJS, but the app directory for version 13 was still in beta mode so I just stuck with ViteJS since it did the job. I originally used CSS for the first initial prototypes before switching to TailwindCSS. TailwindCSS allowed me to create the frontend more efficiently and reduced a lot of bloated CSS code (project was 54% CSS at one point 💀). For the backend I handled everything with Firebase (🐐) as it was super easy to add authentication and to connect to a database.

### What I Would Do Differently

Follow best practices. That's literally it. It would've added a ton more structure and consistency to my bloated code and would've made my life a lot easier implementing some functionality like authentication or making the designs responsive.

### Sketchy Authentication

I (hopefully) restricted the Google authentication to only allow @tamu emails, but the way I did it was really sketchy and probably really bad. After researching online for like 4 minutes, I found that it was probably best to use Firebase's cloud function to restrict the email domain, but I was literally too tired at the time to give a fuck so I just called a client-side function that allowed all domains, but would delete users that didn't have emails ending in @tamu. This is really bad (apparently) because it allows users to signup in the first place, but I haven't encountered any issues with the way I implemented it so far.

### What's Next

Honeslty I'm probably just going to leave the project as is until some scalibility issue comes up. I'm honestly way too tired of working on a singular project for months so I don't really feel like refactoring any of the code. I'll leave the project open source though so some unfortunate fellow can go and clean up all the code I've written lol.

# Reflection

I don't have any regrets working on this project. While it took me forever to finish it and I went through a lot of hurdles, this project taught me a lot on how to create a full-stack app. Additionally I made something I was passionate about, something that could help hundreds of people in the world. I'm not completely satisfied with the results, but I'm still proud of what I acomplished. I hope that in the future I'll be able to find some time to improve it as I become a better full-stack developer. Moreso than just creating the help102 site, I hope that this project can inspire other similar projects for other classes as I know that there are many talented developers out there. Anyways this article is getting way too long so peace out 😊.

# 6 Months Later

Will (probably) update this article at 12/30/2023 if I remember lol.
