const lazyloadElements = document.querySelectorAll('.js-lazyload')


// for(let i = 0; i < monTableau.length; i++)
// {
//     const element = monTableau[i]
//     console.log(element)
// }


// for(const key in monTableau)
// {
//     const element = monTableau[key]
//     console.log(element)
// }


//for(const element of monTableau)
//{
//    console.log(element)
//}
//
//
// /**
//  * Lazyload
//  */
// const lazyloadElements = document.querySelectorAll('.js-lazyload')

// console.log(lazyloadElements)

/**
 * Lazyload
 */


 const sizes = {}
 sizes.width = window.innerWidth
 sizes.height = window.innerHeight





 window.addEventListener('resize', () =>
 {
   sizes.width = window.innerWidth
   sizes.height = window.innerHeight
 })



for(const _element of lazyloadElements)
{
    if(_element.complete)
    {
        _element.classList.add('is-loaded')
    }
    else
    {
        _element.addEventListener('load', () =>
        {
            _element.classList.add('is-loaded')
        })
    }
}

/**
 * Cursor parallax
 */
 const cursorParallaxElements = document.querySelectorAll('.js-cursor-parallax')

 document.addEventListener('mousemove', (_event) =>
 {
     const ratioX = _event.clientX / sizes.width - 0.5
     const ratioY = _event.clientY / sizes.height - 0.5


    cursorParallaxElements.forEach((_element, _key) =>
    {
      const strength = _key / (cursorParallaxElements.length - 1)
      const translateX = -ratioX * 10 * strength
      const translateY = -ratioY * 10 * strength


      _element.style.transform = `translateX(${translateX}%) translateY(${translateY}%)`

    })
 })


 /*
  scroll parallax
*/

const scrollParallaxElement = document.querySelectorAll('.js-scroll-parallax')

window.addEventListener('scroll', () => {
  const scrollRatio = window.scrollY / sizes.height
  scrollParallaxElement.forEach((_element, _key) => {
    const strength = 1 - _key / (cursorParallaxElements.length - 1)
    const translateY = scrollRatio * strength * 100

    _element.style.transform = `translateY(${translateY}%)`
  })
})