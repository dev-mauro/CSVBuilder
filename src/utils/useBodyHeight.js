const bodyObserver = (setFixed, fixed) => {

  const resizeObserver = new ResizeObserver(entries => {
    console.log(`${entries[0].target.clientHeight} > ${window.innerHeight} ? ${entries[0].target.clientHeight > window.innerHeight}`);

    if(entries[0].target.clientHeight > window.innerHeight) {
      if(fixed == 'fixed')
        return;
      
      setFixed('fixed');
      return;
    }

    if(fixed == '')
        return;

    setFixed("");
  });

  resizeObserver.observe(document.body);
}

export default bodyObserver; 