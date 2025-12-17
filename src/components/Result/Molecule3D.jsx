import { useEffect, useRef } from "react";
import * as $3Dmol from "3dmol";

function Molecule3D({ molBase64 }) {
  const viewerRef = useRef(null);
  const viewerInstanceRef = useRef(null);

  useEffect(() => {
    if (!molBase64 || !viewerRef.current) return;

    // Chỉ tạo viewer một lần
    if (!viewerInstanceRef.current) {
      viewerInstanceRef.current = $3Dmol.createViewer(viewerRef.current, {
        backgroundColor: "white",
      });
    }

    const viewer = viewerInstanceRef.current;
    const molBlock = atob(molBase64);

    viewer.clear();
    viewer.addModel(molBlock, "mol");
    viewer.setStyle({}, { stick: {} });
    viewer.zoomTo();
    viewer.render();

    // Cleanup khi component unmount
    return () => {
      if (viewerInstanceRef.current) {
        viewerInstanceRef.current.clear();
      }
    };
  }, [molBase64]);

  return (
    <div
      ref={viewerRef}
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    />
  );
}

export default Molecule3D;
