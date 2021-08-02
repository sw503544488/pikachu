let $lightning = $('.lightning')
let $nose = $('.shanxing,.face')
console.log('hi')

$nose.mouseover(() => {
  $lightning.removeClass('hidden')
})
$nose.mouseleave(() => {

  $lightning.addClass('hidden')

})