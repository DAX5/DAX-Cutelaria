function Carousel(config){
  this.itens = (typeof config.itens === 'string') ? 
      document.querySelectorAll(config.itens) : config.itens;

  var _this = this;
  var _currentSlide = 0;
  
  init();
  
  function init() {

    for (let i = 0; i < _this.itens.length; i++)
      _this.itens[i].style.display = "none";  

    _currentSlide++;

    if (_currentSlide > _this.itens.length)
      _currentSlide = 1;

    _this.itens[_currentSlide-1].style.display = "block";  
    setTimeout(init, 5000);
  }
}