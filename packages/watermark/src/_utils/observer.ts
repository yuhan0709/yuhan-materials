function useMutationObserver(id) {
  new MutationObserver((records) => {
    const __wm = document.getElementById(id);
    console.log(__wm, records);
  });
}

export default useMutationObserver;
