const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};
const contactPs = [siteContent['contact']['address'],siteContent['contact']['phone'],siteContent['contact']['email']]
const cntCnt = [siteContent['main-content']['features-content'],siteContent['main-content']['about-content'],siteContent['main-content']['services-content'],siteContent['main-content']['product-content'],siteContent['main-content']['vision-content'],]
const cntHeads = [siteContent['main-content']['features-h4'],siteContent['main-content']['about-h4'],siteContent['main-content']['services-h4'],siteContent['main-content']['product-h4'],siteContent['main-content']['vision-h4'],]
const navItems = [siteContent['nav']['nav-item-1'], siteContent['nav']['nav-item-2'], siteContent['nav']['nav-item-3'], siteContent['nav']['nav-item-4'], siteContent['nav']['nav-item-5'], siteContent['nav']['nav-item-6']]
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
const navLinks = document.querySelectorAll('header nav a')
navLinks.forEach((link, i) => {link.textContent = navItems[i]})
const mainImg = document.getElementById('cta-img')
mainImg.src = siteContent['cta']['img-src']
const mainHead = document.querySelector('h1')
mainHead.textContent = siteContent['cta']['h1']
const mainBtn = document.querySelector('button')
mainBtn.textContent = siteContent['cta']['button']
const mainCntTopHead = document.querySelectorAll('.main-content h4')
mainCntTopHead.forEach((head, i) => {head.textContent = cntHeads[i]})
const mainCntCnt = document.querySelectorAll('.main-content p')
mainCntCnt.forEach((cnt, i) => {cnt.textContent = cntCnt[i]})
const midImg = document.getElementById('middle-img')
midImg.src = siteContent['main-content']['middle-img-src']
const contactHead = document.querySelector('.contact h4')
contactHead.textContent = siteContent['contact']['contact-h4']
const contactInfo = document.querySelectorAll('.contact p')
contactInfo.forEach((item, i) => {item.textContent = contactPs[i]}) 
const foot = document.querySelector('footer p')
foot.textContent = siteContent['footer']['copyright']

const changeStuff = () => {
    navLinks.forEach(link => {link.style.color = 'green'})
    const newNav1 = document.createElement('a')
    newNav1.textContent = 'Home'
    newNav1.href = '#'
    newNav1.style.color = 'green'
    const newNav2 = document.createElement('a')
    newNav2.textContent = 'React is Better'
    newNav2.href = '#'
    newNav2.style.color = 'purple'
    const nav = document.querySelector('nav')
    nav.prepend(newNav1)
    nav.appendChild(newNav2)
    const font = document.createElement('link')
    font.rel = 'stylesheet'
    font.href = 'https://fonts.googleapis.com/css2?family=Syne+Tactile&display=swap'
    const head = document.querySelector('head')
    head.appendChild(font)
    mainCntCnt.forEach(cnt => {cnt.style.fontFamily = "'Syne Tactile', cursive"})
}

mainBtn.addEventListener('click', changeStuff)
