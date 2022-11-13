const renderHeader = () => `
<div class="row">
  <div class="one column"></div>
  <div class="eleven columns">
    <h2>Статьи</h2>
  </div>
</div>

<hr class="mt0"> 
`;

document.getElementsByTagName('header')[0].innerHTML = renderHeader();