/* ===== script.js ===== */
$(function () {
  // FAQ：1つだけ開くアコーディオン
  $('.faqQ').on('click', function () {
    const $item = $(this).closest('.faqItem');

    // 他を閉じる
    $('.faqItem').not($item).removeClass('is-open');

    // 自分を開閉
    $item.toggleClass('is-open');
  });

  // スムーススクロール（同一ページ内リンク）
  $('a[href^="#"]').on('click', function (e) {
    const href = $(this).attr('href');
    const $target = $(href === '#' || href === '' ? 'html' : href);
    if ($target.length) {
      e.preventDefault();
      const offsetTop = $target.offset().top;
      $('html, body').animate({ scrollTop: offsetTop }, 500);
    }
  });
});
