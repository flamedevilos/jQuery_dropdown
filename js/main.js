VirtualSelect.init({
  ele: "#multi-select-dropdown",
});

const select = document.querySelector("select[name=simple]");
new lc_select(select, {
  wrap_width: "100%",
  min_for_search: 3,
  pre_placeh_opt: true,
});

new lc_select('select[name="multiple"]', {
  wrap_width: "100%",
  enable_search: false,
  max_opts: 2,
});
