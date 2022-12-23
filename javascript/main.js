const linklist = [
    {
        label: "Week 1 - CSS",
        url: "week1/index.html"
    },
    {
        label: "Week 3 - SCSS",
        url: "week3/index.html"
    },
    {
        label: "Week 4 - Style guide for team zen garden",
        url: "week4/index.html"
    },
    {
        label: "Week 5 - Animation",
        url: "week5/index.html"
    },
    {
        label: "Week 5 - Curtain",
        url: "week5/curtain.html"
    },
    {
        label: "Week 6 - Card Design",
        url: "week6/index.html"
    },
    {
        label: "Week 7 - Quote Box",
        url: "week7/index.html"
    },
    {
        label: "Week 8 - Typography",
        url: "week8/index.html"
    },
    {
        label: "Week 10 - Grid practice",
        url: "week10/index.html"
    },
    {
        label: "Week 10 notes",
        url: "week10/index.html"
    },
    {
        label: "Week 11 notes",
        url: "week11/index.html"
    },
    {
        label: "Challenge 2",
        url: "Challenge2b/index.html"
    }
  ]

for (i=0; i<linklist.length; i++) {
    let line = document.createElement('li');
    let link = document.createElement('a');
    // Change the properties of the a element to contain the link for the week
    link.href = linklist[i].url;
    link.textContent = linklist[i].label;
    // Add/append the link element to the line item
    line.appendChild(link);
    
    //<li>Lesson 2:  <a href="./lesson2/design-principles.html">Design Principles</a></li>

    // Add/append the line item to the list
    document.querySelector('#TableOfContents').appendChild(line);
}






