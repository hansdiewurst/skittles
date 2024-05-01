document.head.insertAdjacentHTML("beforeend",`
<style id="clientCss">
  .armourViewCont{
    position: absolute;
    bottom: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .armourViewItem{
    width: 3.5rem !important;
    height: 3.5rem !important;
    margin: .3rem !important;
    position: unset !important;
    justify-content: center;
  }

  .armourViewImg{
    background-size: cover !important;
    image-rendering: crisp-edges !important;
  }

  .BottomMiddleElements{
    z-index: 0 !important;
  }
</style>`);
