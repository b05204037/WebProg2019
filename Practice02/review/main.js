function main() {
  const imgUrls = [
    './images/pizza01.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg',
    'https://www.cicis.com/media/1176/pizza_trad_pepperonibeef.png',
    'https://food-images.files.bbci.co.uk/food/recipes/alpine_pizza_32132_16x9.jpg',
    'http://storage.googleapis.com/bro-cdn1/zgrid/themes/10307/images/home/pizza.png',
    'https://sallysbakingaddiction.com/wp-content/uploads/2017/03/stuffed-crust-pizza-3.jpg',
    'http://www.delonghi.com/Global/recipes/multifry/pizza_fresca.jpg',
  ];

  const displayElement = document.getElementById('full-display');
  const contentWrapper = document.getElementById('wrapper');
  const loopSwitch = document.getElementById('loop-switch');
  const backBtn = document.getElementById('back-btn');
  const nextBtn = document.getElementById('next-btn');
  const sourceElement = document.getElementById('source');

  let loopingMode = false;
  let currUrlIdx = 0;
  displayElement.style.backgroundImage = `url(${imgUrls[currUrlIdx]})`;
  sourceElement.innerText = `Source: ${imgUrls[currUrlIdx]}`;

  loopSwitch.classList.add('disabled');
  backBtn.classList.add('disabled');

  loopSwitch.addEventListener('click', () => {
    switchLoopingMode();
  });

  backBtn.addEventListener('click', () => {
    changeImage(-1);
  });

  nextBtn.addEventListener('click', () => {
    changeImage(1);
  });

  let timeout;
  displayElement.onmousemove = () => {
    clearTimeout(timeout);
    contentWrapper.style.opacity = 1;
    timeout = setTimeout(() => {
      contentWrapper.style.opacity = 0;
    }, 2000);
  }

  loopSwitch.onmouseover = () => {
    clearTimeout(timeout);
  }

  nextBtn.onmouseover = () => {
    clearTimeout(timeout);
  }

  backBtn.onmouseover = () => {
    clearTimeout(timeout);
  }

  function switchLoopingMode() {
    loopingMode = !loopingMode;
    if (loopingMode) {
      loopSwitch.classList.remove('disabled');
      nextBtn.classList.remove('disabled');
      backBtn.classList.remove('disabled');
    } else {
      loopSwitch.classList.add('disabled');
      if (currUrlIdx === imgUrls.length - 1) {
        nextBtn.classList.add('disabled');
      } else if (currUrlIdx == 0) {
        backBtn.classList.add('disabled');
      }
    }
  }

  function changeImage(step) {
    if (
      !loopingMode &&
      (step > 0 && currUrlIdx == imgUrls.length - 1 || step < 0 && currUrlIdx == 0)
    ) {
      return;
    }
    currUrlIdx = (currUrlIdx + step + imgUrls.length) % imgUrls.length;
    displayElement.style.opacity = 0;
    setTimeout(() => {
      displayElement.style.backgroundImage = `url(${imgUrls[currUrlIdx]})`;
      sourceElement.innerText = `Source: ${imgUrls[currUrlIdx]}`;
      if (!loopingMode && currUrlIdx === imgUrls.length - 1) {
        nextBtn.classList.add('disabled');
        backBtn.classList.remove('disabled');
      } else if (!loopingMode && currUrlIdx === 0) {
        nextBtn.classList.remove('disabled');
        backBtn.classList.add('disabled');
      } else {
        nextBtn.classList.remove('disabled');
        backBtn.classList.remove('disabled');
      }
      displayElement.style.opacity = 1;
    }, 500);
  }
}