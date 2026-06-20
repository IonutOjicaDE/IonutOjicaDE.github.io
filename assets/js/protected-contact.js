(function () {
  if (window.protectedContactLoaded) return;
  window.protectedContactLoaded = true;

  function emailValue() {
    const local = ['con', 'tact'].join('');
    const domain = ['io', 'nuto', 'jica'].join('');
    const tld = ['r', 'o'].join('');
    return `${local}@${domain}.${tld}`;
  }

  function phoneDisplay() {
    return ['+49', '151', '205', '72788'].join(' ');
  }

  function phoneHref() {
    return ['+', '49', '151', '205', '72788'].join('');
  }

  document.addEventListener('click', function (event) {
    const button = event.target.closest('.protected-contact__button');
    if (!button) return;

    const wrapper = button.closest('[data-protected-contact]');
    if (!wrapper) return;

    const kind = wrapper.getAttribute('data-protected-contact');
    const link = wrapper.querySelector('.protected-contact__link');
    if (!link) return;

    if (kind === 'phone') {
      link.textContent = phoneDisplay();
      link.href = `tel:${phoneHref()}`;
    } else {
      const email = emailValue();
      link.textContent = email;
      link.href = `mailto:${email}`;
    }

    link.hidden = false;
    button.hidden = true;
  });
})();
