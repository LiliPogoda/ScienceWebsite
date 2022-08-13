export const displayLuciferase = () => {
  const SSR = typeof window === "undefined";
  if (SSR) {
    return "Loading";
  }
  let $3Dmol = (window as any).$3Dmol;
  $(function () {
    let element = $("#container-01");
    let config = { backgroundColor: "orange" };
    let viewer = $3Dmol.createViewer(element, config);
    const pdbUri = "/1lci.pdb";
    jQuery.ajax(pdbUri, {
      success: function (data) {
        let v = viewer;
        v.addModel(data, "pdb"); /* load data */
        v.setStyle(
          {},
          { cartoon: { color: "spectrum" } }
        ); /* style all atoms */
        v.zoomTo(); /* set camera */
        v.render(); /* render scene */
        v.zoom(1.2, 1000); /* slight zoom */
      },
      error: function (hdr, status, err) {
        console.error("Failed to load PDB " + pdbUri + ": " + err);
      },
    });
    viewer.zoomTo();
    viewer.render();
    viewer.zoom(0.8, 2000);
  });
};
