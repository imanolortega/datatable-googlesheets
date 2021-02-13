import React, { useState } from "react";

const useFullPageLoader = () => {
  const [loading, setLoading] = useState(false);

  return [
    loading ?
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="sr-only">Cargando...</span>
        </div>
      </div> : null,
    () => setLoading(true), //Show loader
    () => setLoading(false) //Hide Loader
  ];
};

export default useFullPageLoader;